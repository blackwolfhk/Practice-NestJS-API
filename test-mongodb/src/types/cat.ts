import { z } from 'zod';

export const Cat = z.object({
  name: z.string(),
  age: z.number(),
  breed: z.string(),
});
export type Cat = z.infer<typeof Cat>;
