<script>
// Member_P03_p001
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
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '회원관리',
          },
          {
            text: '아이디 찾기',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>
        가입여부 확인을 위해<br />
        본인확인이 필요합니다
      </PageTitle>
    </PageHead>

    // [공통 > 본인인증] 내용 노출
  </PageContents>
</template>
