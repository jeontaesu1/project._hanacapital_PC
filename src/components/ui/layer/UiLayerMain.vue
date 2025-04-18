<script>
import {
  ref,
  reactive,
  computed,
  useCssModule,
  nextTick,
  onMounted,
  onBeforeUnmount,
  provide,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiLoadingStore } from '@/stores/ui/loading';
import { useUiLayerStore } from '@/stores/ui/layer';

const defaultClassNames = () => ({
  wrap: '',
  container: '',
  loop: '',
});
const filter = Array.prototype.filter;
const getParents = (el) => {
  const parents = [];
  for (el = el.parentNode; el && el !== document; el = el.parentNode) {
    parents.push(el);
  }
  return parents;
};
const setAttr = (elArr, name, val) => {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].setAttribute(name, val);
  }
};
const removeAttr = (elArr, name) => {
  for (let i = 0; i < elArr.length; i++) {
    elArr[i].removeAttribute(name);
  }
};
const elFocus = (el) => {
  let setTabindex = false;

  if (!el.getAttribute('tabindex')) {
    el.setAttribute('tabindex', '0');
    setTabindex = true;
  }

  el.focus();

  if (setTabindex) {
    el.removeAttribute('tabindex');
  }
};

export default {
  props: {
    type: {
      Type: String,
      default: null,
    },
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    backgroundClose: {
      Type: Boolean,
      default: false,
    },
    openerFocusToAfterClose: {
      Type: Boolean,
      default: true,
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
    const $style = useCssModule();
    const defaultSpeed = 350;
    let timer = null;

    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        loading: useUiLoadingStore(),
        layer: useUiLayerStore(),
      },
    };

    const state = reactive({
      display: 'none',
      opened: false,
      zIndex: store.ui.layer.zIndex,
      speed: defaultSpeed,
      opener: null,
      stickyBar: {
        value: null,
      },
      isContainerClick: false,
    });

    const layer = ref(null);
    const layerContainer = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const open = (opener = null, speed = defaultSpeed) => {
      if (state.opened) return;

      const { type, onBeforeOpened, onOpened, onAfterOpened } = props;

      onBeforeOpened();

      const body = document.getElementsByTagName('body')[0];
      const layers = document.getElementsByClassName($style['layer']);
      const preOpenLayers = filter.call(layers, (item) => {
        return (
          layer.value !== item &&
          item.classList.contains($style['layer--opened'])
        );
      });
      const notOhterElements =
        'script, link, style, base, meta, br, [aria-hidden], [inert], .js-not-inert, .js-not-inert *, [data-ui-js], option, ul, dl, table, thead, tbody, tfoot, tr, colgroup, col, :empty, .duet-date__dialog, .duet-date__dialog *';
      const layersParents = (() => {
        let re = [];
        for (let i = 0; i < layers.length; i++) {
          re = re.concat(getParents(layers[i]));
        }
        re = new Set(re);
        return Array.from(re);
      })();
      const ohterElements = filter.call(body.querySelectorAll('*'), (item) => {
        return (
          !item.classList.contains($style['layer']) &&
          !item.closest(`.${$style['layer']}`) &&
          !item.matches(notOhterElements) &&
          !(item === store.ui.loading.element) &&
          !layersParents.find((parent) => parent === item) &&
          !(!item.offsetWidth && !item.offsetHeight)
        );
      });
      const preLayersElements = (() => {
        let re = [];
        for (let i = 0; i < preOpenLayers.length; i++) {
          re = re.concat(
            filter.call(preOpenLayers[i].querySelectorAll('*'), (item) => {
              return !item.matches(notOhterElements);
            })
          );
        }
        re = new Set(re);
        return Array.from(re);
      })();
      const inElements = layer.value.querySelectorAll('[data-ui-js="hidden"]');

      clearTimeout(timer);

      store.ui.scrollBlock.block();
      state.speed = speed;
      state.display = type && type.match(/toast|toast-fix/) ? 'flex' : 'block';
      state.zIndex = store.ui.layer.zIndex;
      store.ui.layer.updateZIndex();

      if (opener) {
        state.opener = opener;
      }

      removeAttr(inElements, 'aria-hidden');
      removeAttr(inElements, 'inert');
      removeAttr(inElements, 'data-ui-js');
      layer.value.removeAttribute('inert');
      layer.value.setAttribute('aria-hidden', 'false');
      layer.value.setAttribute('aria-modal', 'true');
      setAttr(ohterElements, 'aria-hidden', 'true');
      setAttr(ohterElements, 'data-ui-js', 'hidden');
      setAttr(preLayersElements, 'aria-hidden', 'true');
      setAttr(preLayersElements, 'data-ui-js', 'hidden');
      setAttr(preOpenLayers, 'aria-hidden', 'true');
      removeAttr(preOpenLayers, 'aria-modal');

      if (
        !store.ui.common.userAgent.isIos &&
        !store.ui.common.userAgent.isAndroid
      ) {
        setAttr(ohterElements, 'inert', '');
        setAttr(preLayersElements, 'inert', '');
        setAttr(preOpenLayers, 'inert', '');
      }

      nextTick(() => {
        timer = setTimeout(() => {
          state.opened = true;

          nextTick(() => {
            if (state.stickyBar.value && state.stickyBar.value.update) {
              state.stickyBar.value.update();
            }
            onOpened();
            clearTimeout(timer);

            timer = setTimeout(() => {
              layerContainer.value.focus();
              onAfterOpened();
              clearTimeout(timer);
            }, speed);
          });
        }, 0);
      });
    };

    const close = (speed = defaultSpeed) => {
      if (!state.opened) return;

      const {
        openerFocusToAfterClose,
        onBeforeClosed,
        onClosed,
        onAfterClosed,
      } = props;

      onBeforeClosed();

      const html = document.getElementsByTagName('html')[0];
      const body = document.getElementsByTagName('body')[0];

      clearTimeout(timer);
      state.speed = speed;
      state.opened = false;
      onClosed();

      nextTick(() => {
        timer = setTimeout(() => {
          const { opener } = state;
          const preOpenLayers = filter.call(
            document.getElementsByClassName($style['layer--opened']),
            (item) => {
              return layer.value !== item;
            }
          );
          const preOpenLayer = (() => {
            if (!preOpenLayers.length) return null;

            const higherZIndex = (() => {
              const arr = [];
              for (let i = 0; i < preOpenLayers.length; i++) {
                arr.push(preOpenLayers[i].style.zIndex);
              }
              arr.sort();
              return arr[arr.length - 1];
            })();

            return filter.call(preOpenLayers, (item) => {
              return item.style.zIndex === higherZIndex;
            })[0];
          })();
          const preOpenLayerOhterElements = preOpenLayer
            ? preOpenLayer.querySelectorAll('[data-ui-js="hidden"]')
            : [];

          if (preOpenLayer) {
            removeAttr(preOpenLayerOhterElements, 'aria-hidden');
            removeAttr(preOpenLayerOhterElements, 'inert');
            removeAttr(preOpenLayerOhterElements, 'data-ui-js');
            preOpenLayer.removeAttribute('inert');
            preOpenLayer.setAttribute('aria-hidden', 'false');
            preOpenLayer.setAttribute('aria-modal', 'true');
          } else {
            const ohterElements = body.querySelectorAll(
              '[data-ui-js="hidden"]'
            );
            removeAttr(ohterElements, 'aria-hidden');
            removeAttr(ohterElements, 'inert');
            removeAttr(ohterElements, 'data-ui-js');
          }

          if (!preOpenLayers.length) {
            store.ui.scrollBlock.clear();
          }

          if (opener) {
            const openerParent = opener.closest('button, a');
            const openerTarget = openerParent ? openerParent : opener;

            if (openerFocusToAfterClose) {
              if (preOpenLayer) {
                if (opener.closest(`.${$style['layer']}`) === preOpenLayer) {
                  elFocus(openerTarget);
                }
              } else {
                elFocus(openerTarget);
              }
            }
            state.opener = null;
          } else {
            elFocus(html);
            window.scrollTo(
              store.ui.scrollBlock.scrollLeft,
              store.ui.scrollBlock.scrollTop
            );
          }

          state.display = 'none';

          onAfterClosed();
          clearTimeout(timer);
        }, speed);
      });
    };

    const loopFocusBefore = () => {
      const lastChild = (() => {
        const arr = layerContainer.value.querySelectorAll(':last-child');

        if (arr.length) {
          return arr[arr.length - 1];
        } else {
          return null;
        }
      })();

      if (lastChild) {
        elFocus(lastChild);
      } else {
        layerContainer.value.focus();
      }
    };

    const loopFocusAfter = () => {
      layerContainer.value.focus();
    };

    const bodyClick = (e) => {
      const { target } = e;
      const closest = target.closest(`.${$style['layer']}`);

      if (
        props.backgroundClose &&
        !state.isContainerClick &&
        !(
          target.classList.contains($style['layer']) && target !== layer.value
        ) &&
        !(closest && closest !== layer.value)
      ) {
        close();
      }
      state.isContainerClick = false;
    };

    const containerClick = () => {
      state.isContainerClick = true;
    };

    onMounted(() => {
      const body = document.getElementsByTagName('body')[0];

      if (!layer.value.parentNode.matches('body')) {
        body.append(layer.value);
      }

      body.addEventListener('click', bodyClick);
    });

    onBeforeUnmount(() => {
      const body = document.getElementsByTagName('body')[0];

      body.removeEventListener('click', bodyClick);
      close(0);
      layer.value.remove();
    });

    provide('uiLayer', {
      stickyBar: state.stickyBar,
    });

    return {
      state,
      customClassNames,
      layer,
      layerContainer,
      open,
      close,
      loopFocusBefore,
      loopFocusAfter,
      containerClick,
    };
  },
};
</script>

