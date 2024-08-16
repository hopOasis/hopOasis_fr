/** @type {import('next').NextConfig} */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = process.env.API_URL ? process.env.API_URL.slice(8, -1) : '';

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_URL: process.env.API_URL,
    NEW_POST_URL: process.env.NEW_POST_URL,
    NEW_POST_API_KEY: process.env.NEW_POST_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: hostname,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-hop-oasis.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
