import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '.';

const meta = {
  component: TextArea,
} satisfies Meta<typeof TextArea>;

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
