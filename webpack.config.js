const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

const isDevEnv = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    port: 3001
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevEnv ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevEnv ? '[id].css' : '[id].[hash].css'
    }),
    new HTMLWebpackPlugin({
      filename: './index.html',
      template: './src/static/index.html',
      title: 'Kovic'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: false,
              sourceMap: isDevEnv
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
              importLoaders: 1,
              localsConvention: 'dashes',
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              },
              sourceMap: isDevEnv
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevEnv
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  output: {
    filename: '[name]_min.[hash].min.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
