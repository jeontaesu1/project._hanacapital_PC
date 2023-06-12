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

    provide('formListStyleModule', useCssModule());

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['form'],
      {
        [$style['form--wrap']]: wrap,
        [$style[`form--col-${col}`]]: wrap && col > 2,
      },
      customClassNames.wrap,
    ]"
  >
    <dl :class="[$style['form__list'], customClassNames.list]">
      <slot />
    </dl>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormList.scss';
</style>