<template>
  <div
    ref="layer"
    :class="[
      $style['layer'],
      {
        [$style[`layer--type-${type}`]]: type,
        [$style['layer--opened']]: state.opened,
      },
      customClassNames.wrap,
    ]"
    :style="`display: ${state.display}; z-index: ${
      state.zIndex
    }; transition-duration: ${state.speed}ms; visibility: ${
      state.display === 'none' ? 'hidden' : 'visible'
    };`"
    :aria-hidden="state.opened ? 'false' : 'true'"
    :aria-modal="state.opened ? 'true' : null"
    :hidden="state.opened ? null : ''"
  >
    <div
      :class="[$style['layer__loop'], customClassNames.loop]"
      tabindex="0"
      @focus="loopFocusBefore"
    ></div>
    <div
      ref="layerContainer"
      :class="[$style['layer__container'], customClassNames.container]"
      :style="`transition-duration: ${state.speed}ms;`"
      :tabindex="state.opened ? '0' : null"
      @click="containerClick"
    >
      <slot
        :open="open"
        :close="close"
        :opened="state.opened"
        :display="state.display"
      />
    </div>
    <div
      :class="[$style['layer__loop'], customClassNames.loop]"
      tabindex="0"
      @focus="loopFocusAfter"
    ></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/UiLayerMain.scss';
</style>
