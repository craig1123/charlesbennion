import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import cssnano from 'cssnano';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/js/index.js',
  output: {
    file: 'public/index.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    name: 'charlesbennion',
  },
  treeshake: !!production,
  plugins: [
    postcss({
      extensions: [ '.css' ],
      plugins: [
        cssnano(),
      ],
    }),
    resolve(), // resolve bare import specifiers
    commonjs(), // converts date-fns to ES modules
    production && terser(), // minify, but only in production
    // terser(), // minify, but only in production
  ],
};
