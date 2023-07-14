import { Schema, model, Types } from 'mongoose';

const cartsCollection = 'carts';

const cartItemSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: 'products',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  products: [cartItemSchema],
});

const CartModel = model(cartsCollection, cartSchema);

export default CartModel;
