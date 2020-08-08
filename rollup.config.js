import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
//import commonjs from '@rollup/plugin-commonjs';
//import json from '@rollup/plugin-json';

export default {
  input: 'app/js/main.js',
  output: {
    format: 'iife',
    file: 'public/js/main.js'
  },
  plugins: [
    nodeResolve(),
//	commonjs(),
//	json(),
	vue()
  ]
}