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
  bottom: '',
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

    const isBottom = computed(() => {
      return isSlot(state.slots.bottom);
    });

    onBeforeMount(() => {
      state.slots.bottom = slots.bottom;
    });

    onUpdated(() => {
      state.slots.bottom = slots.bottom;
    });

    provide('searchFormStyleModule', useCssModule());

    return {
      customClassNames,
      isBottom,
    };
  },
};
</script>

<template>
  <section :class="[$style['form'], customClassNames.wrap]">
    <slot />
    <div
      v-if="isBottom"
      :class="[$style['form__bottom'], customClassNames.bottom]"
    >
      <slot name="bottom" />
    </div>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/SearchForm.scss';
</style>
