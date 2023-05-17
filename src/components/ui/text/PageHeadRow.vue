<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
  right: '',
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
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    return {
      customClassNames,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[$style['page-head-row'], customClassNames.wrap]">
    <div :class="[$style['page-head-row__left'], customClassNames.left]">
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[$style['page-head-row__right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/PageHeadRow.scss';
</style>
