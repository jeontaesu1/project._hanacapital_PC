<script>
import { computed, inject } from 'vue';

import IconPrev from '@/assets/images/icon/pagination-prev.svg?component';
import IconNext from '@/assets/images/icon/pagination-next.svg?component';

const defaultClassNames = () => ({
  item: '',
  link: '',
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
      enlargement: IconNext,
      reduction: IconPrev,
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
      :class="[styleModule['agreement__link'], customClassNames.link]"
      :disabled="disabled"
    >
      <component
        :is="icons[type]"
        :class="[styleModule['agreement__icon'], customClassNames.icon]"
      />
      <span :class="[styleModule['agreement__guide'], customClassNames.guide]">
        {{ texts[type] }}
      </span>
    </button>
  </div>
</template>
