<script>
import { computed } from 'vue';

import IconSearch from '@/assets/images/common/search.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  text: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconSearch,
  },
  props: {
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
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[$style['button'], customClassNames.wrap]"
  >
    <span :class="[$style['button__icon'], customClassNames.icon]">
      <IconSearch />
    </span>
    <span :class="[$style['button__text'], customClassNames.text]">검색</span>
  </button>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/button/SearchButton.scss';
</style>
