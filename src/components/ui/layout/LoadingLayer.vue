<script>
// Common_P00_p001
import { reactive, computed, watch, nextTick } from 'vue';

import { useUiLoadingStore } from '@/stores/ui/loading';

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
  },
  setup(props) {
    let timer = null;

    const store = {
      ui: {
        loading: useUiLoadingStore(),
      },
    };

    const state = reactive({
      display: 'none',
      show: false,
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    watch(
      () => store.ui.loading.isShow,
      (cur) => {
        if (cur) {
          show();
        } else {
          hide();
        }
      }
    );

    const show = () => {
      clearTimeout(timer);
      state.display = 'block';

      nextTick(() => {
        timer = setTimeout(function () {
          state.show = true;
          clearTimeout(timer);
        }, 0);
      });
    };

    const hide = () => {
      clearTimeout(timer);
      state.show = false;

      nextTick(() => {
        timer = setTimeout(function () {
          state.display = 'none';
          clearTimeout(timer);
        }, 350);
      });
    };

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
      $style['loading'],
      {
        [$style['loading--show']]: state.show,
      },
      customClassNames.wrap,
    ]"
    :style="`display: ${state.display};`"
  >
    <div :class="[$style['loading__block'], customClassNames.wrap]">
      로딩바 (임시)
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LoadingLayer.scss';
</style>
