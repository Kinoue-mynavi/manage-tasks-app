/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import { styles } from './style.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
  type?: Extract<InputProps['type'], 'text' | 'password'>;
  isError?: boolean;
  isDisabled?: boolean;
} & Omit<InputProps, 'type'>;

export const TextInput: React.FC<Props> = React.memo(
  React.forwardRef<HTMLInputElement, Props>(
    ({ type = 'text', isError = false, isDisabled = false, ...props }, ref) => {
      return (
        <input
          {...props}
          ref={ref}
          type={type}
          disabled={isDisabled}
          className={styles({ isError })}
        />
      );
    },
  ),
);
