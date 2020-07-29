import vue from 'rollup-plugin-vue'

export default {
  input: 'app/views/index.vue',
  output: {
    format: 'esm',
    file: 'public/index.js'
  },
  plugins: [
    vue()
  ]
}