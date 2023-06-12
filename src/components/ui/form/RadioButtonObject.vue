<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  object: '',
  objectInner: '',
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
    const styleModule = inject('radioButtonStyleModule');
    const theme = inject('radioButtonTheme');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      theme,
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <span :class="[styleModule['radio__object'], customClassNames.object]">
    <span
      :class="[
        styleModule['radio__object-inner'],
        customClassNames.objectInner,
      ]"
    ></span>
  </span>
</template>
