<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
  row: '',
  left: '',
  right: '',
  sub: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props, context) {
    const styleModule = inject('popupStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isRight = computed(() => {
      return Boolean(context.slots.right);
    });

    const isSub = computed(() => {
      return Boolean(context.slots.sub);
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
