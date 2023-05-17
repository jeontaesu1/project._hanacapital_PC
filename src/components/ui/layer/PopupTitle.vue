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
    const styleModule = inject('popupStyleModule');

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
  <h2 :class="[styleModule['popup__title'], customClassNames.title]">
    <slot />
  </h2>
</template>
