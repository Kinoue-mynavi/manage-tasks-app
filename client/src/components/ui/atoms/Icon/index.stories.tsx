import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    name: 'search',
  },
};
