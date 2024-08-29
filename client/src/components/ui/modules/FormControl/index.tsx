import React from 'react';

import { Text } from '@/components/ui/atoms/Text';
import { ContainerLabel } from '@/components/ui/modules/ContainerLabel';

type Props = {
  children: React.ReactNode;
  label: string;
  errorMessage?: string;
};

export const FormControl: React.FC<Props> = React.memo(
  ({ children, label, errorMessage }) => {
    return (
      <ContainerLabel
        label={label}
        rightContent={
          !!errorMessage && (
            <Text size="xs" color="red">
              {errorMessage}
            </Text>
          )
        }
      >
        {children}
      </ContainerLabel>
    );
  },
);
