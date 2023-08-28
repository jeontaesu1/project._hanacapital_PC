<script>
// Common_P00_p001
import {
  reactive,
  computed,
  watch,
  nextTick,
  ref,
  onMounted,
  onBeforeUnmount,
} from 'vue';

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

    const loading = ref(null);

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

    onMounted(() => {
      const body = document.getElementsByTagName('body')[0];

      if (!loading.value.parentNode.matches('body')) {
        body.append(loading.value);
      }
    });

    onBeforeUnmount(() => {
      loading.value.remove();
    });

    return {
      state,
      loading,
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    ref="loading"
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
      <div :class="[$style['loading__dot'], $style['loading__dot--1']]"></div>
      <div :class="[$style['loading__dot'], $style['loading__dot--2']]"></div>
      <div :class="[$style['loading__dot'], $style['loading__dot--3']]"></div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LoadingLayer.scss';
</style>
