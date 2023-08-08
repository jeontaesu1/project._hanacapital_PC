<script>
import { computed, watch, provide, inject, useCssModule, onMounted } from 'vue';

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
    error: {
      Type: Boolean,
      default: false,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const $style = useCssModule();
    const formListItem = inject('formListItem', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    watch(
      () => props.error,
      (cur) => {
        if (formListItem && formListItem.error) {
          formListItem.error(cur);
        }
      }
    );

    onMounted(() => {
      if (formListItem && formListItem.error && props.error) {
        formListItem.error(true);
      }
    });

    provide('formInvalid', {
      messageClass: $style['invalid__message'],
      helpClass: $style['invalid__help'],
    });

    return {
      customClassNames,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['invalid'],
      {
        [$style['invalid--error']]: error,
        [$style['invalid--disabled']]: disabled,
      },
      customClassNames.wrap,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/FormInvalid.scss';
</style>
