// CommonJS (CJS) 모듈 방식
// import <- -> require('모듈ID')
// export <- -> exports.모듈이름
// export default <- -> module.exports = 모듈

const path = require('path');

const commonConfig = {
  target: 'web',
  entry: {
    bundle: path.resolve('src/index.jsx'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
    alias: {
      assets: path.resolve('src/assets'),
      styles: path.resolve('src/styles'),
      components: path.resolve('src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|svg|webp|png|bmp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = commonConfig;

/* -------------------------------------------------------------------------- */

// path.join() vs. path.resolve()

// let path1 = path.join(process.cwd(), 'src/index.js');
// let path2 = path.resolve('src/index.js');
// console.log(path1);
// console.log(path2);
