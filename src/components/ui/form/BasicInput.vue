<script>
import { ref, reactive, computed, onBeforeMount } from 'vue';

import IconDelete from '@/assets/images/icon/text-delete.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  cell: '',
  input: '',
  delete: '',
  deleteText: '',
});

export default {
  components: {
    IconDelete,
  },
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
      default: 'text',
    },
    maxLength: {
      Type: Number,
      default: null,
    },
    onDelete: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    useDelete: {
      Type: Boolean,
      default: true,
    },
    readonly: {
      Type: Boolean,
      default: false,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    align: {
      Type: String,
      default: null,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    modelValue: {
      Type: String,
    },
  },
  setup(props, { emit }) {
    let timer = null;

    const state = reactive({
      isFocus: false,
      isInputed: false,
      val: '',
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getInputElement = () => {
      return input.value;
    };

    const focus = () => {
      input.value.focus();
    };

    const deleteAction = () => {
      const { onDelete } = props;
      input.value.value = '';
      input.value.focus();
      onDelete();

      const eInput = new Event('input');
      input.value.dispatchEvent(eInput);
    };

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;
      state.isInputed = input.value.value.length ? true : false;
    };

    const onfocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onInput = (e) => {
      const { value } = e.target;
      const { maxLength } = props;
      const val =
        maxLength === null ? value : value.substr(0, Number(maxLength));

      e.target.value = val;
      state.val = val;
      emit('update:modelValue', val);
    };

    const onKeyup = (e) => {
      state.isInputed = e.target.value.length ? true : false;
    };

    onBeforeMount(() => {
      state.val = props.modelValue || props.defaultValue || '';
    });

    return {
      state,
      input,
      customClassNames,
      getInputElement,
      focus,
      deleteAction,
      onfocusin,
      onInput,
      onKeyup,
      onfocusout,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['input'],
      {
        [$style['input--focus']]: state.isFocus,
        [$style['input--inputed']]: state.isInputed,
      },
      customClassNames.wrap,
    ]"
    @focusin="onfocusin"
    @focusout="onfocusout"
  >
    <div :class="[$style['input__cell'], customClassNames.cell]">
      <input
        ref="input"
        v-bind="$attrs"
        :type="type"
        :class="[
          $style['input__input'],
          {
            [$style[`input__input--align-${align}`]]: align,
          },
          customClassNames.input,
        ]"
        :value="modelValue || state.val"
        :disabled="disabled"
        :readonly="readonly"
        @input="onInput"
        @keyup="onKeyup"
      />
    </div>
    <button
      type="button"
      v-if="!disabled && !readonly && useDelete"
      :class="[$style['input__delete'], customClassNames.delete]"
      @click="deleteAction"
    >
      <IconDelete />
      <span :class="[$style['input__delete-text'], customClassNames.deleteText]"
        >입력 내용 지우기</span
      >
    </button>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicInput.scss';
</style>
