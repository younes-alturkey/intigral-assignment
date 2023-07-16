/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    appDir: false,
  },
  env: {
    TMDB_API_URL: 'https://api.themoviedb.org/3',
    TMDB_IMAGE_URL: 'https://image.tmdb.org/t/p/original',
    TMDB_API_KEY: 'd7779d14a18e6ed420e482a36129e67b',
    TMDB_API_READ_ACCESS_TOKEN:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzc3OWQxNGExOGU2ZWQ0MjBlNDgyYTM2MTI5ZTY3YiIsInN1YiI6IjYwZWJlYjI5NTgzNjFiMDAyOWQxMmZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6TkvvBla-tOCH33ZKfw6S-gfOtOQWNwe3OYwZLGgIEE',
  },
  images: {
    domains: ['image.tmdb.org', 'eapp.org'],
  },
}

module.exports = nextConfig
