<script>
import { computed, inject, reactive, onBeforeMount, onUpdated } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  row: '',
  left: '',
  right: '',
  sub: '',
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
    const styleModule = inject('popupStyleModule');

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

    const isSub = computed(() => {
      return isSlot(state.slots.sub);
    });

    onBeforeMount(() => {
      state.slots.right = slots.right;
      state.slots.sub = slots.sub;
    });

    onUpdated(() => {
      state.slots.right = slots.right;
      state.slots.sub = slots.sub;
    });

    return {
      styleModule,
      customClassNames,
      isRight,
      isSub,
    };
  },
};
</script>

<template>
  <div :class="[styleModule['popup__header'], customClassNames.wrap]">
    <div :class="[styleModule['popup__header-row'], customClassNames.row]">
      <div :class="[styleModule['popup__header-left'], customClassNames.left]">
        <slot />
      </div>
      <div
        v-if="isRight"
        :class="[styleModule['popup__header-right'], customClassNames.right]"
      >
        <slot name="right" />
      </div>
    </div>
    <div
      v-if="isSub"
      :class="[styleModule['popup__header-sub'], customClassNames.sub]"
    >
      <slot name="sub" />
    </div>
  </div>
</template>
