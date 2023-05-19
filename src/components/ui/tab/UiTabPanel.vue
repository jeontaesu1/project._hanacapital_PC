<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  panel: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    name: {
      Type: String,
      required: true,
    },
  },
  setup(props) {
    const styleModule = inject('uiTabStyleModule');
    const uiTab = inject('uiTab', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
      uiTab,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['tab__panel'],
      {
        'is-tab-opened': uiTab.activeName.value === name,
      },
      customClassNames.panel,
    ]"
    role="tabpanel"
    :hidden="uiTab.activeName.value === name ? false : true"
    :aria-labelledby="`${name}_tab`"
    :id="`${name}_panel`"
  >
    <slot />
  </div>
</template>
