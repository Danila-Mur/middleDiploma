// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [new HtmlWebpackPlugin({
  //   template: __dirname + '/src/index.html',
  //   filename: 'index.html',
  //   inject: 'body',
  //   title: 'Chaching',
  //   favicon: './src/favicon.png',
  // }),],
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        sideEffects: true,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules/'),
                  path.resolve(__dirname, 'src'),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
