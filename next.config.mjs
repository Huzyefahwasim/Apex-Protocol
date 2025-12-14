/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/Apex-Protocol',
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
