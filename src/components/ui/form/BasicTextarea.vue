<script>
import {
  ref,
  reactive,
  computed,
  inject,
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
  item: '',
  title: '',
  titleText: '',
  titleOptionalText: '',
  require: '',
  requireText: '',
  contents: '',
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
    require: {
      Type: Boolean,
      default: false,
    },
    titleText: {
      Type: String,
      default: '',
    },
    titleOptionalText: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    count: {
      Type: Boolean,
      default: false,
    },
    error: {
      Type: Boolean,
      default: false,
    },
    maxlength: {
      Type: Number,
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
  setup(props, context) {
    const { emit } = context;
    let timer = null;

    const $style = useCssModule();
    const formListStyleModule = inject('formListStyleModule');

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
      return Boolean(context.slots.bottom);
    });

    const getInputElement = () => {
      return input.value;
    };

    const focus = () => {
      input.value.focus();
    };

    const labelClick = () => {
      focus();
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

    provide('formListItem', {
      helpClass: formListStyleModule['form__help'],
    });

    provide('basicTextarea', {
      helpClass: $style['input__help'],
      invalidClass: $style['input__invalid'],
    });

    return {
      formListStyleModule,
      state,
      input,
      customClassNames,
      isBottom,
      getInputElement,
      focus,
      labelClick,
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
      formListStyleModule['form__item'],
      {
        [formListStyleModule['form__item--focus']]: state.isFocus,
        [formListStyleModule['form__item--inputed']]: state.isInputed,
        [formListStyleModule['form__item--error']]: error,
        [formListStyleModule['form__item--disabled']]: disabled,
      },
      $style['input'],
      {
        [$style['input--focus']]: state.isFocus,
        [$style['input--inputed']]: state.isInputed,
        [$style['input--error']]: error,
        [$style['input--disabled']]: disabled,
      },
      customClassNames.item,
    ]"
  >
    <dt
      :class="[
        formListStyleModule['form__title'],
        $style['input__title'],
        customClassNames.title,
      ]"
      @click="labelClick"
    >
      <span
        :class="[
          formListStyleModule['form__title-text'],
          customClassNames.titleText,
        ]"
      >
        {{ titleText }}
      </span>
      <span
        v-if="titleOptionalText"
        :class="[
          formListStyleModule['form__title-optional'],
          customClassNames.titleOptionalText,
        ]"
      >
        {{ titleOptionalText }}
      </span>
      <span
        v-if="require"
        :class="[
          formListStyleModule['form__require'],
          customClassNames.require,
        ]"
      >
        <span
          :class="[
            formListStyleModule['form__require-text'],
            customClassNames.requireText,
          ]"
        >
          (필수)
        </span>
      </span>
    </dt>
    <dd
      :class="[
        formListStyleModule['form__contents'],
        $style['input__contents'],
        customClassNames.contents,
      ]"
    >
      <FormInvalid :error="error">
        <div :class="[$style['input__input'], customClassNames.input]">
          <textarea
            ref="input"
            v-bind="$attrs"
            :value="modelValue || state.val"
            :disabled="disabled"
            @input="onInput"
            @focusin="onfocusin"
            @focusout="onfocusout"
            @keydown="onKeydown"
            @keyup="onKeyup"
          ></textarea>
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
    </dd>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BasicTextarea.scss';
</style>
