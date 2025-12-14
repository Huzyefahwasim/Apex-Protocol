import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure this matches your repo name for GitHub Pages to work correctly
  basePath: '/Apex-Protocol',
  assetPrefix: '/Apex-Protocol/',
};

export default nextConfig;
