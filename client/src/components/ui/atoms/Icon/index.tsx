import React, { useMemo } from 'react';

import { IconName, ICON } from '@/constants/icon';
import { Color } from '@/theme/color';

export type IconSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

const ICON_SIZE = {
  xxs: 12,
  xs: 16,
  s: 20,
  m: 36,
  l: 48,
  xl: 62,
} as const satisfies Record<IconSize, number>;

type Props = {
  name: IconName;
  size?: IconSize;
  fill?: Color;
  stroke?: Color;
};

export const Icon: React.FC<Props> = React.memo(
  ({ size = 'm', name, fill = 'black', stroke = 'transparent' }) => {
    const iconSize = useMemo(() => ICON_SIZE[size], [size]);
    const IconElement = useMemo(() => ICON[name], [name]);
    return (
      <IconElement
        width={iconSize}
        height={iconSize}
        fill={fill}
        stroke={stroke}
      />
    );
  },
);
