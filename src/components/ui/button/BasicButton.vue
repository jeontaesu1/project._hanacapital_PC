<script>
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  props: {
    tagName: {
      Type: String,
      default: 'button',
    },
    type: {
      Type: String,
      default: 'button',
    },
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
    theme: {
      Type: String,
      default: null,
    },
    line: {
      Type: Boolean,
      default: false,
    },
    inline: {
      Type: Boolean,
      default: false,
    },
    disabledStyle: {
      Type: Boolean,
      default: false,
    },
    minSide: {
      Type: Boolean,
      default: false,
    },
    auto: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const button = ref(null);

    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
    });

    const isText = computed(() => {
      return Boolean(context.slots.default);
    });

    const isLeftIcon = computed(() => {
      return Boolean(context.slots.leftIcon);
    });

    const isRightIcon = computed(() => {
      return Boolean(context.slots.rightIcon);
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getElement = () => {
      return button.value;
    };

    return {
      button,
      setComponent,
      setType,
      isText,
      isLeftIcon,
      isRightIcon,
      customClassNames,
      getElement,
    };
  },
};
</script>

<template>
  <component
    :is="setComponent"
    v-bind="$attrs"
    ref="button"
    :type="setType"
    :class="[
      $style['button'],
      {
        [$style['button--icon-only']]: (isLeftIcon || isRightIcon) && !isText,
        [$style[`button--size-${size}`]]: size,
        [$style[`button--theme-${theme}`]]: theme,
        [$style['button--line']]: line,
        [$style['button--inline']]: inline,
        [$style['button--disabled']]: disabledStyle,
        [$style['button--min-side']]: minSide,
        [$style['button--auto']]: auto,
      },
      customClassNames.wrap,
    ]"
  >
    <span
      v-if="isLeftIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="leftIcon" />
    </span>
    <span
      v-if="isText"
      :class="[$style['button__text'], customClassNames.text]"
    >
      <slot />
    </span>
    <span
      v-if="isRightIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="rightIcon" />
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/BasicButton.scss';
</style>
