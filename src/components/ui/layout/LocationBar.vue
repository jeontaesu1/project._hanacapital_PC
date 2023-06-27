<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
  item: '',
  link: '',
  text: '',
});

export default {
  components: {
    RouterLink,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    data: {
      Type: Array,
      default() {
        return [
          {
            text: '홈',
            to: '/main/home',
          },
        ];
      },
    },
  },
  setup(props) {
    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
      },
    };

    const location = ref(null);
    const fixbar = ref(null);
    const fake = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

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
        store.ui.header.setLocationHeight(height);
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && location.value) {
        if (isBlocking.value) {
          location.value.style.marginLeft = `-${blockingScrollLeft.value}px`;
        } else {
          location.value.style.marginLeft = `-${html.scrollLeft}px`;
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
      store.ui.header.setLocationHeight(0);
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      store,
      location,
      fixbar,
      fake,
      customClassNames,
      isBlocking,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <div :class="$style['location-wrap']">
    <div
      ref="fixbar"
      :class="$style['location-wrap__fix']"
      :style="`top: ${store.ui.header.height}px; ${
        isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''
      }`"
    >
      <div ref="location" :class="[$style['location'], customClassNames.wrap]">
        <p :class="[$style['location__list'], customClassNames.list]">
          <span
            v-for="(item, i) in data"
            :key="i"
            :class="[$style['location__item'], customClassNames.item]"
          >
            <RouterLink
              v-if="item.to"
              :to="item.to"
              :class="[$style['location__link'], customClassNames.link]"
            >
              <span
                :class="[$style['location__text'], customClassNames.text]"
                >{{ item.text }}</span
              >
            </RouterLink>
            <span
              v-else
              :class="[$style['location__text'], customClassNames.text]"
              >{{ item.text }}</span
            >
          </span>
        </p>
      </div>
    </div>

    <div ref="fake" :class="$style['location-wrap__fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LocationBar.scss';
</style>
