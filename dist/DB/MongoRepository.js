"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
class MongoRepository {
    constructor(collectionName, schema, db) {
        this.schema = schema;
        this.changeSchema = this.schema.partial();
        this.collection = db.db.collection(collectionName);
    }
    async GetOrCreate(input) {
        let item = await this.collection.findOne({ _id: input._id });
        if (!item)
            item = await this.InsertItem(input);
        return item;
    }
    async InsertItem(item) {
        let verified = this.schema.safeParse(item);
        if (!verified.success)
            throw verified.error;
        const inserted = await this.collection.insertOne(verified.data);
        return { ...verified.data, _id: inserted.insertedId };
    }
    async Update(item, { ...changes }) {
        console.log("MongoRepository Update : changes : ", changes);
        const verified = this.changeSchema.parse(changes);
        // const  changed = await this.collection.updateOne({_id,...verified});
        // const change:any  = { $set: { ...verified } };
        const updated = await this.collection.updateOne({ _id: item._id }, { $set: { ...verified } });
        return updated.modifiedCount > 0 ? { ...item, ...verified } : null;
        // Object.assign(user,changed);
        // return user;
    }
}
exports.MongoRepository = MongoRepository;
