import { Response, Request, NextFunction } from "express";


const internal = function (err: unknown, req: Request, res: Response, next: NextFunction) {
    if(err instanceof Error)
    {
        res.status(500).send(err.message);
    }else
    {
        next(err);
    }
    
}
export const response = {
    internal
}