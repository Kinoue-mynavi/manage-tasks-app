import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

export const WithoutIcon: StoryObj<typeof meta> = {
  args: {
    text: 'Story',
  },
};

export const WithIcon: StoryObj<typeof meta> = {
  args: {
    text: 'Story',
    iconName: 'search',
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    text: 'Small',
    iconName: 'search',
    size: 's',
  },
};
