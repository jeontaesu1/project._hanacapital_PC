<script>
import { computed, useCssModule, provide } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  bottom: '',
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
  setup(props, { slots }) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isBottom = computed(() => {
      return Boolean(slots.bottom);
    });

    provide('searchFormStyleModule', useCssModule());

    return {
      customClassNames,
      isBottom,
    };
  },
};
</script>

<template>
  <section :class="[$style['form'], customClassNames.wrap]">
    <slot />
    <div
      v-if="isBottom"
      :class="[$style['form__bottom'], customClassNames.bottom]"
    >
      <slot name="bottom" />
    </div>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SearchForm.scss';
</style>
