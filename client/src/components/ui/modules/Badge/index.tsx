import React, { useMemo } from 'react';

import { Icon, IconSize } from '@/components/ui/atoms/Icon';
import { Link } from '@/components/ui/atoms/Link';
import { Text } from '@/components/ui/atoms/Text';
import { IconName } from '@/constants/icon';
import { FontSize } from '@/theme/fontSize';

import { styles, type Size } from './style.css';

const CONTENT_SIZE = {
  s: {
    iconSize: 'xs',
    fontSize: 's',
  },
  m: {
    iconSize: 's',
    fontSize: 'm',
  },
} as const satisfies Record<
  Size,
  {
    iconSize: IconSize;
    fontSize: FontSize;
  }
>;

type Props = {
  text: string;
  iconName?: IconName;
  size?: Size;
};

export const Badge: React.FC<Props> = React.memo(
  ({ text, iconName, size = 'm' }) => {
    const iconSize = useMemo<IconSize>(
      () => CONTENT_SIZE[size].iconSize,
      [size],
    );
    const fontSize = useMemo<FontSize>(
      () => CONTENT_SIZE[size].iconSize,
      [size],
    );

    return (
      <Link href="/" className={styles[size]}>
        {iconName && <Icon name={iconName} size={iconSize} />}
        <Text size={fontSize}>{text}</Text>
      </Link>
    );
  },
);
