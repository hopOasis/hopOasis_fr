/** @type {import('next').NextConfig} */

import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
