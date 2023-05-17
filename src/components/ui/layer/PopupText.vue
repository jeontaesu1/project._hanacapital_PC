<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  text: '',
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
  <p :class="[styleModule['popup__text'], customClassNames.text]">
    <slot />
  </p>
</template>
