/// <reference types="qs" />
/// <reference types="express" />
export type RedisSessionOptions = {
    prefix: string;
    secret: string;
    name: string;
};
export declare const RedisSession: ({ prefix, secret, name }: RedisSessionOptions) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
