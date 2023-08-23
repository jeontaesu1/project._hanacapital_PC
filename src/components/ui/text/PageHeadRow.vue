<script>
import { computed, reactive, onBeforeMount, onUpdated } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  left: '',
  right: '',
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
  },
  setup(props, { slots }) {
    const state = reactive({
      slots: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return isSlot(state.slots.right);
    });

    onBeforeMount(() => {
      state.slots.right = slots.right;
    });

    onUpdated(() => {
      state.slots.right = slots.right;
    });

    return {
      customClassNames,
      isRight,
    };
  },
};
</script>

<template>
  <div :class="[$style['page-head-row'], customClassNames.wrap]">
    <div :class="[$style['page-head-row__left'], customClassNames.left]">
      <slot />
    </div>
    <div
      v-if="isRight"
      :class="[$style['page-head-row__right'], customClassNames.right]"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/text/PageHeadRow.scss';
</style>
