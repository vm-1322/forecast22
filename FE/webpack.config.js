'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',

    entry: './src/client.tsx',

    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/, /public/],
          loader: require.resolve('babel-loader'),
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          loader: 'file-loader',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
      }),
    ],

    ...(!env.production && {
      devServer: {
        port: 7900,
        historyApiFallback: true,
      },

      devtool: 'source-map',
    }),
  };
};
