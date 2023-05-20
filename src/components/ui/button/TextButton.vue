<script>
import { computed } from 'vue';
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
    iconSize: {
      Type: String,
      default: null,
    },
    textSize: {
      Type: String,
      default: null,
    },
    theme: {
      Type: String,
      default: null,
    },
    underline: {
      Type: Boolean,
      default: false,
    },
    block: {
      Type: Boolean,
      default: false,
    },
    iconFillAll: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
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

    return {
      setComponent,
      setType,
      isLeftIcon,
      isRightIcon,
      customClassNames,
    };
  },
};
</script>

<template>
  <component
    :is="setComponent"
    v-bind="$attrs"
    :type="setType"
    :class="[
      $style['button'],
      {
        [$style[`button--theme-${theme}`]]: theme,
        [$style[`button--underline`]]: underline,
        [$style[`button--block`]]: block,
        [$style[`button--icon-${iconSize}`]]: iconSize,
        [$style[`button--text-${textSize}`]]: textSize,
      },
      customClassNames.wrap,
    ]"
  >
    <span
      v-if="isLeftIcon"
      :class="[
        $style['button__icon'],
        {
          [$style['button__icon--fill-all']]: iconFillAll,
        },
        customClassNames.icon,
      ]"
    >
      <slot name="leftIcon" />
    </span>
    <span :class="[$style['button__text'], customClassNames.text]">
      <slot />
    </span>
    <span
      v-if="isRightIcon"
      :class="[
        $style['button__icon'],
        {
          [$style['button__icon--fill-all']]: iconFillAll,
        },
        customClassNames.icon,
      ]"
    >
      <slot name="rightIcon" :fillAllClass="$style['button__icon--fill-all']" />
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/TextButton.scss';
</style>
