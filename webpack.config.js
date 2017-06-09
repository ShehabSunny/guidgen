var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js'
    // path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000, // most common port
    contentBase: './build',
    inline: true
  },
  module: {
    loaders: [
      {
          test: /\.css$/, loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery"
      })
  ]
}
