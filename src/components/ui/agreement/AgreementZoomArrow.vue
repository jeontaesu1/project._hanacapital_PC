<script>
import { computed, inject } from 'vue';

import IconReduction from '@/assets/images/icon/minus-black.svg?component';
import IconEnlargement from '@/assets/images/icon/add1.svg?component';

const defaultClassNames = () => ({
  item: '',
  button: '',
  guide: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'next',
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('agreementBoxStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const icons = {
      enlargement: IconEnlargement,
      reduction: IconReduction,
    };

    const texts = {
      enlargement: '확대',
      reduction: '축소',
    };

    return {
      styleModule,
      customClassNames,
      icons,
      texts,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['agreement__item'],
      styleModule['agreement__item--zoom'],
      styleModule[`agreement__item--zoom-${type}`],
      customClassNames.item,
    ]"
  >
    <button
      type="button"
      v-bind="$attrs"
      :class="[styleModule['agreement__button'], customClassNames.button]"
      :disabled="disabled"
    >
      <component
        :is="icons[type]"
        :class="[styleModule['agreement__zoomicon'], customClassNames.icon]"
      />
      <span :class="[styleModule['agreement__guide'], customClassNames.guide]">
        {{ texts[type] }}
      </span>
    </button>
  </div>
</template>
