import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
        source: '/c/:category',
        destination: '/random-:category-generator',
        permanent: true,
      },
      {
        source: '/:lang/c/:category',
        destination: '/:lang/random-:category-generator',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/random-:category-generator',
        destination: '/c/:category',
      },
      {
        source: '/:lang/random-:category-generator',
        destination: '/:lang/c/:category',
      },
    ];
  },
};

export default nextConfig;
