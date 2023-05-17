<script>
import { computed, inject, watch, onMounted } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  button: '',
  dot: '',
  active: '',
  type: '',
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
    theme: {
      Type: String,
      default: null,
    },
    dot: {
      Type: Array,
      default: [],
    },
    isFocused: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const formListItem = inject('formListItem', {});
    const inputBlock = inject('inputBlock', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const value = computed(() => {
      const { dot } = props;
      return dot.indexOf(true) === -1 ? null : dot;
    });

    watch(
      () => props.isFocused,
      (cur) => {
        if (formListItem && formListItem.selectFocus) {
          formListItem.selectFocus(cur);
        }
        if (inputBlock && inputBlock.selectFocus) {
          inputBlock.selectFocus(cur);
        }
      }
    );

    watch(
      () => props.dot,
      () => {
        if (formListItem && formListItem.checkInputed) {
          formListItem.checkInputed();
        }
      }
    );

    onMounted(() => {
      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(props.isFocused);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(props.isFocused);
      }
    });

    return {
      customClassNames,
      value,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['security-input'],
      {
        [$style[`security-input--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
  >
    <input type="hidden" :value="value" />
    <button
      v-bind="$attrs"
      type="button"
      :class="[$style['security-input__button'], customClassNames.button]"
    >
      <span
        v-for="(item, i) in dot"
        :key="i"
        :class="[
          $style['security-input__dot'],
          {
            [$style['security-input__dot--active']]: item,
            [customClassNames.active]: item,
          },
          customClassNames.dot,
        ]"
      />
    </button>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SecurityInput.scss';
</style>
