<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  cell: '',
  icon: '',
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
    colors: {
      Type: Array,
      default: [],
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
      $style['color-chip'],
      $style[`color-chip--length-${colors.length}`],
      {
        [$style[`color-chip--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <span :class="[$style['color-chip__inner'], customClassNames.inner]">
      <span
        v-for="(item, i) in colors"
        :key="i"
        :class="[$style['color-chip__cell'], customClassNames.cell]"
        :style="`background: rgb(${item});`"
      />
    </span>
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/ColorChip.scss';
</style>
