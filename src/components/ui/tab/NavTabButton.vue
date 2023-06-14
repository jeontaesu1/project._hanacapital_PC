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
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('navTabStyleModule');
    const navTab = inject('navTab', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setItemComponent = computed(() => {
      const { useUiTab } = navTab;
      return useUiTab.value ? UiTabButton : 'li';
    });

    const setButtonComponent = computed(() => {
      const { useUiTab } = navTab;
      const { tagName } = props;
      return useUiTab.value
        ? 'div'
        : tagName === 'RouterLink'
        ? RouterLink
        : tagName;
    });

    const itemDisabled = computed(() => {
      const { useUiTab } = navTab;
      const { disabled } = props;
      return (useUiTab.value && disabled) || null;
    });

    const buttonDisabled = computed(() => {
      const { useUiTab } = navTab;
      const { tagName, disabled } = props;
      return useUiTab.value ? null : tagName === 'button' ? disabled : null;
    });

    return {
      styleModule,
      customClassNames,
      setItemComponent,
      setButtonComponent,
      itemDisabled,
      buttonDisabled,
    };
  },
};
</script>

<template>
  <component
    :is="setItemComponent"
    :class="[
      styleModule['nav-tab__item'],
      {
        [styleModule['nav-tab__item--active']]: active,
        [styleModule['nav-tab__item--disabled']]: disabled,
      },
      customClassNames.item,
    ]"
    :link="link"
    :disabled="itemDisabled"
  >
    <component
      :is="setButtonComponent"
      v-bind="$attrs"
      :class="[styleModule['nav-tab__button'], customClassNames.button]"
      :title="active ? '선택 됨' : null"
      :disabled="buttonDisabled"
    >
      <span :class="[styleModule['nav-tab__text'], customClassNames.text]">
        <slot />
      </span>
    </component>
  </component>
</template>
