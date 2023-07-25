import { Schema, model } from 'mongoose';

const collectionName = 'session';

const userSchema = new Schema({
  firstname: {
    type: String,

  },
  lastname: {
    type: String,

  },
  email: {
    type: String,

  },
  age: {
    type: Number,

  },
  password: {
    type: String,
  },
});

const userModel = model(collectionName, userSchema);
export default userModel;
