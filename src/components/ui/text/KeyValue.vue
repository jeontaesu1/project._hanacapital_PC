<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    align: {
      Type: String,
      default: null,
    },
    verticalAlign: {
      Type: String,
      default: null,
    },
    direction: {
      Type: String,
      default: null,
    },
    margin: {
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

    provide('keyValueStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <dl
    :class="[
      $style['key-value'],
      {
        [$style[`key-value--align-${align}`]]: align,
        [$style[`key-value--vertical-align-${verticalAlign}`]]: verticalAlign,
        [$style[`key-value--direction-${direction}`]]: direction,
        [$style[`key-value--margin-${margin}`]]: margin,
        [$style[`key-value--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </dl>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/KeyValue.scss';
</style>
