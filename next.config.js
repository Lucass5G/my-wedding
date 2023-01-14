/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    images: {
        domains: [
            'files.stripe.com',
            'loremflickr.com',
        ],
    },
    pageExtensions: ['api.ts', 'api.tsx', 'page.tsx'],

}

module.exports = nextConfig
