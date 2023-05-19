<script>
export default {
  props: {
    className: {
      Type: String,
      default: null,
    },
    type: {
      Type: String,
      default: null,
    },
    theme: {
      Type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div
    :class="[
      $style['hr'],
      {
        [$style[`hr--type-${type}`]]: type,
        [$style[`hr--theme-${theme}`]]: theme,
      },
      className,
    ]"
  />
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/BasicHr.scss';
</style>
