//import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  input: 'app/views/index.vue',
  output: {
    format: 'esm',
    file: 'public/mycomponent.js'
  },
  plugins: [
	//nodeResolve(),
	vue()
  ]
}