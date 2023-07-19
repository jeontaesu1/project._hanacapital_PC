<script>
import { ref, reactive, computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  frame: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    url: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const iframe = ref(null);

    const state = reactive({
      height: 0,
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const update = () => {
      const iframeEl = iframe.value;

      iframeEl.style.height = '0';

      const height = iframeEl.contentDocument.body.scrollHeight;

      iframeEl.style.height = height + 'px';

      state.height = height;
    };

    const load = () => {
      update();
    };

    return {
      iframe,
      state,
      customClassNames,
      load,
    };
  },
};
</script>

<template>
  <div
    :class="[$style['iframe-contents'], customClassNames.wrap]"
    :style="{
      height: state.height + 'px',
    }"
  >
    <iframe
      v-bind="$attrs"
      ref="iframe"
      :src="url"
      frameborder="0"
      scrolling="no"
      :class="[$style['iframe-contents__frame'], customClassNames.frame]"
      :style="{
        height: state.height + 'px',
      }"
      @load="load"
    ></iframe>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/viewer/IframeContents.scss';
</style>
