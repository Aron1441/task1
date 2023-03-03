const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'source'),
    mode: 'development',
    resolve: {
      fallback: {
        "path": require.resolve('path-browserify'),
      }
    },
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
    },
    devServer: {
        port: 4200
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|svg)$/i,
          dependency: { not: ['url'] },
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
          type: 'javascript/auto'
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'main page',
            filename: 'index.html',
            template: './index.html',
        }),
        new CleanWebpackPlugin()
    ],
}