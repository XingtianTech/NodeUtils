import { Db, MongoClient } from "mongodb";
// import { singleton } from "tsyringe";

// @singleton()
export class Mongodb
{
    client:MongoClient;
    private _db: Db;
    public get db(): Db {return this._db; }
    constructor(url:string)
    {
        console.log("process.env.MONGO_KOL :",url);
        this.client = new MongoClient(url!);
        this._db=this.client.db();
    }
    
    connect(){ 
        return this.client.connect(); 
    }
    
    // static ToArrayQuery<T>(id:string,property:string,item:T)
    // {
    //     let result:any = {_id:id}
    //     for(var kv in item)
    //     {
    //         result[property+"."+kv] = item[kv];
    //     }
    //     return result;
    // }
    // static GetArrayFilter(property:string)
    // {
    //     return {_id:0,[property+".$"]:1}
    // }
}