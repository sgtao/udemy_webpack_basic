// CommonJs style
// - module.exports = {...} にルールを記述する
//   * 似たようなものにES6から、import/exportというのがある
// 実行方法は：
//   yarn run webpack
// 
const path = require('path'); // output で相対パスにするために読込
//
module.exports = {
  // プロパティを定義する
  mode: 'development',
  // devtool: 'none', // これは使えないようだ
  // devtool: 'inline-source-map', // distが暗号化される
  // entry: ['./src/app.js', './src/sub.js']
  entry: {app: './src/app.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', // 追加
          'sass-loader',
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|tff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[name].[ext]',
              name: '[contenthash].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            },
          },
        ]
      },
    ]
  },
}