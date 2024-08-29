'use client';

import React from 'react';

import { Button } from '@/components/ui/atoms/Button';
import { Heading } from '@/components/ui/atoms/Heading';
import { TextInput } from '@/components/ui/atoms/TextInput';
import { Container } from '@/components/ui/layouts/Container';
import { FormControl } from '@/components/ui/modules/FormControl';
import { useLogin } from '@/hooks/useAuth';

import { formStyle } from './style.css';

const Login: React.FC = React.memo(() => {
  const { handleLogin, register } = useLogin();

  return (
    <Container marginBlock="l" paddingInline="l" gap="l">
      <Heading as="h2" textAlign="center">
        Login Page
      </Heading>
      <form className={formStyle}>
        <Container gap="xs">
          <FormControl label="メールアドレス">
            <TextInput
              {...register('email')}
              placeholder="example@example.com"
            />
          </FormControl>
          <FormControl label="パスワード">
            <TextInput
              {...register('password')}
              type="password"
              placeholder="password"
            />
          </FormControl>
        </Container>
        <Button onClick={handleLogin}>ログイン</Button>
      </form>
    </Container>
  );
});

export default Login;
