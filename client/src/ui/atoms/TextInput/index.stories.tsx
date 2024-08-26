import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '.';

const meta = {
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Story',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Story',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Story',
    isDisabled: true,
  },
};
