<script>
import { computed } from 'vue';

import iconImportant from '@/assets/images/icon/important.svg?component';
import iconComplete from '@/assets/images/icon/complete.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  icon: '',
  text: '',
});

export default {
  components: {
    iconImportant,
    iconComplete,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
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
      customClassNames,
    };
  },
};
</script>

<template>
  <div :class="[$style['notice'], customClassNames.wrap]">
    <div :class="[$style['notice__icon'], customClassNames.icon]">
      <iconComplete v-if="type === 'check'" />
      <iconImportant v-else />
    </div>
    <p :class="[$style['notice__text'], customClassNames.text]">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/NoticeText.scss';
</style>
