import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: 'Story Story Story Story Story Story Story',
  },
};
