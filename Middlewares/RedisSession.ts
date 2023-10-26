import RedisStore from "connect-redis";
import session from "express-session";
import {createClient} from "redis"

const redisClient = createClient()
redisClient.connect().catch(console.error)


// let redisStore = new RedisStore({
//     client: redisClient,
//     // disableTouch:true,
//     prefix: "xingtian",
//   })
  
  export const RedisSession = ({prefix,secret,name}:any)=>
  {
    return session({
      store: new RedisStore({ client: redisClient,  prefix: prefix, }) ,
      secret: secret,
      saveUninitialized: false,
      resave: false,
      name: name,
      cookie: {
        secure: false, // if true: only transmit cookie over https, in prod, always activate this
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30, // session max age in milliseconds
        // explicitly set cookie to lax
        // to make sure that all cookies accept it
        // you should never use none anyway
        sameSite: 'lax',
      },  
    });
  } 