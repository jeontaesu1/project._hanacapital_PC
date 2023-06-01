<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const defaultClassNames = () => ({
  wrap: '',
  contents: '',
  thumb: '',
  thumbImg: '',
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
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    buttonText: {
      Type: String,
      default: '상세보기',
    },
    bgColor: {
      Type: String,
      default: null,
    },
    thumb: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    disabledStyle: {
      Type: Boolean,
      default: false,
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
      $style['banner'],
      {
        [$style['banner--disabled']]: disabled || disabledStyle,
      },
      customClassNames.wrap,
    ]"
    :style="{
      backgroundColor: bgColor,
    }"
  >
    <div :class="[$style['banner__contents'], customClassNames.contents]">
      <slot />
    </div>
    <div
      v-if="thumb"
      :class="[$style['banner__thumb'], customClassNames.thumb]"
    >
      <div :class="[$style['banner__thumb-img'], customClassNames.thumbImg]">
        <img
          :src="thumb"
          @error="
            (e) => {
              e.target.parentNode.classList.add('is-error');
            }
          "
        />
      </div>
    </div>
    <component
      :is="setComponent"
      v-if="!disabled"
      v-bind="$attrs"
      :type="setType"
      :class="[$style['banner__button'], customClassNames.button]"
    >
      <span
        :class="[$style['banner__button-text'], customClassNames.buttonText]"
        >{{ buttonText }}</span
      >
    </component>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/banner/BasicBanner.scss';
</style>
