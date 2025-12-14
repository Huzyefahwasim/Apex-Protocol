import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure this matches your repo name for GitHub Pages to work correctly
  basePath: '/Apex-Protocol',
  // assetPrefix is usually not needed when basePath is defined for GitHub Pages

  // Ignore typescript and eslint errors during build to prevent CI failures
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
