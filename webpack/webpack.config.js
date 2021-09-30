const path = require('path')
const loader1 = require('./z-loader/loader1')
const FileListPlugin = require('./plugins/file-list')

module.exports = {
  mode: 'production',
  entry: {
    test: './index.html'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: require('path').resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.html/,
        exclude: /node_modules/,
        use: [
          'html-loader'
          ,{
            loader: path.resolve(__dirname, './z-loader/loader1.js'),
            options: {
              name: 'cccccccccc'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new FileListPlugin()
  ]
}