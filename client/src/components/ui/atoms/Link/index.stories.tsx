import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    href: '/',
    children: 'Story',
  },
};
