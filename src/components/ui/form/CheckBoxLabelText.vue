<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  text: '',
  textInner: '',
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
    const styleModule = inject('checkBoxStyleModule');

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
  <span :class="[styleModule['checkbox__text'], customClassNames.text]">
    <slot />
  </span>
</template>
