const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other config settings ...
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      vm: require.resolve('vm-browserify'),
      console: require.resolve('console-browserify'),
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      tty: require.resolve('tty-browserify'),
      fs: false, // No polyfill for fs, as it is not needed in the browser
    },
  },
};
