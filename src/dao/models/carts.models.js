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
  products: {
    type: [cartItemSchema],
    default: [],
  },
});

const CartModel = model(cartsCollection, cartSchema);

/* Tambien puedo usar (
Schema.pre('find',function(){
  this.populate('notes.note')
}) // Para hacer generico el populate
  */
export default CartModel;
