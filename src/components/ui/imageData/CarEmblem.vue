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
    code: {
      Type: String,
      default: null,
    },
    name: {
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
      $style['car-emblem'],
      {
        [$style[`car-emblem--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <img
      v-if="code"
      :src="`/images/car-emblem/${code}.svg`"
      :alt="name"
      :class="[$style['car-emblem__img'], customClassNames.img]"
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/CarEmblem.scss';
</style>
