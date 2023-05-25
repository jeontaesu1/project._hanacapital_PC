<script>
import { computed, inject } from 'vue';
import { RouterLink } from 'vue-router';

const defaultClassNames = () => ({
  item: '',
  link: '',
  guide: '',
  text: '',
});

export default {
  inheritAttrs: false,
  props: {
    tagName: {
      Type: String,
      default: 'button',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    active: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('paginationNavStyleModule');

    const setComponent = computed(() => {
      const { tagName } = props;
      return tagName === 'RouterLink' ? RouterLink : tagName;
    });

    const setType = computed(() => {
      const { tagName } = props;
      return tagName === 'button' ? 'button' : null;
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      setComponent,
      setType,
      customClassNames,
    };
  },
};
</script>

<template>
  <li
    :class="[
      styleModule['pagination__item'],
      {
        [styleModule['pagination__item--active']]: active,
      },
      customClassNames.item,
    ]"
  >
    <span
      v-if="active"
      :class="[styleModule['pagination__link'], customClassNames.link]"
    >
      <span :class="[styleModule['pagination__text'], customClassNames.text]">
        <slot />
      </span>
      <span :class="[styleModule['pagination__guide'], customClassNames.guide]">
        (현재 페이지)
      </span>
    </span>
    <component
      :is="setComponent"
      v-else
      v-bind="$attrs"
      :type="setType"
      :class="[styleModule['pagination__link'], customClassNames.link]"
    >
      <span :class="[styleModule['pagination__text'], customClassNames.text]">
        <slot />
      </span>
      <span :class="[styleModule['pagination__guide'], customClassNames.guide]">
        페이지 이동
      </span>
    </component>
  </li>
</template>
