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
      default: 'checkbox',
    },
    name: {
      Type: String,
      default: null,
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
    const eSiblingsChange = new Event('siblingsChange');

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
      const el = e.target;
      const { checked } = el;
      const { type, name } = props;

      state.checked = checked;
      emit('update:modelValue', checked);

      if (type === 'radio' && name) {
        const siblingsEl = Array.prototype.filter.call(
          document.querySelectorAll(`[name="${name}"]`),
          (item) => {
            return !(item === el);
          }
        );

        siblingsEl.forEach((item) => {
          item.dispatchEvent(eSiblingsChange);
        });
      }
    };

    const onSiblingsChange = (e) => {
      const el = e.target;
      const { checked } = el;

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
      const { theme, modelValue, defaultChecked } = props;

      state.theme.value = theme;
      state.checked =
        typeof modelValue === 'boolean' ? modelValue : defaultChecked;
    });

    provide('checkBoxStyleModule', useCssModule());
    provide('checkBoxTheme', state.theme);

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      onChange,
      onSiblingsChange,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['checkbox'],
      {
        [$style[`checkbox--theme-${theme}`]]: theme,
        [$style[`checkbox--align-${align}`]]: align,
        [$style['checkbox--only-object']]: onlyObject,
        [$style['checkbox--full']]: full,
      },
      customClassNames.wrap,
    ]"
  >
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="[$style['checkbox__input'], customClassNames.input]"
      :name="name"
      :id="id"
      :checked="state.checked"
      @change="onChange"
      @siblingsChange="onSiblingsChange"
    />
    <label
      :for="id"
      :class="[$style['checkbox__label'], customClassNames.label]"
    >
      <slot />
    </label>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/CheckBox.scss';
</style>
