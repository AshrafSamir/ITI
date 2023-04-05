"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    courseIds: Array,
});
//# sourceMappingURL=student.schema.js.map