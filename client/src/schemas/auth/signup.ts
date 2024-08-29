/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';

import { nonEmptyStringSchema, passwordSchema } from '@/schemas/base';

export const SignupSchema = z
  .object({
    name: nonEmptyStringSchema,
    email: nonEmptyStringSchema.email('入力形式に誤りがあります'),
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
  })
  .refine(
    (args) => {
      const { password, passwordConfirmation } = args;
      return password === passwordConfirmation;
    },
    {
      message: 'パスワードが一致しません',
      path: ['passwordConfirmation'],
    },
  );

export type SignupSchema = z.infer<typeof SignupSchema>;
