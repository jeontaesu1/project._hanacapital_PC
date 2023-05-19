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
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('illustInfoStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['illust-info'], customClassNames.wrap]">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustInfo.scss';
</style>
