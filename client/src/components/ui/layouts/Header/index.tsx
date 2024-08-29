'use client';

/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';

import { Heading } from '@/components/ui/atoms/Heading';
import { Link } from '@/components/ui/atoms/Link';
import { useLogout } from '@/hooks/useAuth';
import { useFetchSession } from '@/services/auth/session/useFetchSession';

import { NavItem } from './NavItem';
import {
  containerStyle,
  listContainerStyle,
  listItemTextStyle,
} from './style.css';

type NavItemProps = Omit<
  React.ComponentProps<typeof NavItem>,
  'itemClassName' | 'textClassName'
>;

export const Header: React.FC = React.memo(() => {
  const { isLogin } = useFetchSession();
  const { handleLogout } = useLogout();

  const navList = useMemo<NavItemProps[]>(() => {
    return [
      {
        children: '新規登録',
        href: '/auth/signup',
        isHidden: isLogin,
      },
      {
        children: 'ログイン',
        href: '/auth/login',
        isHidden: isLogin,
      },
      {
        children: 'ログアウト',
        isHidden: !isLogin,
        onClick: handleLogout,
      },
    ] as const satisfies NavItemProps[];
  }, [handleLogout, isLogin]);

  return (
    <header className={containerStyle}>
      <Link href="/">
        <Heading as="h1" color="white">
          Manage Tasks
        </Heading>
      </Link>
      <ul className={listContainerStyle}>
        {navList.map((item, index) => {
          const { children, ...rest } = item;
          return (
            <NavItem
              key={`${children}-${rest.href}-${index}`}
              {...rest}
              textClassName={listItemTextStyle}
            >
              {children}
            </NavItem>
          );
        })}
      </ul>
    </header>
  );
});
