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
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
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
