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
    const formListItem = inject('formListItem', {});
    const formInvalid = inject('formInvalid', {});
    const basicTextarea = inject('basicTextarea', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      formListItem,
      formInvalid,
      basicTextarea,
    };
  },
};
</script>

<template>
  <p
    :class="[
      $style['help-message'],
      formListItem.helpClass,
      formInvalid.helpClass,
      basicTextarea.helpClass,
      customClassNames.wrap,
    ]"
  >
    <slot />
  </p>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormHelpText.scss';
</style>
