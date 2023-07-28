<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
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

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['floating'], customClassNames.wrap]">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/FloatingWrap.scss';
</style>
