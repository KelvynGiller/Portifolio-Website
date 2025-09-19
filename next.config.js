const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portifolio-Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portifolio-Website/' : '',
}

module.exports = withNextIntl(nextConfig)
