<script>
// Member_P05_p006
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
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
            text: '회원가입',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">회원가입</PageTitle>
        <template v-slot:right>
          <StepProgress :total="2" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        앱에서 가입한 손님은<br />
        최초 1회 본인인증이 필요합니다.
      </PageMainText>
    </PageHead>

    // [공통 > 본인인증] 내용 노출
  </PageContents>
</template>
