import { Schema, model } from 'mongoose';

const collectionName = 'session';

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
});

const userModel = model(collectionName, userSchema);
export default userModel;
