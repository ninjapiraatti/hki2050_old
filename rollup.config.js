import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import replace from '@rollup/plugin-replace'
import dotenv from 'dotenv'
//import commonjs from '@rollup/plugin-commonjs';
//import json from '@rollup/plugin-json';

const variables = {
	...dotenv.config({ path: "./src/.env" }).parsed
}

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'app/js/main.js',
  output: {
    format: 'iife',
    file: 'public/js/main.js'
  },
  plugins: [
    nodeResolve({ browser: true }),
//	commonjs(),
//	json(),
	vue(),
	replace({
		preventAssignment: true,
		'process.env.NODE_ENV': JSON.stringify('development'),
		'__VUE_PROD_DEVTOOLS__': !production,
		'__VUE_OPTIONS_API__': true,
		...Object.entries(variables).reduce((env, [key, value]) => ({ ...env, [`process.env.${key}`]: JSON.stringify(value) }), {})
	}),
  ]
}