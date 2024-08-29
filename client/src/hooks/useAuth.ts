'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { HEADER_AUTH_KEY } from '@/constants/session';
import { useCookie } from '@/hooks/useCookie';
import { LoginSchema } from '@/schemas/auth/login';
import { SignupSchema } from '@/schemas/auth/signup';
import { login } from '@/services/auth/login';
import { logout } from '@/services/auth/logout';
import { signup } from '@/services/auth/signup';
import { useSetCurrentUser } from '@/state/currentUser';
import { showToast } from '@/utils/toast';

/* 「認証処理 ⇒ Cookieセット ⇒ Stateの更新」と複合的な処理を行う必要があるため、一つのファイルで管理する */

// サインアップ処理
export const useSignup = () => {
  const { addCookies } = useCookie();
  const { setCurrentUser } = useSetCurrentUser();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
  });

  const handleSignup = useMemo(
    () =>
      handleSubmit(async (formValue) => {
        try {
          const response = await signup(formValue);
          const {
            header: { accessToken, client, uid },
            body,
          } = response;

          if (body.status !== 'success')
            throw new Error('認証情報が正しくありません');

          // Cookieの追加
          addCookies([
            {
              key: HEADER_AUTH_KEY.accessToken,
              value: accessToken,
            },
            {
              key: HEADER_AUTH_KEY.uid,
              value: uid,
            },
            {
              key: HEADER_AUTH_KEY.client,
              value: client,
            },
          ]);

          const { id, name, email } = body.data;
          // stateの追加・更新
          setCurrentUser({ id, name, email });
          showToast({ type: 'success', message: '新規登録しました！' });
          router.push('/');
        } catch (err) {
          showToast({ type: 'error', message: '新規登録に失敗しました' });
        }
      }),
    [addCookies, handleSubmit, router, setCurrentUser],
  );

  return {
    isValid,
    errors,
    register,
    handleSignup,
  };
};

// ログイン処理
export const useLogin = () => {
  const { addCookies } = useCookie();
  const { setCurrentUser } = useSetCurrentUser();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  const handleLogin = useMemo(
    () =>
      handleSubmit(async (formValue) => {
        try {
          const response = await login(formValue);
          const {
            header: { accessToken, client, uid },
            body,
          } = response;

          if (body.success && !body.success)
            throw new Error('認証情報が正しくありません');

          // Cookieの追加
          addCookies([
            {
              key: HEADER_AUTH_KEY.accessToken,
              value: accessToken,
            },
            {
              key: HEADER_AUTH_KEY.uid,
              value: uid,
            },
            {
              key: HEADER_AUTH_KEY.client,
              value: client,
            },
          ]);

          // stateの追加・更新
          const { id, email, name } = body.data;
          setCurrentUser({ id, name, email });
          showToast({ type: 'success', message: 'ログインしました！' });
          router.push('/');
        } catch (err) {
          showToast({ type: 'error', message: 'ログインに失敗しました' });
        }
      }),
    [addCookies, handleSubmit, router, setCurrentUser],
  );

  return {
    isValid,
    errors,
    handleLogin,
    register,
  };
};

// ログアウト処理
export const useLogout = () => {
  const { deleteCookies, cookie } = useCookie();
  const { setCurrentUser } = useSetCurrentUser();

  const handleLogout = useCallback(async () => {
    await logout({
      accessToken: cookie[HEADER_AUTH_KEY.accessToken],
      client: cookie[HEADER_AUTH_KEY.client],
      uid: cookie[HEADER_AUTH_KEY.uid],
    });

    // Cookieの削除
    deleteCookies([
      HEADER_AUTH_KEY.accessToken,
      HEADER_AUTH_KEY.client,
      HEADER_AUTH_KEY.uid,
    ]);

    // stateの削除
    setCurrentUser(undefined);

    showToast({ type: 'success', message: 'ログアウトしました！' });
  }, [cookie, deleteCookies, setCurrentUser]);

  return {
    handleLogout,
  };
};
