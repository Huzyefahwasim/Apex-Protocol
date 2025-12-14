/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: isProd ? '/Apex-Protocol' : undefined,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    // Explicitly ignore eslint in build if next build --no-lint doesn't catch everything
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
