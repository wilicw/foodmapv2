/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['i.imgur.com'],
  },
}

module.exports = nextConfig
