<script>
import { computed, useCssModule, provide, reactive, ref, onMounted } from 'vue';
import Simplebar from 'simplebar-vue';

const defaultClassNames = () => ({
  wrap: '',
  outerBottom: '',
  head: '',
  body: '',
  bodyInner: '',
  bodyScroll: '',
  foot: '',
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
  },
  setup(props, context) {
    const state = reactive({
      head: {
        value: null,
      },
      body: {
        value: null,
      },
    });

    const head = ref(null);
    const body = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isOuterBottom = computed(() => {
      return Boolean(context.slots.outerBottom);
    });

    const isHead = computed(() => {
      return Boolean(context.slots.head);
    });

    const isFoot = computed(() => {
      return Boolean(context.slots.foot);
    });

    onMounted(() => {
      state.head.value = head;
      state.body.value = body;
    });

    provide('popupStyleModule', useCssModule());

    return {
      head,
      body,
      customClassNames,
      isOuterBottom,
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
