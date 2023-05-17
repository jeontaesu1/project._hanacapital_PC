<script>
import { computed, useCssModule, provide } from 'vue';

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
    forceHeadHide: {
      Type: Boolean,
      default: false,
    },
    forceBodyHide: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isSlot = computed(() => {
      const { forceBodyHide } = props;
      return !forceBodyHide && Boolean(context.slots.default);
    });

    const isHead = computed(() => {
      const { forceHeadHide } = props;
      return !forceHeadHide && Boolean(context.slots.head);
    });

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlot,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup'], customClassNames.wrap]">
    <div v-if="isHead" :class="[$style['popup__head'], customClassNames.head]">
      <slot name="head" />
    </div>
    <div v-if="isSlot" :class="[$style['popup__body'], customClassNames.body]">
      <slot />
    </div>
    <div v-if="isFoot" :class="[$style['popup__foot'], customClassNames.foot]">
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/AlertPopup.scss';
</style>
