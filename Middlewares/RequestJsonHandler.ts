import { Request, Response} from 'express';


export type RequestResult = {status:number,body:any};
export type RequestHandler = (request:Request) => Promise<RequestResult>;

export const HandleRequest = (handler:RequestHandler) =>
{
    return (req: Request, res: Response) =>
    {
        handler(req).then(result =>{
            res.status(result.status).json(result.body);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send({ error: 'An unkown error occurred.' })
        })
    }
}