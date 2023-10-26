"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// import { singleton } from "tsyringe";
// @singleton()
class Mongodb {
    get db() { return this._db; }
    constructor(url) {
        console.log("process.env.MONGO_KOL :", url);
        this.client = new mongodb_1.MongoClient(url);
        this._db = this.client.db();
    }
    connect() {
        return this.client.connect();
    }
    static ToArrayQuery(id, property, item) {
        let result = { _id: id };
        for (var kv in item) {
            result[property + "." + kv] = item[kv];
        }
        return result;
    }
    static GetArrayFilter(property) {
        return { _id: 0, [property + ".$"]: 1 };
    }
}
exports.default = Mongodb;
