import { Router } from 'express';

const router = Router();

router.get('/session', (req, res) => {
  if (req.session.counter) {
    req.session.counter += 1;
    res.send(`Se ha visitado el sitio ${req.session.counter} veces.`);
  } else {
    req.session.counter = 1;
    res.send('Bienvenido');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send('logout ok');
    } else {
      res.send({ status: 'Logout' });
    }
  });
});

router.get('/login', (req, res) => {
  const { username, password } = req.query;
  if (username !== 'pepe' || password !== 'pepepass') {
    return res.send('Login Failed');
  }
  req.session.user = username;
  req.session.admin = true;
  return res.send('Login success');
});

export default router;
