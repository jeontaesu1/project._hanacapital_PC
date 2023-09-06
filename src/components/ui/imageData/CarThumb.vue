<script>
import { computed, reactive, watch } from 'vue';

const BASE_URL = import.meta.env.BASE_URL;

const defaultClassNames = () => ({
  wrap: '',
  img: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
    src: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const state = reactive({
      isError: false,
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const imgSrc = computed(() => {
      const { src = '' } = props;

      if (src.match(/^\//)) {
        return BASE_URL + src.replace(/^\//, '');
      } else {
        return src;
      }
    });

    const onError = () => {
      state.isError = true;
    };

    watch(
      () => props.src,
      () => {
        state.isError = false;
      }
    );

    return {
      state,
      customClassNames,
      imgSrc,
      onError,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['car-thumb'],
      {
        'is-error': state.isError,
        [$style[`car-thumb--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <img
      v-if="src"
      :src="imgSrc"
      alt=""
      :class="[$style['car-thumb__img'], customClassNames.img]"
      @error="onError"
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CarThumb.scss';
</style>
