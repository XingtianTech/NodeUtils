import { createId, isCuid } from '@paralleldrive/cuid2';
import z from 'zod';
export declare const Id: Readonly<{
    makeId: typeof createId;
    isValidId: typeof isCuid;
}>;
export declare const MongoDocSchema: z.ZodObject<{
    _id: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    _id: string;
}, {
    _id?: string | undefined;
}>;
