import { Schema, Document } from 'mongoose';

export interface Cat extends Document {
  name: string;
  age: number;
  breed: string;
}

export const CatSchema = new Schema<Cat>({
  name: String,
  age: Number,
  breed: String,
});

// import { z } from 'zod';

// export const catSchema = z.object({
//   name: z.string(),
//   age: z.number(),
//   breed: z.string(),
// });
// export type Cat = z.infer<typeof catSchema>;

// import { z } from 'zod';

// export const CatSchema = z.object({
//   name: z.string(),
//   age: z.number(),
//   breed: z.string(),
// });
// // export type Cat = z.infer<typeof CatSchema>;

// export interface CatDocument {
//   name: string;
//   age: number;
//   breed: string;
// }
