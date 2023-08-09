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
    tagName: {
      Type: String,
      default: 'h3',
    },
  },
  setup(props) {
    const styleModule = inject('searchFormStyleModule');

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
  <component
    :is="tagName"
    :class="[styleModule['form__section-title'], customClassNames.title]"
  >
    <slot />
  </component>
</template>
