import { z } from 'zod';

const NON_EMPTY_ERROR = '必須項目です';
export const nonEmptyStringSchema = z
  .string({ required_error: NON_EMPTY_ERROR })
  .min(1, NON_EMPTY_ERROR);

export const passwordSchema = nonEmptyStringSchema
  .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' })
  .min(8, { message: '8文字以上で入力してください。' })
  .max(16, { message: '15文字以下で入力してください。' });
