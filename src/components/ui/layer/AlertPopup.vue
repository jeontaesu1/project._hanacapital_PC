<script>
import {
  computed,
  useCssModule,
  provide,
  reactive,
  onBeforeMount,
  onUpdated,
} from 'vue';

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
  },
  setup(props, { slots }) {
    const state = reactive({
      slots: {},
    });

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isSlotDefault = computed(() => {
      return isSlot(state.slots.default);
    });

    const isHead = computed(() => {
      return isSlot(state.slots.head);
    });

    const isFoot = computed(() => {
      return isSlot(state.slots.foot);
    });

    onBeforeMount(() => {
      state.slots.default = slots.default;
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    onUpdated(() => {
      state.slots.default = slots.default;
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    provide('popupStyleModule', useCssModule());

    return {
      customClassNames,
      isSlotDefault,
      isHead,
      isFoot,
    };
  },
};
</script>

<template>
  <div :class="[$style['popup'], customClassNames.wrap]">
    <div v-if="isHead" :class="[$style['popup__head'], customClassNames.head]">
      <slot name="head" />
    </div>
    <div
      v-if="isSlotDefault"
      :class="[$style['popup__body'], customClassNames.body]"
    >
      <slot />
    </div>
    <div v-if="isFoot" :class="[$style['popup__foot'], customClassNames.foot]">
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/AlertPopup.scss';
</style>
