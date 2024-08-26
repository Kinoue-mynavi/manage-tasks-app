import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: 'ボタン',
    onClick: () => {},
  },
};

export const Link: StoryObj<typeof meta> = {
  args: {
    children: 'ボタン',
    href: '/',
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    children: 'ボタン',
    onClick: () => {},
    size: 's',
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    children: 'ボタン',
    onClick: () => {},
    pattern: 'secondary',
  },
};
