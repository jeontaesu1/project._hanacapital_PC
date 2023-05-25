<script>
// Etc_P01_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>전화상담신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        고객님 감사합니다.<br />
        빠른 시일 내에 답변 드리겠습니다.<br />
        (상담가능시간 : 평일 09-18시)
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
