import {NextFunction, Request, Response} from 'express';

export default function (req: Request, res: Response, next: NextFunction) {
    const {status = 200,json} = res.locals;
    if(json)
    {
        res.status(status).json(json);
    }else
    {
        next();
    }
}