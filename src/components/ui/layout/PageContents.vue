<script>
import { computed } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  body: '',
  foot: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
  },
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isHead = computed(() => {
      return Boolean(context.slots.head);
    });

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    return {
      customClassNames,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['page-contents'],
      {
        [$style[`page-contents--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-if="isHead"
      :class="[$style['page-contents__head'], customClassNames.head]"
    >
      <slot name="head" />
    </div>
    <div :class="[$style['page-contents__body'], customClassNames.body]">
      <slot />
    </div>
    <div
      v-if="isFoot"
      :class="[$style['page-contents__foot'], customClassNames.foot]"
    >
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/PageContents.scss';
</style>
