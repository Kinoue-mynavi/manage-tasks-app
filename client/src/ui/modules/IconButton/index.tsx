import React from 'react';

import { IconName } from '@/constants/icon';
import { Button } from '@/ui/atoms/Button';
import { Icon } from '@/ui/atoms/Icon';
import { Text } from '@/ui/atoms/Text';

import { styles } from './style.css';

type Props = {
  children: string;
  onClick: () => void;
  iconName: IconName;
};

export const IconButton: React.FC<Props> = React.memo(
  ({ onClick, iconName, children }) => {
    return (
      <Button onClick={onClick}>
        <div className={styles}>
          <Icon name={iconName} size="s" />
          <Text color="white">{children}</Text>
        </div>
      </Button>
    );
  },
);
