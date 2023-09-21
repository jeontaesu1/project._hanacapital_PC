<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  watch,
  inject,
  nextTick,
  reactive,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  block: '',
  input: '',
  dot: '',
  placeholderDot: '',
  placeholderDotItem: '',
  placeholderDotItemHide: '',
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
      default: 'text',
    },
    length: {
      Type: Number,
      default: 1,
    },
    beforeDot: {
      Type: Number,
      default: 0,
    },
    afterDot: {
      Type: Number,
      default: 0,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    modelValue: {
      Type: String,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    placeholderDot: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const formListItem = inject('formListItem', {});

    const state = reactive({
      valueLength: 0,
      value: null,
    });

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const value = computed(() => {
      const { modelValue, defaultValue } = props;
      const { value } = state;

      return typeof modelValue === 'string'
        ? modelValue
        : typeof value === 'string'
        ? value
        : defaultValue;
    });

    const checkLength = () => {
      const { length } = props;
      const val = input.value.value;

      if (val.length > length) {
        input.value.value = val.substr(0, length);

        const eInput = new Event('input');
        input.value.dispatchEvent(eInput);
      }
    };

    const onInput = (e) => {
      const val = e.target.value;

      state.value = val;
      state.valueLength = val.length;

      emit('update:modelValue', val);
    };

    onMounted(() => {
      if (typeof value.value === 'string') {
        state.value = value.value;
        state.valueLength = value.value.length;
      }

      checkLength();
    });

    onUpdated(() => {
      if (input.value) {
        const val = input.value.value;

        state.value = val;
        state.valueLength = val.length;
      }

      checkLength();
    });

    watch(
      () => props.modelValue,
      (cur) => {
        state.value = cur;
        state.valueLength = cur.length;

        checkLength();

        nextTick(() => {
          if (formListItem && formListItem.checkInputed) {
            formListItem.checkInputed();
          }
        });
      }
    );

    return {
      state,
      input,
      customClassNames,
      value,
      checkLength,
      onInput,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['part-input'],
      {
        [$style['part-input--disabled']]: disabled,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-for="item in beforeDot"
      :key="item"
      :class="[$style['part-input__dot'], customClassNames.dot]"
    />
    <div
      :class="[$style['part-input__block'], customClassNames.block]"
      :style="`width: ${22 * length}px;`"
    >
      <div
        v-if="placeholderDot"
        :class="[
          $style['part-input__placeholder-dot'],
          customClassNames.placeholderDot,
        ]"
      >
        <div
          v-for="item in length"
          :key="item"
          :class="[
            $style['part-input__placeholder-dot-item'],
            customClassNames.placeholderDotItem,
            {
              [$style['part-input__placeholder-dot-item--hide']]:
                item <= state.valueLength,
              [customClassNames.placeholderDotItemHide]:
                item <= state.valueLength,
            },
          ]"
        />
      </div>
      <input
        ref="input"
        v-bind="$attrs"
        :type="type"
        :class="[$style['part-input__input'], customClassNames.input]"
        :maxlength="length"
        :value="value"
        :disabled="disabled"
        @input="onInput"
        @focusin="checkLength"
        @focusout="checkLength"
        @keydown="checkLength"
        @keyup="checkLength"
      />
    </div>
    <div
      v-for="item in afterDot"
      :key="item"
      :class="[$style['part-input__dot'], customClassNames.dot]"
    />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/PartInput.scss';
</style>
