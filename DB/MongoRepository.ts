import { BSON, Collection, Filter} from "mongodb";
import z from "zod";
import {Mongodb} from './Mongo'

export class MongoRepository<T extends  BSON.Document>
{
    public collection: Collection<T>;
    private changeSchema;
    constructor(collectionName:string,private schema:z.AnyZodObject, db :Mongodb)
    {
        this.changeSchema = this.schema.partial();
        this.collection = db.db.collection<T>(collectionName);
    }

    async FindOne (input:Filter<T>) {
        return await this.collection.findOne<T>(input);
      }


    async GetOrCreate(input:Partial<T>):Promise<T>
    {
        let item = await this.collection.findOne<T>({_id:input._id});
        if(!item)item = await this.InsertItem(input);
        return item;
    }

    async InsertItem(item:Partial<T>):Promise<T> 
    {
        let verified : any= this.schema.safeParse(item);
        if(!verified.success) throw verified.error;
        const inserted = await this.collection.insertOne(verified.data);
        return {...verified.data,_id:inserted.insertedId}
    }

    async Update(item:T,{...changes}:Partial<T>)
    {
        console.log("MongoRepository Update : changes : ",changes);
        const verified:any = this.changeSchema.parse(changes);
        // const  changed = await this.collection.updateOne({_id,...verified});
        // const change:any  = { $set: { ...verified } };
        const updated = await this.collection.updateOne({ _id:item._id }, { $set: { ...verified } })
        return updated.modifiedCount > 0 ? {...item, ...verified } : null

        // Object.assign(user,changed);
        // return user;
    }

    
}