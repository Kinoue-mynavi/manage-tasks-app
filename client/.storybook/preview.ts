import Image from 'next/image';
import type { Preview } from '@storybook/react';
import '../src/app/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

Image.propTypes = {
  unoptimized: undefined,
};

Image.defaultProps = {
  unoptimized: true,
};

export default preview;
