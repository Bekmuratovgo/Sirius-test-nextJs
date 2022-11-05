/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const path = require('path');

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
}
module.exports = nextConfig
