<script>
import { computed, inject } from 'vue';

import IconDot from '@/assets/images/icon/dot.svg?component';

const defaultClassNames = () => ({
  item: '',
  link: '',
  guide: '',
  icon: '',
});

export default {
  inheritAttrs: false,
  components: {
    IconDot,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const styleModule = inject('paginationNavStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <li
    :class="[
      styleModule['pagination__item'],
      styleModule['pagination__item--ellipsis'],
      customClassNames.item,
    ]"
  >
    <span :class="[styleModule['pagination__link'], customClassNames.link]">
      <IconDot
        :class="[styleModule['pagination__icon'], customClassNames.icon]"
      />
      <span :class="[styleModule['pagination__guide'], customClassNames.guide]">
        ...
      </span>
    </span>
  </li>
</template>
