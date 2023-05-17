<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    tagName: {
      Type: String,
      default: 'h2',
    },
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

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[
      $style['page-title'],
      {
        [$style[`page-title--align-${align}`]]: align,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/PageTitle.scss';
</style>
