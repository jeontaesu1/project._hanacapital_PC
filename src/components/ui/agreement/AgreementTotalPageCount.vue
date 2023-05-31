<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  guide: '',
  text: '',
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
  },
  setup(props) {
    const styleModule = inject('agreementBoxStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <span :class="[styleModule['agreement__text'], customClassNames.text]">
    <slot />
  </span>
  <span :class="[styleModule['agreement__guide'], customClassNames.guide]">
    (전체 페이지 갯수)
  </span>
</template>
