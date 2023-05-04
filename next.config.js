/** @type {import('next').NextConfig} */
/* const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig */

const withTM = require('next-transpile-modules')(['remotion-animated']);

module.exports = withTM({reactStrictMode: true,});