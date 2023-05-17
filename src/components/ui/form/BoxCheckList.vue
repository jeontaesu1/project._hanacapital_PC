<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
  align: '',
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
    wrap: {
      Type: Boolean,
      default: false,
    },
    col: {
      Type: Number,
      default: 2,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    provide('boxCheckListStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['box-check-list'],
      {
        [$style[`box-check-list--align-${align}`]]: align,
        [$style['box-check-list--wrap']]: wrap,
        [$style[`box-check-list--col-${col}`]]: wrap,
      },
      customClassNames.wrap,
    ]"
  >
    <ul :class="[$style['box-check-list__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BoxCheckList.scss';
</style>
