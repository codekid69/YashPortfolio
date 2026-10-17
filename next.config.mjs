/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        formats: ['image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'motionsites.ai' },
            { protocol: 'https', hostname: 'images.higgs.ai' },
            { protocol: 'https', hostname: 'd8j0ntlcm91z4.cloudfront.net' },
        ],
    },
};

export default nextConfig;
