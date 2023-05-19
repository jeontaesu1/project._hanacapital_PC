<script>
import {
  computed,
  useCssModule,
  provide,
  reactive,
  watch,
  onMounted,
} from 'vue';

const defaultClassNames = () => ({
  wrap: '',
});

const defaultSpeed = 350;

export default {
  props: {
    tagName: {
      Type: String,
      default: 'ul',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    once: {
      Type: Boolean,
      default: false,
    },
    defaultSpeed: {
      Type: Number,
      default: defaultSpeed,
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
    const state = reactive({
      items: [],
      count: 0,
      defaultSpeed: {
        value: defaultSpeed,
      },
      once: {
        value: false,
      },
      callback: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const itemsAdd = (obj) => {
      const key = state.count;

      state.items.push(
        Object.assign({}, obj, {
          key,
        })
      );

      state.count++;

      return key;
    };

    const itemsRemove = (key) => {
      const i = state.items.findIndex((item) => item.key === key);

      state.items.splice(i, 1);
    };

    const allOpen = (speed) => {
      if (props.once) {
        if (state.items[0]) {
          state.items[0].open(speed);
        }
      } else {
        state.items.forEach((item) => {
          item.open(speed);
        });
      }
    };

    const allClose = (speed) => {
      state.items.forEach((item) => {
        item.close(speed);
      });
    };

    onMounted(() => {
      state.defaultSpeed.value = props.defaultSpeed;
      state.once.value = props.once;
      state.callback.onBeforeOpened = props.onBeforeOpened;
      state.callback.onOpened = props.onOpened;
      state.callback.onAfterOpened = props.onAfterOpened;
      state.callback.onBeforeClosed = props.onBeforeClosed;
      state.callback.onClosed = props.onClosed;
      state.callback.onAfterClosed = props.onAfterClosed;
    });

    watch(
      () => props.defaultSpeed,
      (cur) => {
        state.defaultSpeed.value = cur;
      }
    );
    watch(
      () => props.once,
      (cur) => {
        state.once.value = cur;
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

    provide('uiAccordionStyleModule', useCssModule());
    provide('uiAccordion', {
      items: state.items,
      itemsAdd,
      itemsRemove,
      openedClassName: 'is-accordion-opened',
      defaultSpeed: state.defaultSpeed,
      once: state.once,
      callback: state.callback,
    });

    return {
      state,
      customClassNames,
      allOpen,
      allClose,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    :class="[$style['accordion'], customClassNames.wrap]"
  >
    <slot :allOpen="allOpen" :allClose="allClose" />
  </component>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/accordion/UiAccordion.scss';
</style>
