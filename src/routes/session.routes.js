import { Router } from 'express';
import userModel from '../dao/models/user.model.js';
import encrypts from '../utils/encrypts.js';

const router = Router();

router.get('/', (req, res) => {
  // Si al conectarse la sesion ya existe ,entocnes aumentar el contador
  if (req.session.counter) {
    req.session.counter += 1;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces`);
  } else {
    // Si no hay una sesion para el usuario, entonces inicializar en 1
    req.session.counter = 1;
    res.send('Bienvenido');
  }
});

router.post('/register', async (req, res) => {
  try {
    const {
      firstname, lastname, email, age, password,
    } = req.body;

    if (!firstname || !lastname || !email || !age || !password) {
      return res.status(400).json({ state: 'fallido', message: 'Por favor, completa todos los campos.' });
    }

    const existingUser = await userModel.findOne(
      { email },
      {
        email: 1,
        firstname: 1,
        lastname: 1,
        password: 1,
      },
    );
    if (existingUser) {
      return res.status(409).json({ state: 'fallido', message: 'El correo electrónico ya está registrado.' });
    }

    if (age <= 0) {
      return res.status(400).json({ state: 'fallido', message: 'La edad debe ser un número positivo.' });
    }

    const newUser = await userModel.create({
      firstname,
      lastname,
      email,
      age,
      password: encrypts.createHash(password),
    });

    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: session.routes.js:13 ~ router.post ~ newUser:', newUser);

    req.session.user = { ...newUser };
    return res.redirect('/');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: session.routes.js:60 ~ router.post ~ error:', error);
    return res.status(500).json({ state: 'fallido', message: 'Hubo un error al registrar el usuario.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: 'fallido', error: 'valores incompletos' });

    const findUser = await userModel.findOne(
      { email },
      {
        email: 1,
        firstname: 1,
        lastname: 1,
        password: 1,
      },
    );

    if (!findUser) {
      return res.status(401).json({ message: 'Usuario no registrado o existente' });
    }

    if (!findUser.password || !encrypts.isValidPassword(findUser, password)) {
      return res.status(403).send({ status: 'error', error: 'Contraseña incorrecta' });
    }

    req.session.user = findUser;
    if (email === 'adminCoder@coder.com') {
      req.session.user = {
        ...findUser,
        password: '',
        admin: true,
      };
    } else {
      req.session.user = {
        ...findUser,
        password: '',
        admin: false,
      };
    }
    return res.redirect('/products');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: session.routes.js:107 ~ router.post ~ error:', error);
    return res.status(401).json({ message: 'Error al logear' });
  }
});

router.get('/welcome', async (req, res) => {
  const { name } = req.query;
  // eslint-disable-next-line no-console
  console.log('🚀 ~ file: session.routes.js:69 ~ router.get ~ name:', name);

  const counter = req.session?.counter;

  if (!counter) {
    req.session.counter = 1;
    return res.send(`Te damos la bienvenida ${name}`);
  }

  req.session.user = name;
  req.session.counter += 1;

  return res.send(`Has ingresado ${name} exitosamente, unas ${req.session.counter} veces`);
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (!error) {
      return res.redirect('/');
    }
    return res.status(500).json({ status: 'Error al cerrar sesión', body: error });
  });
});

export default router;
