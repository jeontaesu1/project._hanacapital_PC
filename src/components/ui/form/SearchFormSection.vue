<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  section: '',
  head: '',
  body: '',
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

    const isHead = computed(() => {
      return Boolean(slots.head);
    });

    return {
      styleModule,
      customClassNames,
      isHead,
    };
  },
};
</script>

<template>
  <section :class="[styleModule['form__section'], customClassNames.section]">
    <div
      v-if="isHead"
      :class="[styleModule['form__section-head'], customClassNames.head]"
    >
      <slot name="head" />
    </div>
    <div :class="[styleModule['form__section-body'], customClassNames.body]">
      <slot />
    </div>
  </section>
</template>
