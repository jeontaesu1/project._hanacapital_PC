<script>
import { computed, inject } from 'vue';
import { RouterLink } from 'vue-router';

import UiTabButton from '@/components/ui/tab/UiTabButton.vue';

const defaultClassNames = () => ({
  item: '',
  button: '',
  text: '',
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
    link: {
      Type: String,
      default: null,
    },
    tagName: {
      Type: String,
      default: 'div',
    },
    active: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('subTabStyleModule');
    const subTab = inject('subTab', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setItemComponent = computed(() => {
      const { useUiTab } = subTab;
      return useUiTab.value ? UiTabButton : 'li';
    });

    const setButtonComponent = computed(() => {
      const { useUiTab } = subTab;
      const { tagName } = props;
      return useUiTab.value
        ? 'div'
        : tagName === 'RouterLink'
        ? RouterLink
        : tagName;
    });

    return {
      styleModule,
      customClassNames,
      setItemComponent,
      setButtonComponent,
    };
  },
};
</script>

<template>
  <component
    :is="setItemComponent"
    :class="[
      styleModule['sub-tab__item'],
      {
        [styleModule['sub-tab__item--active']]: active,
      },
      customClassNames.item,
    ]"
    :link="link"
  >
    <component
      :is="setButtonComponent"
      v-bind="$attrs"
      :class="[styleModule['sub-tab__button'], customClassNames.button]"
      :title="active ? '선택 됨' : null"
    >
      <span :class="[styleModule['sub-tab__text'], customClassNames.text]">
        <slot />
      </span>
    </component>
  </component>
</template>
