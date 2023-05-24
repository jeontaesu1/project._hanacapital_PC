<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  val: '',
  leftUnit: '',
  rightUnit: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    leftUnit: {
      Type: String,
      default: null,
    },
    rightUnit: {
      Type: String,
      default: null,
    },
    align: {
      Type: String,
      default: null,
    },
    verticalAlign: {
      Type: String,
      default: null,
    },
    size: {
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
      $style['unit-text'],
      {
        [$style[`unit-text--align-${align}`]]: align,
        [$style[`unit-text--vertical-align-${verticalAlign}`]]: verticalAlign,
        [$style[`unit-text--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <span
      v-if="leftUnit"
      :class="[$style['unit-text__left'], customClassNames.leftUnit]"
    >
      {{ leftUnit }}
    </span>
    <span :class="[$style['unit-text__val'], customClassNames.val]">
      <slot />
    </span>
    <span
      v-if="rightUnit"
      :class="[$style['unit-text__right'], customClassNames.rightUnit]"
    >
      {{ rightUnit }}
    </span>
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/UnitText.scss';
</style>
