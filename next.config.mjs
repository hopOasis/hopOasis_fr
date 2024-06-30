/** @type {import('next').NextConfig} */

import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**.eba-33ij8qpt.eu-central-1.elasticbeanstalk.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
