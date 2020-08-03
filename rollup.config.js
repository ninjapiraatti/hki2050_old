import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  input: 'app/js/main.js',
  output: {
    format: 'iife',
    file: 'public/js/main.js'
  },
  plugins: [
	nodeResolve(),
	vue()
  ]
}