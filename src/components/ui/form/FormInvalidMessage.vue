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
    const basicTextarea = inject('basicTextarea', {});
    const simpleInput = inject('simpleInput', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      formInvalid,
      basicTextarea,
      simpleInput,
    };
  },
};
</script>

<template>
  <p
    :class="[
      $style['invalid-message'],
      formInvalid.messageClass,
      basicTextarea.invalidClass,
      simpleInput.invalidClass,
      customClassNames.wrap,
    ]"
  >
    <slot />
  </p>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormInvalidMessage.scss';
</style>
