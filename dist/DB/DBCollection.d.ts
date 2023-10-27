import { BSON, Collection, Filter } from "mongodb";
import z from "zod";
import { Mongodb } from './Mongo';
export declare class DBCollection<T extends BSON.Document> {
    private schema;
    collection: Collection<T>;
    private changeSchema;
    constructor(collectionName: string, schema: z.AnyZodObject, db: Mongodb);
    FindOne(input: Filter<T>): Promise<T | null>;
    GetOrCreate(input: Partial<T>): Promise<T>;
    InsertItem(item: Partial<T>): Promise<T>;
    Update(item: T, { ...changes }: Partial<T>): Promise<any>;
}
