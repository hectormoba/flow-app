const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles',)],
    prependData: `@import "variables";`,
  },
  
  webpack: (config, {}) => {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: 'file-loader',
        },
      });
      return config;
  }
};
