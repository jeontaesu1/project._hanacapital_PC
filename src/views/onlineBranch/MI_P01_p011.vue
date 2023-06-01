<script>
// MI_P01_p011
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
  <PageContents>
    <PageHead>
      <PageTitle>
        하나캐피탈 회원탈퇴를 위해<br />
        본인인증이 필요합니다
      </PageTitle>
    </PageHead>

    // [공통 > 본인인증] 내용 노출
  </PageContents>
</template>
