<script>
import { computed, reactive, onBeforeMount, onUpdated } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  body: '',
  foot: '',
});

const isSlot = (slot) => {
  if (!slot || typeof slot !== 'function') return false;

  const items = slot();
  let vIfLength = 0;

  items.forEach((item) => item.children === 'v-if' && vIfLength++);

  return items.length !== vIfLength;
};

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    size: {
      Type: String,
      default: null,
    },
  },
  setup(props, { slots }) {
    const state = reactive({
      slots: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isHead = computed(() => {
      return isSlot(state.slots.head);
    });

    const isFoot = computed(() => {
      return isSlot(state.slots.foot);
    });

    onBeforeMount(() => {
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    onUpdated(() => {
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    return {
      customClassNames,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['page-contents'],
      {
        [$style[`page-contents--size-${size}`]]: size,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-if="isHead"
      :class="[$style['page-contents__head'], customClassNames.head]"
    >
      <slot name="head" />
    </div>
    <div :class="[$style['page-contents__body'], customClassNames.body]">
      <slot />
    </div>
    <div
      v-if="isFoot"
      :class="[$style['page-contents__foot'], customClassNames.foot]"
    >
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/PageContents.scss';
</style>
