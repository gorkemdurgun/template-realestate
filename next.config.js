/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'images.unsplash.com'],
  },
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
