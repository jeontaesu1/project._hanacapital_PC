<script>
// My_P05_p013
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
      <!-- Case : 서류 등록 실패 시 노출 -->
      <IllustObject type="fail" />
      <IllustInfoTitle>서류등록에 실패하였습니다</IllustInfoTitle>
      <!-- // Case : 서류 등록 실패 시 노출 -->

      <!-- Case : 서류 등록 실패 시 노출 -->
      <IllustObject type="complete" />
      <IllustInfoTitle>서류등록이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        고객님 감사합니다.<br />
        접수하신 서류를 확인하여 빠른 시일내에 답변 드리겠습니다.<br />
        (단, 토요일 및 공휴일에 신청하신 경우 연락이 지연될 수 있으니
        양해바랍니다.)
      </IllustInfoText>
      <!-- // Case : 서류 등록 실패 시 노출 -->
    </IllustInfo>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true">서류등록 추가</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
