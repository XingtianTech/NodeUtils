"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisSession = void 0;
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)();
redisClient.connect().catch(console.error);
// let redisStore = new RedisStore({
//     client: redisClient,
//     // disableTouch:true,
//     prefix: "xingtian",
//   })
const RedisSession = ({ prefix, secret, name }) => {
    return (0, express_session_1.default)({
        store: new connect_redis_1.default({ client: redisClient, prefix: prefix, }),
        secret: secret,
        saveUninitialized: false,
        resave: false,
        name: name,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 30,
            // explicitly set cookie to lax
            // to make sure that all cookies accept it
            // you should never use none anyway
            sameSite: 'lax',
        },
    });
};
exports.RedisSession = RedisSession;
