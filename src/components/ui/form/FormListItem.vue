<script>
import {
  ref,
  computed,
  reactive,
  provide,
  inject,
  onBeforeMount,
  onMounted,
  onUpdated,
  watch,
} from 'vue';

const defaultClassNames = () => ({
  item: '',
  title: '',
  titleText: '',
  titleOptionalText: '',
  require: '',
  requireText: '',
  contents: '',
});

export default {
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
    forceFocus: {
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
    target: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    selectOnly: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const styleModule = inject('formListStyleModule');

    let timer = null;

    const state = reactive({
      isFocus: false,
      isSelectFocus: false,
      isInputed: false,
      isError: false,
      selectOnly: {
        value: false,
      },
    });

    const areaClass = styleModule['form__area'];

    const contents = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const checkInputed = () => {
      const inputs = contents.value.querySelectorAll(
        `.${areaClass} input:not(.js-ignore):not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="image"])`
      );
      let isInputed = false;

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length) {
          isInputed = true;
          break;
        }
      }

      state.isInputed = isInputed;
    };

    const onfocusin = () => {
      const { disabled } = props;

      if (disabled) return;

      clearTimeout(timer);
      state.isFocus = true;

      checkInputed();
    };

    const onfocusout = () => {
      const { disabled } = props;

      if (disabled) return;

      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);
    };

    const onKeyup = () => {
      const { disabled } = props;

      if (disabled) return;

      checkInputed();
    };

    const labelClick = () => {
      const { target, disabled } = props;

      if (disabled || !target) return;

      const el = contents.value.querySelector(target);

      el.focus();

      if (el.matches('button, a')) {
        el.click();
      }
    };

    const error = (val) => {
      state.isError = val;
    };

    const selectFocus = (val) => {
      state.isSelectFocus = val;
    };

    onBeforeMount(() => {
      state.selectOnly.value = props.selectOnly;
    });

    onMounted(() => {
      checkInputed();
    });

    onUpdated(() => {
      checkInputed();
    });

    watch(
      () => props.selectOnly,
      (cur) => {
        state.selectOnly.value = cur;
      }
    );

    provide('formListItem', {
      areaClass,
      onfocusin,
      onfocusout,
      error,
      selectFocus,
      helpClass: styleModule['form__help'],
      selectOnly: state.selectOnly,
      checkInputed,
    });

    return {
      state,
      styleModule,
      contents,
      customClassNames,
      onfocusin,
      onfocusout,
      onKeyup,
      labelClick,
    };
  },
};
</script>

<template>
  <div
    :class="[
      styleModule['form__item'],
      {
        [styleModule['form__item--focus']]:
          state.isFocus || state.isSelectFocus,
        [styleModule['form__item--inputed']]: state.isInputed,
        [styleModule['form__item--force-focus']]: forceFocus,
        [styleModule['form__item--error']]: state.isError,
        [styleModule['form__item--disabled']]: disabled,
        [styleModule['form__item--select-only']]: selectOnly,
      },
      customClassNames.item,
    ]"
  >
    <dt
      :class="[styleModule['form__title'], customClassNames.title]"
      @click="labelClick"
    >
      <span
        :class="[styleModule['form__title-text'], customClassNames.titleText]"
      >
        {{ titleText }}
      </span>
      <span
        v-if="titleOptionalText"
        :class="[
          styleModule['form__title-optional'],
          customClassNames.titleOptionalText,
        ]"
      >
        {{ titleOptionalText }}
      </span>
      <span
        v-if="require"
        :class="[styleModule['form__require'], customClassNames.require]"
      >
        <span
          :class="[
            styleModule['form__require-text'],
            customClassNames.requireText,
          ]"
        >
          (필수)
        </span>
      </span>
    </dt>
    <dd
      ref="contents"
      :class="[styleModule['form__contents'], customClassNames.contents]"
      @keyup="onKeyup"
    >
      <slot />
    </dd>
  </div>
</template>
