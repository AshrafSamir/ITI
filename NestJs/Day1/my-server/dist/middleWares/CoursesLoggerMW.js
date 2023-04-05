"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesLoggerMW = void 0;
class CoursesLoggerMW {
    use(req, res, next) {
        console.log(req.body);
        next();
    }
}
exports.CoursesLoggerMW = CoursesLoggerMW;
//# sourceMappingURL=CoursesLoggerMW.js.map