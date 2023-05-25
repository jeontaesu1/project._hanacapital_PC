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
    const styleModule = inject('paginationNavStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const icons = {
      next: IconNext,
      prev: IconPrev,
    };

    const texts = {
      next: '다음 페이지 이동',
      prev: '이전 페이지 이동',
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
  <li
    :class="[
      styleModule['pagination__item'],
      styleModule['pagination__item--arrow'],
      styleModule[`pagination__item--arrow-${type}`],
      customClassNames.item,
    ]"
  >
    <button
      type="button"
      v-bind="$attrs"
      :class="[styleModule['pagination__link'], customClassNames.link]"
      :disabled="disabled"
    >
      <component
        :is="icons[type]"
        :class="[styleModule['pagination__icon'], customClassNames.icon]"
      />
      <span :class="[styleModule['pagination__guide'], customClassNames.guide]">
        {{ texts[type] }}
      </span>
    </button>
  </li>
</template>
