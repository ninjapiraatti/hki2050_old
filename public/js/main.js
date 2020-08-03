import { openBlock, createBlock, toDisplayString } from 'vue';

var script = {
  data () {
    return {
      message: 'Hello world!'
    }
  }
};

const _hoisted_1 = { class: "example" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, toDisplayString(_ctx.message), 1 /* TEXT */))
}

script.render = render;

export default script;
