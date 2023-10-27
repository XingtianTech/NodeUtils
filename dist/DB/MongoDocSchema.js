"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDocSchema = exports.Id = void 0;
const cuid2_1 = require("@paralleldrive/cuid2");
const zod_1 = __importDefault(require("zod"));
exports.Id = Object.freeze({
    makeId: cuid2_1.createId,
    isValidId: cuid2_1.isCuid
});
exports.MongoDocSchema = zod_1.default.object({
    _id: zod_1.default.string().cuid2().default(() => exports.Id.makeId())
});
// export type MongoDoc = z.infer<typeof MongoDocSchema>
// export default Id
