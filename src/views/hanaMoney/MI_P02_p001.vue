<script>
// MI_P02_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '하나머니',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>하나머니</PageTitle>
    </PageHead>

    <div :class="$style['image-view']">
      <img src="@/assets/images/contents/hanamoney-w.png" alt="" />
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/hanaMoney/MI_P02_p001.scss';
</style>
