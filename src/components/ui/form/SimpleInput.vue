<script>
import {
  ref,
  reactive,
  computed,
  provide,
  onBeforeMount,
  onMounted,
  onUpdated,
  useCssModule,
  watch,
  nextTick,
} from 'vue';

import FormInvalid from '@/components/ui/form/FormInvalid.vue';

const defaultClassNames = () => ({
  wrap: '',
  block: '',
  input: '',
  bottom: '',
  bottomLeft: '',
  count: '',
  countCurrent: '',
});

export default {
  components: {
    FormInvalid,
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
    maxlength: {
      Type: Number,
      default: null,
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
    count: {
      Type: Boolean,
      default: false,
    },
    error: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, emit }) {
    let timer = null;

    const $style = useCssModule();

    const state = reactive({
      isFocus: false,
      isInputed: false,
      val: '',
      count: props.modelValue ? props.modelValue.length : 0,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isBottom = computed(() => {
      return Boolean(slots.bottom);
    });

    const getInputElement = () => {
      return input.value;
    };

    const focus = () => {
      input.value.focus();
    };

    const checkLength = () => {
      const { maxlength } = props;

      if (typeof maxlength !== 'number') return;

      const val = input.value.value;

      if (val.length > maxlength) {
        input.value.value = val.substr(0, maxlength);

        const eInput = new Event('input');
        input.value.dispatchEvent(eInput);
      }
    };

    const checkInputed = () => {
      const length = input.value.value.length;
      state.isInputed = length ? true : false;
      state.count = length;
    };

    const onfocusin = () => {
      clearTimeout(timer);
      checkLength();
      state.isFocus = true;
      state.isInputed = input.value.value.length ? true : false;
    };

    const onfocusout = () => {
      clearTimeout(timer);
      checkLength();

      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onInput = (e) => {
      const { value } = e.target;
      state.val = value;
      emit('update:modelValue', value);
    };

    const onKeydown = () => {
      checkLength();
    };

    const onKeyup = () => {
      checkLength();
      checkInputed();
    };

    onBeforeMount(() => {
      state.val = props.modelValue || props.defaultValue || '';
    });

    onMounted(() => {
      checkLength();
      checkInputed();
    });

    onUpdated(() => {
      checkLength();
    });

    watch(
      () => props.modelValue,
      (cur) => {
        state.val = cur;

        nextTick(() => {
          checkInputed();
        });
      }
    );

    provide('simpleInput', {
      helpClass: $style['input__help'],
      invalidClass: $style['input__invalid'],
    });

    return {
      state,
      input,
      customClassNames,
      isBottom,
      getInputElement,
      focus,
      onfocusin,
      onInput,
      onKeydown,
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
        [$style['input--error']]: error,
        [$style['input--disabled']]: disabled,
      },
      customClassNames.wrap,
    ]"
  >
    <FormInvalid :error="error" :disabled="disabled">
      <div
        :class="[$style['input__block'], customClassNames.block]"
        @focusin="onfocusin"
        @focusout="onfocusout"
      >
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
          @keydown="onKeydown"
          @keyup="onKeyup"
        />
      </div>
      <div
        v-if="isBottom || count"
        :class="[$style['input__bottom'], customClassNames.bottom]"
      >
        <div
          v-if="isBottom"
          :class="[$style['input__bottom-left'], customClassNames.bottom]"
        >
          <slot name="bottom" />
        </div>
        <div
          v-if="count"
          :class="[$style['input__count'], customClassNames.bottom]"
        >
          <span
            :class="[
              $style['input__count-current'],
              customClassNames.countCurrent,
            ]"
            >{{ state.count }}</span
          ><span v-if="maxlength">/{{ maxlength }}</span>
        </div>
      </div>
    </FormInvalid>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SimpleInput.scss';
</style>
