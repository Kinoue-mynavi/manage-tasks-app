'use client';

/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Dropdown } from '@/components/ui/atoms/Dropdown';
import { Heading } from '@/components/ui/atoms/Heading';
import { Link } from '@/components/ui/atoms/Link';
import { Text } from '@/components/ui/atoms/Text';
import { useLogout } from '@/hooks/useAuth';
import { useFetchSession } from '@/services/auth/session/useFetchSession';
import { useGetCurrentUser } from '@/state/currentUser';

import { NavItem } from './NavItem';
import {
  containerStyle,
  listContainerStyle,
  listItemTextStyle,
} from './style.css';

type NavItemProps = Pick<
  React.ComponentProps<typeof NavItem>,
  'children' | 'href'
>;

const NON_SESSION_NAV_LIST = [
  {
    children: '新規登録',
    href: '/auth/signup',
  },
  {
    children: 'ログイン',
    href: '/auth/login',
  },
] as const satisfies NavItemProps[];

export const Header: React.FC = React.memo(() => {
  const { currentUser } = useGetCurrentUser();
  const { isLogin } = useFetchSession();
  const { handleLogout } = useLogout();

  return (
    <header className={containerStyle}>
      <Link href="/">
        <Heading as="h1" color="white">
          Manage Tasks
        </Heading>
      </Link>
      <ul className={listContainerStyle}>
        {isLogin && currentUser ? (
          <li>
            <Dropdown
              items={[
                { label: 'ログアウト', value: 'logout', onClick: handleLogout },
              ]}
              label={
                <Text color="white">{`${currentUser.name}さん (${currentUser.email})`}</Text>
              }
            />
          </li>
        ) : (
          NON_SESSION_NAV_LIST.map(({ children, href }, index) => (
            <NavItem
              key={`${children}-${href}-${index}`}
              href={href}
              textClassName={listItemTextStyle}
            >
              {children}
            </NavItem>
          ))
        )}
      </ul>
    </header>
  );
});
