import { Response, Request, NextFunction } from "express";
export declare const response: {
    internal: (err: unknown, req: Request, res: Response, next: NextFunction) => void;
};
