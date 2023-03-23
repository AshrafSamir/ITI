import * as mongoose from 'mongoose';

export let AuthSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  isAdmin: Boolean,
});
