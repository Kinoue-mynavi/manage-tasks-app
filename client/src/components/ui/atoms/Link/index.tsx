import NextLink, { LinkProps } from 'next/link';
import React, { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
} & Omit<LinkProps, 'target'>;

export const Link: React.FC<Props> = React.memo(
  ({ children, href, isExternal = false, className, ...restProps }) => {
    const target = useMemo<'_blank' | '_self'>(() => {
      if (href.toString().slice(0, 4).includes('http')) {
        return '_blank';
      }
      return isExternal ? '_blank' : '_self';
    }, [href, isExternal]);

    return (
      <NextLink
        {...restProps}
        className={className}
        href={href}
        target={target}
      >
        {children}
      </NextLink>
    );
  },
);
