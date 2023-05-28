const withTM = require('next-transpile-modules')(['remotion-animated']);
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps(withTM({
  reactStrictMode: true,
  webpack(config, options) {
    return config
  }
}));
