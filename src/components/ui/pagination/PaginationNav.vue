<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    label: {
      Type: String,
      default: '페이지네이션',
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('paginationNavStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    role="navigation"
    :aria-label="label"
    :class="[$style['pagination'], customClassNames.wrap]"
  >
    <ul :class="[$style['pagination__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/pagination/PaginationNav.scss';
</style>
