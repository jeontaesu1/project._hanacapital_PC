<script>
import {
  ref,
  reactive,
  computed,
  useCssModule,
  provide,
  onBeforeMount,
  onMounted,
  watch,
} from 'vue';

import UiTabList from '@/components/ui/tab/UiTabList.vue';

const defaultClassNames = () => ({
  wrap: '',
  list: '',
});

export default {
  components: {
    UiTabList,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    useUiTab: {
      Type: Boolean,
      default: false,
    },
    size: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const style = useCssModule();

    const state = reactive({
      useUiTab: {
        value: null,
      },
    });

    const scroller = ref(null);
    const list = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setComponent = computed(() => {
      const { useUiTab } = props;
      return useUiTab ? UiTabList : 'ul';
    });

    const scrollToActive = () => {
      const scrollerEl = scroller.value;
      const listEl = list.value.el || list.value;
      const active = (() => {
        if (list.value.el) {
          return listEl.getElementsByClassName('is-tab-opened');
        } else {
          return listEl.getElementsByClassName(
            style['filter-tab__item--active']
          );
        }
      })();
      const margin =
        listEl.getElementsByClassName(style['filter-tab__item'])[0].offsetLeft -
        listEl.offsetLeft;

      if (!active.length) return;

      const scrollLeft = active[0].offsetLeft - listEl.offsetLeft - margin;

      scrollerEl.scrollLeft = scrollLeft;
    };

    onBeforeMount(() => {
      state.useUiTab.value = props.useUiTab;
    });

    onMounted(() => {
      scrollToActive();
    });

    watch(
      () => props.useUiTab,
      (cur) => {
        state.useUiTab.value = cur;
      }
    );

    provide('filterTabStyleModule', style);
    provide('filterTab', {
      useUiTab: state.useUiTab,
    });

    return {
      scroller,
      list,
      customClassNames,
      setComponent,
      scrollToActive,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['filter-tab'],
      {
        [$style[`filter-tab--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <div :class="[$style['filter-tab__inner'], customClassNames.inner]">
      <div
        ref="scroller"
        :class="[$style['filter-tab__scroller'], customClassNames.inner]"
      >
        <component
          :is="setComponent"
          ref="list"
          :class="[$style['filter-tab__list'], customClassNames.list]"
        >
          <slot />
        </component>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/tab/FilterTab.scss';
</style>
