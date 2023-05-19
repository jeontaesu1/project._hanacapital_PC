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
  <dd :class="[styleModule['key-value__value'], customClassNames.text]">
    <slot />
  </dd>
</template>
