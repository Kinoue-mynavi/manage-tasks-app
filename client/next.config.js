/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin({});

const nextConfig = {
  images: {
    // svg.d.tsのcontentの型がanyになるのでその対応。
    disableStaticImages: true,
    remotePatterns: [
      // only dev
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
      },
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
