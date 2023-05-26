<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  guide: '',
  text: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const styleModule = inject('agreementBoxStyleModule');

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
  <div :class="[styleModule['agreement__zoomtext'], customClassNames.text]">
    <slot />
    <span :class="[styleModule['agreement__guide'], customClassNames.guide]">
      (현재 화면 SIZE 입니다.)
    </span>
  </div>
</template>
