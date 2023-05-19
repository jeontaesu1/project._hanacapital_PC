<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  title: '',
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
    const styleModule = inject('illustInfoStyleModule');

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
  <p :class="[styleModule['illust-info__title'], customClassNames.title]">
    <slot />
  </p>
</template>
