const typescript = require('rollup-plugin-typescript');

const config = {
  input: 'src/index.ts',
  output: {
    format: 'cjs',
    file: 'dist/index.js',
    sourcemap: false
  },
  plugins: [
    typescript()
  ]
};

module.exports = config;
