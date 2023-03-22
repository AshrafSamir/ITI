import * as mongoose from "mongoose"

export let CourseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    duration: Array,

})