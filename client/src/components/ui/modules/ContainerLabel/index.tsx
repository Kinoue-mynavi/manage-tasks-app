import React from 'react';

import { Text } from '@/components/ui/atoms/Text';
import { Container } from '@/components/ui/layouts/Container';

type Props = {
  label: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
};

export const ContainerLabel: React.FC<Props> = React.memo(
  ({ children, label, rightContent }) => {
    return (
      <Container gap="xxs" paddingBlock="xs">
        <Container direction="horizontal" alignItems="center" gap="s">
          <Text weight="bold" size="s">
            {label}
          </Text>
          {rightContent}
        </Container>
        {children}
      </Container>
    );
  },
);
