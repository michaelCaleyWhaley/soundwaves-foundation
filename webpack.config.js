// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: false,
  devServer: {
    static: './dist',
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
  },
};
