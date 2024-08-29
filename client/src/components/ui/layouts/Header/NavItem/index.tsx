import { LinkProps } from 'next/link';
import React from 'react';

import { Link } from '@/components/ui/atoms/Link';

type Props = {
  children: string;
  isHidden: boolean;
  onClick?: () => void;
  href?: LinkProps['href'];
  itemClassName?: string;
  textClassName?: string;
};

export const NavItem: React.FC<Props> = React.memo(
  ({ children, href, itemClassName, textClassName, isHidden, onClick }) => {
    if (isHidden) return null;
    return (
      <li className={itemClassName}>
        {href ? (
          <Link className={textClassName} href={href}>
            {children}
          </Link>
        ) : (
          <button type="button" className={textClassName} onClick={onClick}>
            {children}
          </button>
        )}
      </li>
    );
  },
);
