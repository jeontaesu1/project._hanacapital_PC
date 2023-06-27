<script>
import LmBlogHeader from '@/layouts/lmBlog/LmBlogHeader.vue';
import ShortFooter from '@/layouts/ShortFooter.vue';

export default {
  components: {
    LmBlogHeader,
    ShortFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <LmBlogHeader />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <ShortFooter />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/lmBlog/LmBlogLayout.scss';
</style>
