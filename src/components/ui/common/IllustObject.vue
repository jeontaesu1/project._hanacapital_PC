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
    type: {
      Type: String,
      default: null,
    },
  },
  setup(props) {
    const illustInfoStyleModule = inject('illustInfoStyleModule', {});

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      customClassNames,
      illustInfoStyleModule,
    };
  },
};
</script>

<template>
  <div
    :class="[
      $style['illust-object'],
      {
        [$style[`illust-object--type-${type}`]]: type,
      },
      illustInfoStyleModule['illust-info__object'],
      customClassNames.wrap,
    ]"
  />
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustObject.scss';
</style>
