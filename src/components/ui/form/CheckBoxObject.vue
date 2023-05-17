<script>
import { computed, inject } from 'vue';

import IconCheck from '@/assets/images/icon/check.svg?component';
import IconCheckLarge from '@/assets/images/icon/check-l.svg?component';

const defaultClassNames = () => ({
  object: '',
  objectInner: '',
});

export default {
  components: {
    IconCheck,
    IconCheckLarge,
  },
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
    const theme = inject('checkBoxTheme');

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
  <span :class="[styleModule['checkbox__object'], customClassNames.object]">
    <span
      :class="[
        styleModule['checkbox__object-inner'],
        customClassNames.objectInner,
      ]"
    >
      <IconCheckLarge v-if="theme.value === 'secondary'" />
      <IconCheck v-else />
    </span>
  </span>
</template>
