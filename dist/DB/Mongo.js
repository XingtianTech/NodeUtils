"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongodb = void 0;
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
}
exports.Mongodb = Mongodb;
