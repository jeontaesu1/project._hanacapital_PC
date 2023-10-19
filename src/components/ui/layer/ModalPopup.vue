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
  outerBottom: '',
  bgBottom: '',
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
    fix: {
      Type: Boolean,
      default: false,
    },
    size: {
      Type: String,
      default: null,
    },
    line: {
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

    const isOuterBottom = computed(() => {
      return isSlot(state.slots.outerBottom);
    });

    const isBgBottom = computed(() => {
      return isSlot(state.slots.bgBottom);
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
      state.slots.outerBottom = slots.outerBottom;
      state.slots.bgBottom = slots.bgBottom;
      state.slots.head = slots.head;
      state.slots.foot = slots.foot;
    });

    onUpdated(() => {
      state.slots.outerBottom = slots.outerBottom;
      state.slots.bgBottom = slots.bgBottom;
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
      isOuterBottom,
      isBgBottom,
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
        [$style['popup--fix']]: fix,
        [$style[`popup--size-${size}`]]: size,
        [$style[`popup--line-${line}`]]: line,
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
    <div
      v-if="isBgBottom"
      :class="[$style['popup__bg-bottom'], customClassNames.bgBottom]"
    >
      <slot name="bgBottom" />
    </div>
    <div
      v-if="isOuterBottom"
      :class="[$style['popup__outer-bottom'], customClassNames.outerBottom]"
    >
      <slot name="outerBottom" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/ModalPopup.scss';
</style>
