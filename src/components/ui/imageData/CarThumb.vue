<script>
import { computed } from 'vue';

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

    return {
      customClassNames,
      imgSrc,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['car-thumb'],
      {
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
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CarThumb.scss';
</style>
