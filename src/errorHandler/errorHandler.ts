import { Request, Response, NextFunction } from "express";

type error = {
    type: string,
    message: string
};

export default function errorHandler(error: error, req: Request, res: Response, next: NextFunction) {
    let code: number;
    
    switch (error.type) {
        case "request format":
            code = 422;
            error.message = "article id provided is invalid";
            break;
        case "not found":
            code = 404;
            error.message = "article not found";
            break;
        default:
            code = 500;
            break;
    }
    
    res.status(code).send(error.message);
}