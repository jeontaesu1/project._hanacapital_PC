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
    const styleModule = inject('keyValueStyleModule');

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
  <dt :class="[styleModule['key-value__key'], customClassNames.title]">
    <slot />
  </dt>
</template>
