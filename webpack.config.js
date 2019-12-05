const path = require('path');

module.exports = {
  entry: {
    app: './src/CozyHoliday.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|mp3)$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/],
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: { loader: 'file-loader' },
      },
    ],
  },
};
