<script>
import LmBlogPersonalHeader from '@/layouts/lmBlogPersonal/LmBlogPersonalHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter.vue';

export default {
  components: {
    LmBlogPersonalHeader,
    DefaultFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <LmBlogPersonalHeader />
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
@import '@/assets/scss/layouts/lmBlogPersonal/LmBlogPersonalLayout.scss';
</style>
