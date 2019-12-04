const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const srcPath = path.resolve(process.cwd(), 'src');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ],
          },
          {
            test: /\.scss$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ],
          },
          {
            test: /\.sass$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
              ],
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this necessary.
              'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ],
                'sass': [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
              ]
              }
                // other vue-loader options go here
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: '[path][name].[hash:7].[ext]',
                  context: srcPath
                }
              }
            ]
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
