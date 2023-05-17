<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  wrap: '',
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
  setup(props) {
    const formInvalid = inject('formInvalid', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      formInvalid,
    };
  },
};
</script>

<template>
  <p
    :class="[
      $style['invalid-message'],
      formInvalid.messageClass,
      customClassNames.wrap,
    ]"
  >
    <slot />
  </p>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormInvalidMessage.scss';
</style>
