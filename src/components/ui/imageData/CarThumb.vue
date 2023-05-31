<script>
import { computed } from 'vue';

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

    return {
      customClassNames,
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
      :src="src"
      alt=""
      :class="[$style['car-thumb__img'], customClassNames.img]"
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CarThumb.scss';
</style>
