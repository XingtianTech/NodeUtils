import { createId,isCuid } from '@paralleldrive/cuid2';
import z from 'zod';

export const Id = Object.freeze({
  makeId: createId,
  isValidId: isCuid
})
export const MongoDocSchema = z.object({
  _id:z.string().cuid().default(()=>Id.makeId())
})
// export type MongoDoc = z.infer<typeof MongoDocSchema>

// export default Id