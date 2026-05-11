import path from 'node:path';
import { fileURLToPath } from 'node:url';
import categoriesData from './data/json/categories.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const categoryMatcher = categoriesData.map((category) => category.slug).join('|');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: `/c/:category(${categoryMatcher})`,
        destination: '/random-:category-generator',
        permanent: true,
      },
      {
        source: `/:lang(en|zh|ja)/c/:category(${categoryMatcher})`,
        destination: '/:lang/random-:category-generator',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `/random-:category(${categoryMatcher})-generator`,
        destination: '/c/:category',
      },
      {
        source: `/:lang(en|zh|ja)/random-:category(${categoryMatcher})-generator`,
        destination: '/:lang/c/:category',
      },
    ];
  },
};

export default nextConfig;
