import { BSON, Collection } from "mongodb";
import z from "zod";
import { Mongodb } from './Mongo';
export declare class MongoRepository<T extends BSON.Document> {
    private schema;
    private db;
    collection: Collection<T>;
    private changeSchema;
    constructor(collectionName: string, schema: z.AnyZodObject, db: Mongodb);
    GetOrCreate(input: Partial<T>): Promise<T>;
    InsertItem(item: Partial<T>): Promise<T>;
    Update(item: T, { ...changes }: Partial<T>): Promise<any>;
}
