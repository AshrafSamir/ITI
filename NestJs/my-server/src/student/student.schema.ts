import * as mongoose from 'mongoose';

export let StudentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  courseIds: Array,
});
