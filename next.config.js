/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    appDir: false,
  },
  env: {
    API_URL: '',
  },
}

module.exports = nextConfig
