import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
