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

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      formListItem,
      formInvalid,
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
      customClassNames.wrap,
    ]"
  >
    <slot />
  </p>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormHelpText.scss';
</style>
