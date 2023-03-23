import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class StudentsLoggerMW implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {

        console.log(req.body)
        next()
    }

    
}