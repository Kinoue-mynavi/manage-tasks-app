import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'ボタン',
    onClick: () => {},
  },
};

export const Link: Story = {
  args: {
    children: 'ボタン',
    href: '/',
  },
};

export const Small: Story = {
  args: {
    children: 'ボタン',
    onClick: () => {},
    size: 's',
  },
};

export const Secondary: Story = {
  args: {
    children: 'ボタン',
    onClick: () => {},
    pattern: 'secondary',
  },
};

export const Disable: Story = {
  args: {
    children: 'ボタン',
    onClick: () => {},
    disabled: true,
  },
};
