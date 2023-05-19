<script>
export default {
  props: {
    className: {
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
      $style['box'],
      {
        [$style[`box--theme-${theme}`]]: theme,
      },
      className,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/BasicBox.scss';
</style>
