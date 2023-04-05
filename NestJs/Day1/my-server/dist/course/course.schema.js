"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
const mongoose = require("mongoose");
exports.CourseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    duration: Array,
});
//# sourceMappingURL=course.schema.js.map