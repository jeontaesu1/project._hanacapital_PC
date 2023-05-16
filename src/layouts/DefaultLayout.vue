<script>
import DefaultHeader from '@/layouts/DefaultHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter.vue';

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <DefaultHeader />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <DefaultFooter />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultLayout.scss';
</style>
