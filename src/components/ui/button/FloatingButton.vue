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

    const isTopIcon = computed(() => {
      return Boolean(context.slots.topIcon);
    });

    const isBottomIcon = computed(() => {
      return Boolean(context.slots.bottomIcon);
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
      isTopIcon,
      isBottomIcon,
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
    :class="[$style['button'], customClassNames.wrap]"
  >
    <span
      v-if="isTopIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="topIcon" />
    </span>
    <span
      v-if="isText"
      :class="[$style['button__text'], customClassNames.text]"
    >
      <slot />
    </span>
    <span
      v-if="isBottomIcon"
      :class="[$style['button__icon'], customClassNames.icon]"
    >
      <slot name="bottomIcon" />
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/FloatingButton.scss';
</style>
