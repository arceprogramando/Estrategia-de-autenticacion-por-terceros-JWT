import { Router } from 'express';

import CartModel from '../dao/models/carts.models.js';

const router = Router();

// Creacion Create ("C".R.U.D) Para crear un nuevo carrito

router.post('/', async (req, res) => {
  try {
    const { products } = req.body;

    const cartItems = products.map((product) => ({
      product: product.product,
      quantity: product.quantity,
    }));

    const newCart = new CartModel({
      products: cartItems,
    });

    const createdCart = await newCart.save();
    return res.status(201).json({ status: 'success', cart: createdCart });
  } catch (error) {
    return res.status(500).json({ error: `Error al crear el carrito ${error}` });
  }
});

// Creacion Create ("C".R.U.D) Agrega o modifica un producto en un carrito existente

router.post('/:cid/product/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    const cart = await CartModel.findById(cid);
    if (!cart) {
      return res.status(404).json({ error: 'La cart no existe' });
    }

    const productIndex = cart.products.findIndex((product) => product.id === pid);

    if (productIndex !== -1) {
      cart.products[productIndex].quantity = quantity;
    } else {
      cart.products.push({ id: pid, quantity });
    }

    const updatedCart = await cart.save();

    return res.status(200).json(updatedCart);
  } catch (error) {
    return res.status(500).json({ error: 'Error al agregar o modificar el producto en el carrito' });
  }
});

// Lectura Read (C."R".U.D) Lectura de todas las carts creadas

router.get('/', async (req, res) => {
  try {
    const { limit } = req.query;
    let query = CartModel.find({});

    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    const carts = await query.exec();

    if (limit) {
      const limitedCarts = carts.slice(0, limit);
      res.status(200).json(limitedCarts);
    } else {
      res.status(200).json(carts);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los carritos' });
  }
});

// Lectura Read (C."R".U.D) Lectura de carts por id

router.get('/:id', async (req, res) => {
  try {
    const cart = await CartModel.findById({ _id: req.params.id }).populate('products.product');

    if (!cart) {
      return res.status(404).json({ error: 'Carrito no encontrado' });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: `Error al obtener el carrito ${error}` });
  }
});

// Actualizacion Update (C.R."U".D)

router.put('/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const { products } = req.body;

    const updatedCart = await CartModel.findByIdAndUpdate(cid, { products }, { new: true });

    if (updatedCart) {
      return res.status(200).json(updatedCart);
    }
    return res.status(404).json({ error: 'El carrito no existe' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el carrito' });
  }
});

// Actualizacion Update (C.R."U".D) sobre la cantidad de el id de un producto dentro de una cart

router.put('/:cid/products/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    const cart = await CartModel.findById({ _id: cid });
    if (!cart) {
      return res.status(404).json({ error: 'El carrito no existe' });
    }

    const existingProduct = cart.products.find((cartProduct) => cartProduct.id === pid);
    if (!existingProduct) {
      return res.status(404).json({ error: 'El producto no existe en el carrito' });
    }

    existingProduct.quantity = quantity;
    const updatedCart = await cart.save();

    return res.status(200).json(updatedCart);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la cantidad de ejemplares del producto en el carrito' });
  }
});

// Borrar Delete (C.R.U."D")

router.delete('/carts/:cid', async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await CartModel.findByIdAndDelete(cid);

    if (!cart) {
      return res.status(404).json({ error: 'La cart no existe' });
    }

    return res.status(200).json({ status: 'success', message: 'La cart ha sido eliminada' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la cart' });
  }
});

// Borrar Delete (C.R.U.D) Por id de carrito e id de producto de referencia

router.delete('/:cid/products/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const cart = await CartModel.findById({ _id: cid });
    if (!cart) {
      return res.status(404).json({ error: 'El carrito no existe' });
    }

    const productIndex = cart.products.findIndex((product) => product.id === pid);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'El producto no existe en el carrito' });
    }

    cart.products.splice(productIndex, 1);
    const updatedCart = await cart.save();

    return res.status(200).json(updatedCart);
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
  }
});

export default router;
