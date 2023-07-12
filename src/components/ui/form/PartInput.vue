<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  watch,
  inject,
  nextTick,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  block: '',
  input: '',
  dot: '',
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
    modelValue: {
      Type: String,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const formListItem = inject('formListItem', {});

    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
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
      emit('update:modelValue', e.target.value);
    };

    onMounted(() => {
      checkLength();
    });

    onUpdated(() => {
      checkLength();
    });

    watch(
      () => props.modelValue,
      () => {
        checkLength();

        nextTick(() => {
          if (formListItem && formListItem.checkInputed) {
            formListItem.checkInputed();
          }
        });
      }
    );

    return {
      input,
      customClassNames,
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
      :style="`width: ${0.8125 * length}rem;`"
    >
      <input
        ref="input"
        v-bind="$attrs"
        :type="type"
        :class="[$style['part-input__input'], customClassNames.input]"
        :maxlength="length"
        :value="modelValue"
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
