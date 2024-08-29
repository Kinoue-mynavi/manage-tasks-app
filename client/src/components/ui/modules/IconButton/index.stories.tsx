import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '.';

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

export const WithoutIcon: StoryObj<typeof meta> = {
  args: {
    iconName: 'search',
    children: '検索する',
    onClick: () => {},
  },
};
