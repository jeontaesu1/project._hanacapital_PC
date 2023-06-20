<script>
// MI_P02_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>하나머니</PageTitle>
    </PageHead>

    <div :class="$style['image-view']">
      <img
        src="@/assets/images/_dummy/box-detail-large.png"
        alt="샘플 이미지"
      />
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/hanaMoney/MI_P02_p001.scss';
</style>
