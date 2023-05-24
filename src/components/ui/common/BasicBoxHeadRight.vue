<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  right: '',
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
  <div :class="[styleModule['box-head__right'], customClassNames.right]">
    <slot />
  </div>
</template>
