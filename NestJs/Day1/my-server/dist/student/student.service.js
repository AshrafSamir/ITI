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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let StudentService = class StudentService {
    constructor(StudentModel, CourseModel) {
        this.StudentModel = StudentModel;
        this.CourseModel = CourseModel;
    }
    async create(createStudentDto) {
        let std = new this.StudentModel(createStudentDto);
        await std.save();
        console.log(std);
        return std;
    }
    async findAll() {
        return await this.StudentModel.find({});
    }
    async findOne(id) {
        return await this.StudentModel.findOne({ id });
    }
    async findCourses(id) {
        let std = await this.StudentModel.findOne({ id });
        let courseIds = [];
        for (let i = 0; i < std.courseIds.length; i++) {
            let course = await this.CourseModel.findOne({ id: std.courseIds[i] });
            if (course)
                courseIds.push(course);
        }
        return courseIds;
    }
    async update(id, updateStudentDto) {
        return await this.StudentModel.findOneAndUpdate({ id }, updateStudentDto);
    }
    async remove(id) {
        return await this.StudentModel.deleteOne({ id });
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('student')),
    __param(1, (0, mongoose_1.InjectModel)('course')),
    __metadata("design:paramtypes", [Object, Object])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map