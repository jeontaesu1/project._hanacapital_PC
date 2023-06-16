<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import IconDownload from '@/assets/images/common/download.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconDownload,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    tagName: {
      Type: String,
      default: 'button',
    },
    type: {
      Type: String,
      default: 'button',
    },
    theme: {
      Type: String,
      default: null,
    },
    text: {
      Type: String,
      default: '다운로드',
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName, type } = props;
      return tagName === 'button' ? type : null;
    });

    return {
      customClassNames,
      setComponent,
      setType,
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
      },
      customClassNames.wrap,
    ]"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <IconDownload />
    </span>
    <span :class="[$style['button__text'], customClassNames.text]">
      {{ text }}
    </span>
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/DownloadButton.scss';
</style>
