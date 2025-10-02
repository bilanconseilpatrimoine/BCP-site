import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Configuration robuste pour tous les déploiements
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
