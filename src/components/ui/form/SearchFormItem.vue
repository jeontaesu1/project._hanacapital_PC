<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  item: '',
  key: '',
  val: '',
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
  setup(props, { slots }) {
    const styleModule = inject('searchFormStyleModule');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const isKey = computed(() => {
      return Boolean(slots.key);
    });

    return {
      styleModule,
      customClassNames,
      isKey,
    };
  },
};
</script>

<template>
  <li :class="[styleModule['form__item'], customClassNames.item]">
    <div v-if="isKey" :class="[styleModule['form__key'], customClassNames.key]">
      <slot name="key" />
    </div>
    <div :class="[styleModule['form__val'], customClassNames.val]">
      <slot />
    </div>
  </li>
</template>
