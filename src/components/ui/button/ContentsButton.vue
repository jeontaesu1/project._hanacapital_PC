<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const defaultClassNames = () => ({
  wrap: '',
  content: '',
  button: '',
  buttonText: '',
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
    buttonText: {
      Type: String,
      default: '선택',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    theme: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      setComponent,
      setType,
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['contents-button'],
      {
        [$style[`contents-button--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <component
      :is="setComponent"
      v-bind="$attrs"
      :type="setType"
      :class="[$style['contents-button__button'], customClassNames.button]"
    >
      <span
        :class="[
          $style['contents-button__button-text'],
          customClassNames.buttonText,
        ]"
        >{{ buttonText }}</span
      >
    </component>
    <div
      :class="[$style['contents-button__content'], customClassNames.content]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/ContentsButton.scss';
</style>
