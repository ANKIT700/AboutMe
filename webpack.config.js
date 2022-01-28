const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const config = {
    entry: path.join(__dirname, "src", "./index.js"),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',

  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "./index.html"),
    }),
    new MiniCssExtractPlugin()

  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      
    ]
  },
  
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};


module.exports = (env, argv) => {
    if (argv.hot) {
      // Cannot use 'contenthash' when hot reloading is enabled.
      config.output.filename = '[name].[hash].js';
    }
  
    return config;
  };
// module.exports = config;