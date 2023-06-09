<script>
import {
  ref,
  computed,
  useCssModule,
  provide,
  reactive,
  watch,
  onBeforeMount,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
  label: '',
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
      default: 'radio',
    },
    id: {
      Type: String,
      required: true,
    },
    align: {
      Type: String,
      default: null,
    },
    theme: {
      Type: String,
      default: null,
    },
    onlyObject: {
      Type: Boolean,
      default: false,
    },
    full: {
      Type: Boolean,
      default: false,
    },
    defaultChecked: {
      Type: Boolean,
      default: false,
    },
    modelValue: {
      Type: Boolean,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      theme: { value: null },
      checked: false,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getInputElement = () => {
      return input.value;
    };

    const onChange = (e) => {
      const { checked } = e.target;

      state.checked = checked;
      emit('update:modelValue', checked);
    };

    watch(
      () => props.theme,
      (cur) => {
        state.theme.value = cur;
      }
    );

    watch(
      () => props.modelValue,
      (cur) => {
        state.checked = cur;
      }
    );

    onBeforeMount(() => {
      state.theme.value = props.theme;

      const { modelValue, defaultChecked } = props;

      state.checked =
        typeof modelValue === 'boolean' ? modelValue : defaultChecked;
    });

    provide('radioButtonStyleModule', useCssModule());
    provide('radioButtonTheme', state.theme);

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      onChange,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['radio'],
      {
        [$style[`radio--theme-${theme}`]]: theme,
        [$style[`radio--align-${align}`]]: align,
        [$style['radio--only-object']]: onlyObject,
        [$style['radio--full']]: full,
      },
      customClassNames.wrap,
    ]"
  >
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['radio__input'], customClassNames.input]"
      :id="id"
      :checked="state.checked"
      @change="onChange"
    />
    <label :for="id" :class="[$style['radio__label'], customClassNames.label]">
      <slot />
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/RadioButton.scss';
</style>
