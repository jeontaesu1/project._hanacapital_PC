<script>
import {
  computed,
  provide,
  inject,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue';

const defaultClassNames = () => ({
  item: '',
});

export default {
  props: {
    tagName: {
      Type: String,
      default: 'li',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    initialOpen: {
      Type: Boolean,
      default: false,
    },
    onBeforeOpened: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onOpened: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onAfterOpened: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onBeforeClosed: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onClosed: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    onAfterClosed: {
      Type: Function,
      default() {
        return () => {};
      },
    },
  },
  setup(props) {
    const styleModule = inject('uiAccordionStyleModule');
    const uiAccordion = inject('uiAccordion', {});

    const state = reactive({
      opened: {
        value: false,
      },
      key: null,
      layer: null,
      callback: {},
      initialOpen: {
        value: false,
      },
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const getLayer = () => {
      return state.layer;
    };

    const setLayer = (obj) => {
      state.layer = obj;
    };

    const clearLayer = () => {
      state.layer = null;
    };

    const setOpened = (val) => {
      state.opened.value = val;
    };

    const open = (speed) => {
      if (state.opened.value) return;

      if (state.layer && state.layer.open) {
        if (uiAccordion && uiAccordion.once && uiAccordion.once.value) {
          if (uiAccordion.items) {
            uiAccordion.items.forEach((item) => {
              if (item.key !== state.key) {
                item.close(speed);
              }
            });
          }
        }

        state.layer.open(speed);
      }
    };

    const close = (speed) => {
      if (!state.opened.value) return;

      if (state.layer && state.layer.close) {
        state.layer.close(speed);
      }
    };

    const toggle = (speed) => {
      if (state.opened.value) {
        close(speed);
      } else {
        open(speed);
      }
    };

    onBeforeMount(() => {
      state.initialOpen.value = props.initialOpen;
      state.callback.onBeforeOpened = props.onBeforeOpened;
      state.callback.onOpened = props.onOpened;
      state.callback.onAfterOpened = props.onAfterOpened;
      state.callback.onBeforeClosed = props.onBeforeClosed;
      state.callback.onClosed = props.onClosed;
      state.callback.onAfterClosed = props.onAfterClosed;
    });

    onMounted(() => {
      if (uiAccordion && uiAccordion.itemsAdd) {
        state.key = uiAccordion.itemsAdd({
          open,
          close,
          toggle,
        });
      }
    });

    onBeforeUnmount(() => {
      if (uiAccordion && uiAccordion.itemsRemove) {
        uiAccordion.itemsRemove(state.key);
      }
    });

    watch(
      () => props.initialOpen,
      (cur) => {
        state.initialOpen.value = cur;
      }
    );
    watch(
      () => props.onBeforeOpened,
      (cur) => {
        state.callback.onBeforeOpened = cur;
      }
    );
    watch(
      () => props.onOpened,
      (cur) => {
        state.callback.onOpened = cur;
      }
    );
    watch(
      () => props.onAfterOpened,
      (cur) => {
        state.callback.onAfterOpened = cur;
      }
    );
    watch(
      () => props.onBeforeClosed,
      (cur) => {
        state.callback.onBeforeClosed = cur;
      }
    );
    watch(
      () => props.onClosed,
      (cur) => {
        state.callback.onClosed = cur;
      }
    );
    watch(
      () => props.onAfterClosed,
      (cur) => {
        state.callback.onAfterClosed = cur;
      }
    );

    provide('uiAccordionItem', {
      opened: state.opened,
      initialOpen: state.initialOpen,
      getLayer,
      setLayer,
      clearLayer,
      setOpened,
      open,
      close,
      toggle,
      callback: state.callback,
    });

    return {
      uiAccordion,
      styleModule,
      state,
      customClassNames,
      open,
      close,
      toggle,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[
      styleModule['accordion__item'],
      {
        [uiAccordion.openedClassName]: state.opened.value,
      },
      customClassNames.item,
    ]"
  >
    <slot
      :open="open"
      :close="close"
      :toggle="toggle"
      :opened="state.opened.value"
    />
  </component>
</template>
