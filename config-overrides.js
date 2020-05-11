/* config-overrides.js */
const path = require("path");

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    // ...add your webpack config
    return config;
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function (paths, env) {
    // ...add your paths config
    paths.appIndexJs = path.resolve(__dirname, "client/index.js");
    paths.appSrc = path.resolve(__dirname, "client");
    return paths;
  },
};
