<script>
import { computed } from 'vue';

const BASE_URL = import.meta.env.BASE_URL;

const defaultClassNames = () => ({
  wrap: '',
  img: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'bank',
    },
    size: {
      Type: String,
      default: null,
    },
    code: {
      Type: String,
      default: null,
    },
    name: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      BASE_URL,
      customClassNames,
    };
  },
};
</script>

<template>
  <span
    :class="[
      $style['bank-logo'],
      {
        [$style[`bank-logo--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <img
      v-if="code"
      :src="`${BASE_URL}images/${type}-full-logo/${code}.svg`"
      :alt="name"
      :class="[$style['bank-logo__img'], customClassNames.img]"
    />
  </span>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/imageData/BankFullLogo.scss';
</style>
