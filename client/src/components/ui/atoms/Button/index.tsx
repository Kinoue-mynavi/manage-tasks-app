import React, { useMemo } from 'react';

import { styles, Pattern, Size } from './style.css';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type BaseProps = {
  children: React.ReactNode;
  pattern?: Pattern;
  size?: Size;
} & Omit<ButtonProps, 'onClick'>;

type LinkProps = {
  href: string;
  onClick?: never;
} & BaseProps;

type DefaultProps = {
  onClick: ButtonProps['onClick'];
  href?: never;
} & BaseProps;

type Props = DefaultProps | LinkProps;

export const Button: React.FC<Props> = React.memo(
  ({
    children,
    onClick,
    href,
    type = 'button',
    pattern = 'primary',
    size = 'm',
    ...restProps
  }) => {
    const handleClick = useMemo(() => {
      if (href) {
        return () => {
          window.location.href = href;
        };
      }
      return onClick;
    }, [href, onClick]);

    return (
      <button
        {...restProps}
        type={type}
        onClick={handleClick}
        className={styles({ pattern, size })}
      >
        {children}
      </button>
    );
  },
);
