<script>
import {
  ref,
  reactive,
  computed,
  inject,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue';

const defaultClassNames = () => ({
  layer: '',
});

const call = (obj, callName) => {
  if (obj && obj.callback && obj.callback[callName]) {
    obj.callback[callName]();
  }
};

export default {
  props: {
    tagName: {
      Type: String,
      default: 'div',
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    let timer = null;
    let parentCheck = false;

    const styleModule = inject('uiAccordionStyleModule');
    const uiAccordion = inject('uiAccordion', {});
    const uiAccordionItem = inject('uiAccordionItem', {});

    const state = reactive({
      opened: false,
    });

    const layer = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const open = (customSpeed) => {
      if (state.opened) return;

      const speed = (() => {
        if (typeof customSpeed === 'number') {
          return customSpeed;
        } else {
          if (
            uiAccordion &&
            uiAccordion.defaultSpeed &&
            uiAccordion.defaultSpeed.value
          ) {
            return uiAccordion.defaultSpeed.value;
          } else {
            return 0;
          }
        }
      })();
      const { openedClassName } = uiAccordion;
      const compStyles = getComputedStyle(layer.value);

      call(uiAccordion, 'onBeforeOpened');
      call(uiAccordionItem, 'onBeforeOpened');

      clearTimeout(timer);

      let beforeHeight = null;
      const checkDisplay = compStyles.getPropertyValue('display');

      if (checkDisplay !== 'none') {
        beforeHeight = layer.value.offsetHeight;
      }

      layer.value.style.transitionDuration = '0ms';
      layer.value.style.height = null;
      layer.value.classList.add(openedClassName);

      const display = compStyles.getPropertyValue('display');
      const afterHeight = layer.value.offsetHeight;

      layer.value.classList.remove(openedClassName);
      layer.value.style.display = display;

      if (!beforeHeight) {
        beforeHeight = layer.value.offsetHeight;
      }

      if (beforeHeight !== afterHeight) {
        layer.value.style.height = `${beforeHeight}px`;
        layer.value.style.overflow = 'hidden';

        state.opened = true;

        if (uiAccordionItem && uiAccordionItem.setOpened) {
          uiAccordionItem.setOpened(true);
        }

        nextTick(() => {
          timer = setTimeout(() => {
            call(uiAccordion, 'onOpened');
            call(uiAccordionItem, 'onOpened');

            layer.value.style.transitionDuration = `${speed}ms`;
            layer.value.style.height = `${afterHeight}px`;

            clearTimeout(timer);

            timer = setTimeout(() => {
              layer.value.style.display = null;
              layer.value.style.height = null;
              layer.value.style.overflow = null;

              call(uiAccordion, 'onAfterOpened');
              call(uiAccordionItem, 'onAfterOpened');

              clearTimeout(timer);
            }, speed);
          }, 0);
        });
      }
    };

    const close = (customSpeed) => {
      if (!state.opened) return;

      const speed = (() => {
        if (typeof customSpeed === 'number') {
          return customSpeed;
        } else {
          if (
            uiAccordion &&
            uiAccordion.defaultSpeed &&
            uiAccordion.defaultSpeed.value
          ) {
            return uiAccordion.defaultSpeed.value;
          } else {
            return 0;
          }
        }
      })();
      const { openedClassName } = uiAccordion;
      const compStyles = getComputedStyle(layer.value);

      call(uiAccordion, 'onBeforeClosed');
      call(uiAccordionItem, 'onBeforeClosed');

      clearTimeout(timer);

      const display = compStyles.getPropertyValue('display');
      const beforeHeight = layer.value.offsetHeight;

      layer.value.style.transitionDuration = '0ms';
      layer.value.style.height = null;
      layer.value.style.display = display;
      layer.value.classList.remove(openedClassName);

      const afterHeight = layer.value.offsetHeight;

      layer.value.classList.add(openedClassName);

      if (beforeHeight !== afterHeight) {
        layer.value.style.height = `${beforeHeight}px`;
        layer.value.style.overflow = 'hidden';

        state.opened = false;

        if (uiAccordionItem && uiAccordionItem.setOpened) {
          uiAccordionItem.setOpened(false);
        }

        nextTick(() => {
          timer = setTimeout(() => {
            call(uiAccordion, 'onClosed');
            call(uiAccordionItem, 'onClosed');

            layer.value.style.transitionDuration = `${speed}ms`;
            layer.value.style.height = `${afterHeight}px`;

            clearTimeout(timer);

            timer = setTimeout(() => {
              layer.value.style.display = null;
              layer.value.style.height = null;
              layer.value.style.overflow = null;

              call(uiAccordion, 'onAfterClosed');
              call(uiAccordionItem, 'onAfterClosed');

              clearTimeout(timer);
            }, speed);
          }, 0);
        });
      }
    };

    onMounted(() => {
      if (
        uiAccordionItem &&
        uiAccordionItem.getLayer &&
        uiAccordionItem.setLayer
      ) {
        if (!uiAccordionItem.getLayer()) {
          uiAccordionItem.setLayer({
            open,
            close,
          });
          parentCheck = true;

          if (
            uiAccordionItem.initialOpen &&
            uiAccordionItem.initialOpen.value
          ) {
            state.opened = true;

            if (uiAccordionItem.setOpened) {
              uiAccordionItem.setOpened(true);
            }
          }
        }
      }
    });

    onBeforeUnmount(() => {
      if (parentCheck && uiAccordionItem && uiAccordionItem.clearLayer) {
        uiAccordionItem.clearLayer();
      }
    });

    return {
      state,
      uiAccordion,
      styleModule,
      layer,
      customClassNames,
    };
  },
};
</script>

<template>
  <component
    :is="tagName"
    ref="layer"
    :class="[
      styleModule['accordion__layer'],
      {
        [uiAccordion.openedClassName]: state.opened,
      },
      customClassNames.layer,
    ]"
  >
    <slot />
  </component>
</template>
