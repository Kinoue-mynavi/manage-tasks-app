import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LocalImage: Story = {
  args: {
    alt: 'Story',
    localImageName: 'noImage',
  },
  render: (args) => (
    <div style={{ height: 360 }}>
      <Image {...args} />
    </div>
  ),
};

export const ExternalImage: Story = {
  args: {
    alt: 'Story',
    imageUrl: 'https://dummyimage.com/600x400/000/fff',
  },
};
