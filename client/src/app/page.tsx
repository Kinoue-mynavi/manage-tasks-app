'use client';

import React from 'react';

import { useFetchData } from '@/hooks/useFetchData';
import { Heading } from '@/ui/atoms/Heading';

const Home: React.FC = () => {
  const data = useFetchData('/tasks');
  console.log(data);
  return (
    <div>
      <Heading as="h2">Hello World !!</Heading>
    </div>
  );
};

export default Home;
