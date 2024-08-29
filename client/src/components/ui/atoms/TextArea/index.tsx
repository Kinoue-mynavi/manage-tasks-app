/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import { styles } from './style.css';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

type Props = {
  isError?: boolean;
  isDisabled?: boolean;
} & TextAreaProps;

export const TextArea: React.FC<Props> = React.memo(
  React.forwardRef<HTMLTextAreaElement, Props>(
    ({ isError = false, isDisabled = false, ...props }, ref) => {
      return (
        <textarea
          {...props}
          ref={ref}
          disabled={isDisabled}
          className={styles({ isError })}
        />
      );
    },
  ),
);
