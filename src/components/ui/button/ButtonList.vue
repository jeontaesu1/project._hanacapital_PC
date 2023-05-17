<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
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

    provide('buttonListStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['buttons'],
      {
        [$style[`buttons--align-${align}`]]: align,
        [$style['buttons--wrap']]: wrap,
        [$style[`buttons--col-${col}`]]: wrap && col > 2,
      },
      customClassNames.wrap,
    ]"
  >
    <ul :class="[$style['buttons__list'], customClassNames.list]">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/ButtonList.scss';
</style>
