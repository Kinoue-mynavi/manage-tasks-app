'use client';

import React from 'react';

import { Button } from '@/components/ui/atoms/Button';
import { Heading } from '@/components/ui/atoms/Heading';
import { Container } from '@/components/ui/layouts/Container';

const Home: React.FC = React.memo(() => {
  return (
    <section>
      <Container>
        <Container
          direction="horizontal"
          justifyContent="between"
          alignItems="center"
        >
          <Heading as="h2">タスク一覧</Heading>
          {/* モーダルで登録フォームを出したい */}
          <Button onClick={() => {}}>タスク登録</Button>
        </Container>
      </Container>
    </section>
  );
});

export default Home;
