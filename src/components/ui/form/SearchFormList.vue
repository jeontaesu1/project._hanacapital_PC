<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  list: '',
  listInner: '',
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
  <div :class="[styleModule['form__list'], customClassNames.list]">
    <ul :class="[styleModule['form__list-inner'], customClassNames.listInner]">
      <slot />
    </ul>
  </div>
</template>
