<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  useCssModule,
  provide,
} from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

import HeaderButton from '@/components/ui/layout/HeaderButton.vue';

export default {
  components: {
    HeaderButton,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
      },
    };

    const header = ref(null);
    const fixbar = ref(null);
    const fake = ref(null);

    const isBlocking = computed(() => {
      return store.ui.scrollBlock.isBlocking;
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    const blockingScrollLeft = computed(() => {
      return store.ui.scrollBlock.scrollLeft;
    });

    const leftButtons = computed(() => {
      const defaultButtons = [];
      return store.ui.header.leftButtons || defaultButtons;
    });

    const rightButtons = computed(() => {
      const defaultButtons = ['push', 'menu'];
      return store.ui.header.rightButtons || defaultButtons;
    });

    const update = () => {
      if (fixbar.value && fake.value) {
        const height = fixbar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
        store.ui.header.setHeight(height);
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && header.value) {
        if (isBlocking.value) {
          header.value.style.marginLeft = `-${blockingScrollLeft.value}px`;
        } else {
          header.value.style.marginLeft = `-${html.scrollLeft}px`;
        }
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onBeforeUnmount(() => {
      store.ui.header.setHeight(0);
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    provide('headerStyleModule', useCssModule());

    return {
      store,
      header,
      fixbar,
      fake,
      isBlocking,
      scrollbarsWidth,
      leftButtons,
      rightButtons,
    };
  },
};
</script>

<template>
  <div :class="$style['header-wrap']">
    <div
      ref="fixbar"
      :class="$style['header-fix']"
      :style="`${isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''}`"
    >
      <header ref="header" :class="$style['header']">
        <div :class="$style['header__left']">
          <HeaderButton
            v-for="item in leftButtons"
            :key="`left_${typeof item === 'string' ? item : item.name}`"
            :type="typeof item === 'string' ? item : item.name"
            :onClick="item.onClick"
          />
        </div>
        <div :class="[$style['header__center']]">
          <h1 :class="$style['header__title']">
            {{ store.ui.header.title || '하나캐피탈' }}
          </h1>
        </div>
        <div :class="$style['header__right']">
          <HeaderButton
            v-for="item in rightButtons"
            :key="`right_${typeof item === 'string' ? item : item.name}`"
            :type="typeof item === 'string' ? item : item.name"
            :onClick="item.onClick"
          />
        </div>
      </header>
    </div>
    <div ref="fake" :class="$style['header-fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultHeader.scss';
</style>
