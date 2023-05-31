<script>
import { computed, useCssModule, provide, reactive, ref, onMounted } from 'vue';
import Simplebar from 'simplebar-vue';

const defaultClassNames = () => ({
  wrap: '',
  head: '',
  body: '',
  bodyInner: '',
  bodyScroll: '',
  foot: '',
  bg: '',
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
    agreement: {
      Type: Boolean,
      default: false,
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
      stickyBar: {
        value: null,
      },
    });

    const head = ref(null);
    const body = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
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

      if (state.stickyBar.value && state.stickyBar.value.scrollBind) {
        state.stickyBar.value.scrollBind();
      }
    });

    provide('popupStyleModule', useCssModule());
    provide('popupLayout', {
      head: state.head,
      body: state.body,
      stickyBar: state.stickyBar,
    });

    return {
      head,
      body,
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
        [$style['popup--fix']]: fix,
        [$style['popup--agreement']]: agreement,
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
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layer/ModalPopup.scss';
</style>
