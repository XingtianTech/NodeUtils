/// <reference types="qs" />
/// <reference types="express" />
export declare const RedisSession: ({ prefix, secret, name }: any) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
