//import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  input: 'app/app.vue',
  output: {
    format: 'esm',
    file: 'public/js/main.js'
  },
  plugins: [
	//nodeResolve(),
	vue()
  ]
}