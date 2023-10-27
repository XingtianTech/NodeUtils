import {NextFunction, Request, Response} from 'express';
export default function (err: any, req: Request, res: Response, next: NextFunction) {
    if(typeof err ==="string" )
    {
        res.status(500).json({error:err});
    }else if(typeof err === 'object')
    {
        const {status = 500} = err;
        res.status(status).json(err);
    }
}