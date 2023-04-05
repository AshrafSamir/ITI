"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_module_1 = require("./student/student.module");
const course_module_1 = require("./course/course.module");
const StudentsLoggerMW_1 = require("./middleWares/StudentsLoggerMW");
const CoursesLoggerMW_1 = require("./middleWares/CoursesLoggerMW");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(StudentsLoggerMW_1.StudentsLoggerMW, CoursesLoggerMW_1.CoursesLoggerMW).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [course_module_1.CourseModule, student_module_1.StudentModule,
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/udacity')
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map