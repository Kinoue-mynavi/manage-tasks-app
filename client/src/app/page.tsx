'use client';

import React from 'react';

import { Heading } from '@/components/ui/atoms/Heading';
import { Link } from '@/components/ui/atoms/Link';
import { Text } from '@/components/ui/atoms/Text';

import { useGetCurrentUser } from './state/currentUser';

const Home: React.FC = () => {
  const { currentUser } = useGetCurrentUser();
  return (
    <div>
      <Heading as="h2">Hello World !!</Heading>
      {currentUser ? (
        <Text>
          {`ログイン中のユーザ：${currentUser.name}さん (${currentUser.email})`}
        </Text>
      ) : (
        <>
          <Text>下記リンクよりログインしてください！</Text>
          <Link href="/auth/login">ログインページへ</Link>
        </>
      )}
    </div>
  );
};

export default Home;
