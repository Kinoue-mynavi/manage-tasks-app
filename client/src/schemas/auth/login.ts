/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';

import { passwordSchema, nonEmptyStringSchema } from '@/schemas/base';

export const LoginSchema = z.object({
  email: nonEmptyStringSchema.email('入力値の形式に誤りがあります'),
  password: passwordSchema,
});

export type LoginSchema = z.infer<typeof LoginSchema>;
