import { Router } from 'express';
import productModel from '../dao/models/products.models.js';
import messageModel from '../dao/models/message.models.js';
import CartModel from '../dao/models/carts.models.js';
import authMdw from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', async (req, res) => {
  res.render('login', {
    style: 'index.css',
  });
});

router.get('/products', async (req, res) => {
  try {
    const { page = 1, limit = 10, sort } = req.query;

    const query = {};

    if (req.query.query) {
      query.title = { $regex: req.query.query, $options: 'i' };
    }

    const options = { page, limit, lean: true };

    if (sort === 'asc') {
      options.sort = { price: 1 };
    } else if (sort === 'desc') {
      options.sort = { price: -1 };
    }

    const {
      docs, hasPrevPage, hasNextPage, nextPage, prevPage,
    } = await productModel.paginate(query, options);

    let visit;
    if (req.session.counter) {
      req.session.counter += 1;
      visit = `Se ha visitado el sitio ${req.session.counter} veces`;
    } else {
      req.session.counter = 1;
      visit = 'Se ha visitado el sitio 1 vez';
    }

    res.render('products', {
      visit,
      products: docs,
      style: 'index.css',
      page,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage,
      user: req.session.user,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

router.get('/chat', async (req, res) => {
  try {
    const findmessage = await messageModel.find();
    const messages = findmessage.map((message) => message.toObject());
    // Aqui envio mis products
    res.render('chat', {
      messages,
      style: 'index.css',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

router.get('/carts/:id', async (req, res) => {
  try {
    const cart = await CartModel.findById({ _id: req.params.id }).populate('products.product');

    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    return res.render('carts', {
      cart: cart.toObject(),
      style: '../../css/index.css',
    });
  } catch (error) {
    return res.status(500).json({ error: `Error al obtener el carrito ${error}` });
  }
});

router.get('/register', async (req, res) => {
  res.render('register');
});

router.get('/recover', async (req, res) => {
  res.render('recover');
});

router.get('/profile', authMdw, async (req, res) => {
  const { user } = req.session;
  // eslint-disable-next-line no-console
  console.log(user);
  res.render('profile', {
    followers: user.followers,
    lastname: user.firstname || user.login,
    age: user.age,
    email: user.email,
  });
});

export default router;
