var webpack = require('webpack');
var configuration = {
  entry: [
    "./index.js",
    'webpack-hot-middleware/client'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel"}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'development') {
  configuration.entry.unshift(
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  );
  configuration.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = configuration;