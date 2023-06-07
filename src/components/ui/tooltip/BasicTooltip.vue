<script>
import {
  computed,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  button: '',
  bubble: '',
  tail: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    placement: {
      Type: String,
      default: 'top',
    },
    type: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    let timer = null;

    const state = reactive({
      show: false,
      top: 0,
      tailLeft: 0,
    });

    const button = ref(null);
    const bubble = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setPosition = () => {
      if (!state.show) return;

      const { placement } = props;
      const buttonEl = button.value;
      const bubbleEl = bubble.value;
      const width = buttonEl.offsetWidth;
      const bubbleW = bubbleEl.offsetWidth;
      const bubbleX = bubbleEl.offsetLeft;
      const left = (() => {
        let left = buttonEl.offsetLeft + width / 2 - bubbleX;
        const max = bubbleW - 22;

        if (props.type === 'popup') {
          left = buttonEl.offsetLeft - 30 + width / 2;

          if (left < 22) {
            return 22;
          } else if (left > max) {
            return max;
          } else {
            return left;
          }
        } else {
          return left;
        }
      })();

      if (placement === 'bottom') {
        state.top = 0;
      } else {
        state.top = buttonEl.offsetHeight + 12;
      }

      state.tailLeft = left;
    };

    const toggle = () => {
      state.show = !state.show;

      nextTick(() => {
        setPosition();
      });
    };

    const open = () => {
      state.show = true;

      nextTick(() => {
        setPosition();
      });
    };

    const close = () => {
      state.show = false;

      nextTick(() => {
        setPosition();
      });
    };

    const onFocusin = () => {
      clearTimeout(timer);
      open();
    };

    const onFocusout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        clearTimeout(timer);
        close();
      }, 50);
    };

    const onMouseenter = () => {
      open();
    };

    const onMouseleave = () => {
      close();
    };

    onMounted(() => {
      setPosition();

      window.addEventListener('resize', setPosition);
      window.addEventListener('orientationchange', setPosition);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', setPosition);
      window.removeEventListener('orientationchange', setPosition);
    });

    return {
      state,
      button,
      bubble,
      customClassNames,
      toggle,
      open,
      close,
      onFocusin,
      onFocusout,
      onMouseenter,
      onMouseleave,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['tooltip'],
      {
        [$style['tooltip--bottom']]: placement === 'bottom',
        [$style[`tooltip--type-${type}`]]: type,
        'is-show': state.show,
      },
      customClassNames.wrap,
    ]"
    tabindex="0"
    @focusin="onFocusin"
    @focusout="onFocusout"
    @mouseleave="onMouseleave"
  >
    <div
      ref="button"
      :class="[$style['tooltip__button'], customClassNames.button]"
      @mouseenter="onMouseenter"
    >
      <slot />
    </div>
    <div
      ref="bubble"
      :class="[$style['tooltip__bubble'], customClassNames.bubble]"
      :style="`margin-top: -${state.top}px;`"
    >
      <div
        :class="[$style['tooltip__tail'], customClassNames.tail]"
        :style="`left: ${state.tailLeft}px;`"
      />
      <slot name="contents" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tooltip/BasicTooltip.scss';
</style>
