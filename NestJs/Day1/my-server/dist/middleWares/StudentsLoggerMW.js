"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsLoggerMW = void 0;
class StudentsLoggerMW {
    use(req, res, next) {
        console.log(req.body);
        next();
    }
}
exports.StudentsLoggerMW = StudentsLoggerMW;
//# sourceMappingURL=StudentsLoggerMW.js.map