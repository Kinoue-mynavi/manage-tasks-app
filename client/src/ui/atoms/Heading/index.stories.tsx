import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

export const H1: StoryObj<typeof meta> = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const H2: StoryObj<typeof meta> = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const H3: StoryObj<typeof meta> = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const H4: StoryObj<typeof meta> = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};
