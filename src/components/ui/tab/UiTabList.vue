<script>
import { ref, computed, inject } from 'vue';

const defaultClassNames = () => ({
  list: '',
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
    const styleModule = inject('uiTabStyleModule');

    const el = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      el,
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    ref="el"
    :class="[styleModule['tab__list'], customClassNames.list]"
    role="tablist"
  >
    <slot />
  </div>
</template>
