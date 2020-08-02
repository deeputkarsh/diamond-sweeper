const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const sassLoader = [{
  loader: 'sass-loader'
}, {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('autoprefixer')({
        flexbox: 'no-2009'
      })
    ]
  }
}]
const scssLoader = {
  test: /\.(s[ac]ss)$/,
  exclude: /node_modules/,
  use: [{
    loader: MiniCssExtractPlugin.loader
  }, {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      modules: { localIdentName: '[name]-[local]_[hash:base64:5]' }
    }
  }, ...sassLoader]
}
const common = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].[hash].css'
    })
  ]
}
const commonModuleRules = [{
  test: /\.jsx?$/,
  loader: 'babel-loader',
  include: [path.resolve(__dirname, 'src')],
  query: {
    presets: ['@babel/preset-env', '@babel/preset-react']
  }
}, {
  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
  loader: 'url-loader'
}]

const clientConfig = {
  module: {
    rules: [
      ...commonModuleRules,
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      scssLoader
    ]
  },
  ...common,
  mode: 'development',
  entry: {
    client: ['@babel/polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client.js']
  },
  output: {
    ...common.output,
    hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: '.hot/[hash].hot-update.json'
  },
  name: 'client',
  target: 'web',

  optimization: {
    splitChunks: {
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: module => /node_modules/.test(module.resource),
          enforce: true
        }
      }
    }
  },

  devtool: 'cheap-module-source-map',

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

const serverConfig = {
  module: {
    rules: [
      ...commonModuleRules,
      {
        ...scssLoader,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                localIdentName: '[name]-[local]_[hash:base64:5]'
              }
            }
          },
          ...sassLoader
        ]
      }
    ]
  },
  ...common,
  mode: 'development',
  entry: {
    server: ['@babel/polyfill', './src/server.js']
  },
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  devtool: 'cheap-module-source-map',

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
}

module.exports = [clientConfig, serverConfig]
