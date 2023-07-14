import { Router } from 'express';
import productModel from '../dao/models/products.models.js';
import configObject from '../config/config.js';
import messageModel from '../dao/models/message.models.js';
import cartModel from '../dao/models/carts.models.js';

const router = Router();
const { PORT } = configObject;

router.get('/', async (req, res) => {
  const findproducts = await productModel.find();
  const products = findproducts.map((product) => product.toObject());
  const { cookie } = req;

  res.render('home', {
    cookie,
    products,
    style: 'index.css',
    port: PORT,
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

    res.render('products', {
      products: docs,
      style: 'index.css',
      page,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage,
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
    const cartId = req.params.id;
    const cart = await cartModel.findById(cartId).populate('products');

    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    return res.render('carts', {
      cart: cart.toObject(),
      style: 'index.css',
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el carrito' });
  }
});

export default router;
