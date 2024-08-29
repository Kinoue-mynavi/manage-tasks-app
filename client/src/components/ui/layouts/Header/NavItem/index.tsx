import { LinkProps } from 'next/link';
import React from 'react';

import { Link } from '@/components/ui/atoms/Link';

type Props = {
  children: string;
  href: LinkProps['href'];
  itemClassName?: string;
  textClassName?: string;
};

export const NavItem: React.FC<Props> = React.memo(
  ({ children, href, itemClassName, textClassName }) => {
    return (
      <li className={itemClassName}>
        <Link className={textClassName} href={href}>
          {children}
        </Link>
      </li>
    );
  },
);
