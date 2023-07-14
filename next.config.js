/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    appDir: false,
  },
  env: {
    API_URL: '',
    TMDB_API_KEY: 'd7779d14a18e6ed420e482a36129e67b',
    TMDB_API_READ_ACCESS_TOKEN:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzc3OWQxNGExOGU2ZWQ0MjBlNDgyYTM2MTI5ZTY3YiIsInN1YiI6IjYwZWJlYjI5NTgzNjFiMDAyOWQxMmZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6TkvvBla-tOCH33ZKfw6S-gfOtOQWNwe3OYwZLGgIEE',
  },
}

module.exports = nextConfig
