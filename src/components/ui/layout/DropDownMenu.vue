<script>
import {
  ref,
  computed,
  reactive,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { RouterLink } from 'vue-router';
import Simplebar from 'simplebar-vue';
import { createPopper } from '@popperjs/core';

import IconDropdown from '@/assets/images/icon/dropdown.svg?component';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  title: '',
  opener: '',
  openerIcon: '',
  openerText: '',
  layer: '',
  contents: '',
  scroller: '',
  list: '',
  item: '',
  link: '',
});

export default {
  components: {
    RouterLink,
    Simplebar,
    IconDropdown,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    title: {
      Type: String,
      default: '',
    },
    data: {
      Type: Array,
      default() {
        return [];
      },
    },
    theme: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const state = reactive({
      opened: false,
      isWrapClick: false,
    });

    const popper = ref(null);
    const wrap = ref(null);
    const head = ref(null);
    const layer = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const updatePosition = () => {
      popper.value = createPopper(head.value, layer.value, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 0],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              wrap.value.classList.toggle(
                'is-drop-up',
                state.placement === 'top'
              );
            },
          },
        ],
      });
    };

    const open = () => {
      state.opened = true;

      nextTick(() => {
        updatePosition();
      });
    };

    const close = () => {
      state.opened = false;

      if (popper.value && popper.value.destroy) {
        popper.value.destroy();
      }
    };

    const toggle = () => {
      if (state.opened) {
        close();
      } else {
        open();
      }
    };

    const bodyClick = () => {
      if (!state.isWrapClick) {
        close();
      }

      state.isWrapClick = false;
    };

    const wrapClick = () => {
      state.isWrapClick = true;
    };

    onMounted(() => {
      const body = document.getElementsByTagName('body')[0];

      body.addEventListener('click', bodyClick);
    });

    onBeforeUnmount(() => {
      const body = document.getElementsByTagName('body')[0];

      body.removeEventListener('click', bodyClick);

      if (popper.value && popper.value.destroy) {
        popper.value.destroy();
      }
    });

    return {
      state,
      customClassNames,
      wrap,
      head,
      layer,
      toggle,
      wrapClick,
      close,
    };
  },
};
</script>

<template>
  <nav
    ref="wrap"
    :class="[
      $style['menu'],
      {
        'is-opened': state.opened,
        [$style[`menu--theme-${theme}`]]: theme,
      },
      customClassNames.wrap,
    ]"
    @click="wrapClick"
  >
    <div ref="head" :class="[$style['menu__head'], customClassNames.head]">
      <h3 :class="[$style['menu__title'], customClassNames.title]">
        {{ title }}
      </h3>
      <button
        type="button"
        :class="[$style['menu__opener'], customClassNames.opener]"
        @click="toggle"
      >
        <IconDropdown
          :class="[$style['menu__opener-icon'], customClassNames.openerIcon]"
        />
        <span
          :class="[$style['menu__opener-text'], customClassNames.openerText]"
        >
          내용 {{ state.opened ? '닫기' : '열기' }}
        </span>
      </button>
    </div>
    <div ref="layer" :class="[$style['menu__layer'], customClassNames.layer]">
      <div :class="[$style['menu__contents'], customClassNames.contents]">
        <Simplebar
          data-simplebar-auto-hide="false"
          :class="[$style['menu__scroller'], customClassNames.scroller]"
        >
          <ul :class="[$style['menu__list'], customClassNames.list]">
            <li
              v-for="(item, i) in data"
              :key="i"
              :class="[$style['menu__item'], customClassNames.item]"
            >
              <RouterLink
                v-if="item.to"
                :to="item.to"
                :target="item.target"
                :class="[$style['menu__link'], customClassNames.link]"
                @click="close"
              >
                {{ item.text }}
              </RouterLink>
              <a
                v-else
                :href="item.url"
                :target="item.target || '_blank'"
                :class="[$style['menu__link'], customClassNames.link]"
                v-html="item.text"
              />
            </li>
          </ul>
        </Simplebar>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/DropDownMenu.scss';
</style>
