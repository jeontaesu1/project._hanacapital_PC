<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  left: '',
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
    const styleModule = inject('BasicBoxHeadStyleModule');

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
  <div :class="[styleModule['box-head__left'], customClassNames.left]">
    <slot />
  </div>
</template>
