import { Request, Response } from 'express';
export type RequestResult = {
    status: number;
    body: any;
};
export type RequestHandler = (request: Request) => Promise<RequestResult>;
export declare const HandleRequest: (handler: RequestHandler) => (req: Request, res: Response) => void;
