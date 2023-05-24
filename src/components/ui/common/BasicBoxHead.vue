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
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('BasicBoxHeadStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['box-head'],
      { [$style[`box-head--align-${align}`]]: align },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/BasicBoxHead.scss';
</style>
