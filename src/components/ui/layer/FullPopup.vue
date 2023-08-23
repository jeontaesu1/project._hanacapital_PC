<script>
import {
  computed,
  useCssModule,
  provide,
  reactive,
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
} from 'vue';
import Simplebar from 'simplebar-vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  body: '',
  bodyInner: '',
  bodyScroll: '',
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
    bg: {
      Type: String,
      default: null,
    },
  },
  setup(props, { slots }) {
    const state = reactive({
      head: {
        value: null,
      },
      body: {
        value: null,
      },
      bodyScroll: {
        value: null,
      },
      slots: {},
    });

    const head = ref(null);
    const body = ref(null);
    const bodyScroll = ref(null);

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

    onMounted(() => {
      state.head.value = head;
      state.body.value = body;
      state.bodyScroll.value = bodyScroll;
    });

    onBeforeMount(() => {
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    onUpdated(() => {
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    provide('popupStyleModule', useCssModule());
    provide('popupLayout', {
      head: state.head,
      body: state.body,
      bodyScroll: state.bodyScroll,
    });

    return {
      head,
      body,
      bodyScroll,
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
      $style['popup'],
      {
        [$style[`popup--bg-${bg}`]]: bg,
      },
      customClassNames.wrap,
    ]"
  >
    <div
      v-if="isHead"
      ref="head"
      :class="[$style['popup__head'], customClassNames.head]"
    >
      <slot name="head" />
    </div>
    <div ref="body" :class="[$style['popup__body'], customClassNames.body]">
      <Simplebar
        ref="bodyScroll"
        data-simplebar-auto-hide="false"
        :class="[$style['popup__body-scroll'], customClassNames.bodyScroll]"
      >
        <div :class="[$style['popup__body-inner'], customClassNames.bodyInner]">
          <slot />
        </div>
      </Simplebar>
    </div>
    <div v-if="isFoot" :class="[$style['popup__foot'], customClassNames.foot]">
      <slot name="foot" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/FullPopup.scss';
</style>
