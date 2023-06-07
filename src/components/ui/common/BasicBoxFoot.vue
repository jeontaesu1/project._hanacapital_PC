<script>
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
    align: {
      Type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div :class="[$style['box-foot'], classNames.wrap]">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/BasicBoxFoot.scss';
</style>
