<script>
import { computed } from 'vue';

import IconInput from '@/assets/images/icon/input.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
  cell: '',
  icon: '',
});

export default {
  components: {
    IconInput,
  },
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
    type: {
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
      $style['color-chip'],
      {
        [$style[`color-chip--length-${colors.length}`]]:
          $style[`color-chip--length-${colors.length}`],
        [$style[`color-chip--size-${size}`]]: size,
        [$style[`color-chip--type-${type}`]]: type,
      },
      customClassNames.wrap,
    ]"
  >
    <IconInput
      v-if="type === 'text'"
      :class="[$style['color-chip__icon'], customClassNames.icon]"
    />
    <span v-else :class="[$style['color-chip__inner'], customClassNames.inner]">
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
