import mongoose from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  code: String,
  price: {
    type: Number,
    required: true,
    index: true, // Con index: true podria indexarlo
  },
  status: Boolean,
  stock: Number,
  category: String,
  thumbnails: String,
});

productsSchema.plugin(mongoosePagination);

const productModel = mongoose.model(productsCollection, productsSchema);

export default productModel;
