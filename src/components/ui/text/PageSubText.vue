<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    tagName: {
      Type: String,
      default: 'p',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[$style['page-sub-text'], customClassNames.wrap]"
  >
    <slot />
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/PageSubText.scss';
</style>
