const exp = require('constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  
}

module.exports = nextConfig
