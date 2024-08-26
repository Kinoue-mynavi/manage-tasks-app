import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({ include: '**/*.svg' }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './src/public/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': __dirname + '/src',
      '@public': __dirname + '/public',
    },
  },
});
