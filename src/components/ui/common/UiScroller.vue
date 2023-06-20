<script>
import { computed, ref } from 'vue';
import Simplebar from 'simplebar-vue';

const defaultClassNames = () => ({
  wrap: '',
  inner: '',
});

export default {
  components: {
    Simplebar,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const scroller = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      scroller,
      customClassNames,
    };
  },
};
</script>

<template>
  <Simplebar
    ref="scroller"
    data-simplebar-auto-hide="false"
    :class="[$style['scroller'], customClassNames.wrap]"
  >
    <div :class="[$style['scroller__inner'], customClassNames.inner]">
      <slot />
    </div>
  </Simplebar>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/UiScroller.scss';
</style>
