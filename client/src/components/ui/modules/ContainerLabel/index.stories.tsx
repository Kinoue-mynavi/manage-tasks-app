import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/ui/atoms/Text';
import { TextInput } from '@/components/ui/atoms/TextInput';

import { ContainerLabel } from '.';

const meta = {
  component: ContainerLabel,
} satisfies Meta<typeof ContainerLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Story',
    children: <TextInput placeholder="input" />,
  },
};

export const WithRightContent: Story = {
  args: {
    label: 'Story',
    children: <TextInput placeholder="input" />,
    rightContent: (
      <Text size="xs" color="red">
        Error Message etc...
      </Text>
    ),
  },
};
