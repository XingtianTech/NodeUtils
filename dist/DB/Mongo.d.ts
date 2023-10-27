import { Db, MongoClient } from "mongodb";
export declare class Mongodb {
    client: MongoClient;
    private _db;
    get db(): Db;
    constructor(url: string);
    connect(): Promise<MongoClient>;
}
