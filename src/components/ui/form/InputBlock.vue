<script>
import { computed, useCssModule, reactive, provide, inject } from 'vue';

import IconError from '@/assets/images/icon/text-error.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
  center: '',
  right: '',
  errorIcon: '',
});

export default {
  components: {
    IconError,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    error: {
      Type: Boolean,
      default: false,
    },
    type: {
      Type: String,
      default: null,
    },
  },
  setup(props, context) {
    let timer = null;

    const state = reactive({
      isFocus: false,
      isSelectFocus: false,
    });

    const formListItem = inject('formListItem', {});
    const formInvalidError = inject('formInvalidError', false);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isLeft = computed(() => {
      return Boolean(context.slots.left);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    const isInnerLeft = computed(() => {
      return Boolean(context.slots.innerLeft);
    });

    const isInnerRight = computed(() => {
      return Boolean(context.slots.innerRight);
    });

    const onfocusin = () => {
      clearTimeout(timer);
      state.isFocus = true;

      if (formListItem && formListItem.onfocusin) {
        formListItem.onfocusin();
      }
    };

    const onfocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.isFocus = false;
        clearTimeout(timer);
      }, 50);

      if (formListItem && formListItem.onfocusout) {
        formListItem.onfocusout();
      }
    };

    const selectFocus = (val) => {
      state.isSelectFocus = val;
    };

    provide('inputBlockStyleModule', useCssModule());
    provide('inputBlock', {
      selectFocus,
    });

    return {
      state,
      formListItem,
      formInvalidError,
      customClassNames,
      isLeft,
      isRight,
      isInnerLeft,
      isInnerRight,
      onfocusin,
      onfocusout,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['input-block'],
      {
        [$style['input-block--disabled']]: disabled,
        [$style[`input-block--type-${type}`]]: type,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-if="isLeft"
      :class="[$style['input-block__left'], customClassNames.left]"
    >
      <slot name="left" />
    </div>
    <div
      :class="[
        $style['input-block__center'],
        {
          [$style['input-block__center--focus']]:
            state.isFocus || state.isSelectFocus,
          [$style['input-block__center--error']]: error,
        },
        customClassNames.center,
        formListItem.areaClass,
      ]"
      @focusin="onfocusin"
      @focusout="onfocusout"
    >
      <div
        v-if="isInnerLeft"
        :class="[$style['input-block__inner-left'], customClassNames.left]"
      >
        <slot name="innerLeft" />
      </div>
      <slot />
      <div
        :class="[
          $style['input-block__cell'],
          $style['input-block__cell--error-icon'],
          customClassNames.errorIcon,
        ]"
      >
        <IconError />
      </div>
      <div
        v-if="isInnerRight"
        :class="[$style['input-block__inner-right'], customClassNames.left]"
      >
        <slot name="innerRight" />
      </div>
    </div>
    <div
      v-if="isRight"
      :class="[$style['input-block__right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/InputBlock.scss';
</style>
