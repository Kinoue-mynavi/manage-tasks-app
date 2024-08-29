import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    label: 'Toggle!!',
    items: [
      { label: 'item1', value: '1' },
      { label: 'item2', value: '2' },
      { label: 'item3', value: '3' },
    ],
  },
};
