'use client';

import React from 'react';

import { Button } from '@/components/ui/atoms/Button';
import { Heading } from '@/components/ui/atoms/Heading';
import { TextInput } from '@/components/ui/atoms/TextInput';
import { Container } from '@/components/ui/layouts/Container';
import { FormControl } from '@/components/ui/modules/FormControl';
import { useSignup } from '@/hooks/useAuth';

import { formStyle } from './style.css';

const Signup: React.FC = React.memo(() => {
  const { handleSignup, register, isValid, errors } = useSignup();
  return (
    <Container marginBlock="l" paddingInline="l" gap="l">
      <Heading as="h2" textAlign="center">
        Sinup Page
      </Heading>
      <form className={formStyle}>
        <Container gap="xs">
          <FormControl label="登録名" errorMessage={errors.name?.message}>
            <TextInput {...register('name')} placeholder="山田 太郎" />
          </FormControl>
          <FormControl
            label="メールアドレス"
            errorMessage={errors.email?.message}
          >
            <TextInput
              {...register('email')}
              isError={!!errors.email?.message}
              placeholder="example@example.com"
            />
          </FormControl>
          <FormControl
            label="パスワード"
            errorMessage={errors.password?.message}
          >
            <TextInput
              {...register('password')}
              type="password"
              placeholder="password"
              isError={!!errors.password?.message}
            />
          </FormControl>
          <FormControl
            label="パスワード（確認）"
            errorMessage={errors.passwordConfirmation?.message}
          >
            <TextInput
              {...register('passwordConfirmation')}
              type="password"
              placeholder="password"
              isError={!!errors.passwordConfirmation?.message}
            />
          </FormControl>
        </Container>
        <Button onClick={handleSignup} disabled={!isValid}>
          新規登録
        </Button>
      </form>
    </Container>
  );
});

export default Signup;
