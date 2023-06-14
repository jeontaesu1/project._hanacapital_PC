<script>
import {
  reactive,
  computed,
  useCssModule,
  provide,
  nextTick,
  onMounted,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    initialOpen: {
      Type: String,
      default: null,
    },
    type: {
      Type: String,
      default: null,
    },
    onChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
  },
  setup(props) {
    const state = reactive({
      activeName: {
        value: null,
      },
      buttons: [],
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const buttonsAdd = (obj) => {
      const i = state.buttons.findIndex((item) => item.key === obj.key);
      if (i >= 0) return;
      state.buttons.push(Object.assign({}, obj));
    };

    const buttonsRemove = (key) => {
      const i = state.buttons.findIndex((item) => item.key === key);
      state.buttons.splice(i, 1);
    };

    const buttonsUpdate = (key, obj) => {
      const i = state.buttons.findIndex((item) => item.key === key);
      const testKey = (() => {
        if (!obj.key) return true;

        if (typeof obj.key === 'string' && !obj.key.length) return false;

        const i = state.buttons.findIndex((item) => item.key === obj.key);

        if (i === -1) {
          return true;
        } else {
          return false;
        }
      })();

      if (testKey) {
        Object.assign(state.buttons[i], obj);
      }
    };

    const getButton = (key) => {
      const i = state.buttons.findIndex((item) => item.key === key);
      return state.buttons[i];
    };

    const open = (key, isFocus = true) => {
      const { onChange } = props;

      state.activeName.value = key;

      nextTick(() => {
        const button = getButton(key);
        button.open(isFocus);
        onChange();
      });
    };

    const prev = () => {
      const key = state.activeName.value;
      const aliveButtons = state.buttons.filter((item) => !item.disabled);
      const i = aliveButtons.findIndex((item) => item.key === key);
      const prevIndex = (() => {
        const result = i - 1;

        if (result < 0) {
          return aliveButtons.length - 1;
        } else {
          return result;
        }
      })();

      open(aliveButtons[prevIndex].key);
    };

    const next = () => {
      const key = state.activeName.value;
      const aliveButtons = state.buttons.filter((item) => !item.disabled);
      const i = aliveButtons.findIndex((item) => item.key === key);
      const nextIndex = (() => {
        const result = i + 1;

        if (result >= aliveButtons.length) {
          return 0;
        } else {
          return result;
        }
      })();

      open(aliveButtons[nextIndex].key);
    };

    const start = () => {
      const aliveButtons = state.buttons.filter((item) => !item.disabled);
      open(aliveButtons[0].key);
    };

    const end = () => {
      const aliveButtons = state.buttons.filter((item) => !item.disabled);
      open(aliveButtons[aliveButtons.length - 1].key);
    };

    onMounted(() => {
      if (props.initialOpen) {
        open(props.initialOpen, false);
      } else {
        if (state.buttons.length) {
          open(state.buttons[0].key, false);
        }
      }
    });

    provide('uiTabStyleModule', useCssModule());
    provide('uiTab', {
      activeName: state.activeName,
      buttonsAdd,
      buttonsRemove,
      buttonsUpdate,
      open,
      prev,
      next,
      start,
      end,
    });

    return {
      state,
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['tab'],
      {
        [$style[`tab--type-${type}`]]: type,
      },
      customClassNames.wrap,
    ]"
  >
    <slot :activeName="state.activeName.value" />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tab/UiTab.scss';
</style>
