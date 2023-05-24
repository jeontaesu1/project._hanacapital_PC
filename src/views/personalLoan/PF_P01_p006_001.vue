<script>
// PF_P01_p006 대출신청완료
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    BasicHr,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>온라인약정이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        고객님의 소중한 정보를 확인 후 심사결과를 알려드리겠습니다.
      </IllustInfoText>
    </IllustInfo>

    <BasicHr theme="tertiary" />
  </PageContents>
</template>
