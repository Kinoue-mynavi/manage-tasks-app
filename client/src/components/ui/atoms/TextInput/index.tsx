/* eslint-disable react/no-unused-prop-types */
import React, { useCallback, useState } from 'react';

import { Button } from '@/components/ui/atoms/Button';

import { containerStyle, inputStyle, buttonStyle } from './style.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type InputType = Extract<InputProps['type'], 'text' | 'password'>;

type Props = {
  type?: InputType;
  isError?: boolean;
  isDisabled?: boolean;
} & Omit<InputProps, 'type'>;

export const TextInput: React.FC<Props> = React.memo(
  React.forwardRef<HTMLInputElement, Props>(
    ({ type = 'text', isError = false, isDisabled = false, ...props }, ref) => {
      const [inputType, setInputType] = useState<InputType>(type);
      const hancleClickButton = useCallback(() => {
        setInputType(inputType === 'password' ? 'text' : 'password');
      }, [inputType]);
      return (
        <div className={containerStyle}>
          <input
            {...props}
            ref={ref}
            type={inputType}
            disabled={isDisabled}
            className={inputStyle({ isError })}
          />
          {type === 'password' && (
            <div className={buttonStyle}>
              <Button onClick={hancleClickButton} size="xs" pattern="secondary">
                {inputType === 'password' ? '表示' : '非表示'}
              </Button>
            </div>
          )}
        </div>
      );
    },
  ),
);
