"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let CourseService = class CourseService {
    constructor(CourseModel) {
        this.CourseModel = CourseModel;
    }
    async create(createCourseDto) {
        let std = new this.CourseModel(createCourseDto);
        await std.save();
        console.log(std);
        return std;
    }
    async findAll() {
        return await this.CourseModel.find({});
    }
    async findOne(id) {
        return await this.CourseModel.findOne({ id });
    }
    async update(id, updateCourseDto) {
        return await this.CourseModel.findOneAndUpdate({ id }, updateCourseDto);
    }
    async remove(id) {
        return await this.CourseModel.deleteOne({ id });
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('course')),
    __metadata("design:paramtypes", [Object])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map