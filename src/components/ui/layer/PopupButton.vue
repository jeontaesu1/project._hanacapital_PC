<script>
import { computed } from 'vue';

import IconClose from '@/assets/images/common/close.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  icon: '',
  text: '',
});

export default {
  inheritAttrs: false,
  props: {
    type: {
      Type: String,
      default: 'close',
    },
    theme: {
      Type: String,
      default: null,
    },
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

    const isSlot = computed(() => {
      return Boolean(context.slots.default);
    });

    const icons = {
      close: IconClose,
    };

    const texts = {
      close: '레이어 닫기',
    };

    return {
      customClassNames,
      isSlot,
      icons,
      texts,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    type="button"
    :class="[
      $style['popup-button'],
      {
        [$style[`popup-button--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <component
      :is="icons[type]"
      :class="[$style['popup-button__icon'], customClassNames.icon]"
    />
    <span
      v-if="!isSlot"
      :class="[$style['popup-button__text'], customClassNames.text]"
      >{{ texts[type] }}</span
    >
    <span
      v-if="isSlot"
      :class="[$style['popup-button__text'], customClassNames.text]"
    >
      <slot />
    </span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/PopupButton.scss';
</style>
