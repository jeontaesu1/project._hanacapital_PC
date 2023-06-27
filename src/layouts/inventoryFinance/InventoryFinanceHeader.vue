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
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

import ImgLogo from '@/assets/images/common/logo-main.svg?component';

export default {
  components: {
    RouterLink,
    ImgLogo,
  },
  setup() {
    const nav = [
      {
        name: 'inventoryFinance001',
        text: '한도조회',
        to: '/inventory-finance/IF_P08_p001',
      },
      {
        name: 'inventoryFinance002',
        text: '대출신청',
        to: '/inventory-finance/IF_P02_p001',
      },
      {
        name: 'inventoryFinance003',
        text: '중도상환',
        to: '/inventory-finance/IF_P03_p001',
      },
      {
        name: 'inventoryFinance004',
        text: '만기연장',
        to: '/inventory-finance/IF_P04_p001',
      },
      {
        name: 'inventoryFinance005',
        text: '구비서류 추가등록',
        to: '/inventory-finance/IF_P05_p001',
      },
      {
        name: 'inventoryFinance006',
        text: '종료건 확인',
        to: '/inventory-finance/IF_P06_p001',
      },
    ];

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
    const siteMap = ref(null);

    const isBlocking = computed(() => {
      return store.ui.scrollBlock.isBlocking;
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    const blockingScrollLeft = computed(() => {
      return store.ui.scrollBlock.scrollLeft;
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

    const siteMapOpen = (e = {}) => {
      siteMap.value.layer.open(e.target);
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
      nav,
      store,
      header,
      fixbar,
      fake,
      siteMap,
      siteMapOpen,
      isBlocking,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <div :class="$style['top-bar']">
    <div
      ref="fixbar"
      :class="$style['top-bar__fix']"
      :style="`${isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''}`"
    >
      <div ref="header" :class="$style['header-wrap']">
        <header :class="$style['header']">
          <h1 :class="$style['header__logo']">
            <RouterLink to="/main/home" :class="$style['header__logo-link']">
              <ImgLogo />
              <span class="for-a11y">하나캐피탈</span>
            </RouterLink>
          </h1>

          <div :class="$style['nav']">
            <ul :class="$style['nav__list']">
              <li
                v-for="item in nav"
                :key="item.name"
                :class="[
                  $style['nav__item'],
                  {
                    [$style['nav__item--active']]:
                      store.ui.header.active === item.name,
                  },
                ]"
              >
                <RouterLink :to="item.to" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">{{ item.text }}</span>
                </RouterLink>
              </li>
            </ul>
          </div>

          <div :class="$style['etc']">
            <ul :class="$style['etc__list']">
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']"
                    ><strong class="color-green">김하나</strong>님</span
                  >
                </RouterLink>
              </li>
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']">비밀번호 변경</span>
                </RouterLink>
              </li>
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']">로그아웃</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>

    <div ref="fake" :class="$style['top-bar__fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/inventoryFinance/InventoryFinanceHeader.scss';
</style>
