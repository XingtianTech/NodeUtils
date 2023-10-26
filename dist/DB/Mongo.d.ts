import { Db, MongoClient } from "mongodb";
export declare class Mongodb {
    client: MongoClient;
    private _db;
    get db(): Db;
    constructor(url: string);
    connect(): Promise<MongoClient>;
    static ToArrayQuery<T>(id: string, property: string, item: T): any;
    static GetArrayFilter(property: string): {
        [x: string]: number;
        _id: number;
    };
}
