<script>
// PF_P07_p010
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>스탁론 대출신청이 완료되었습니다</IllustInfoTitle>
    </IllustInfo>

    <BasicBox className="row-margin-block-small row-margin-bottom-none">
      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>신청금액</KeyValueTitle>
          <KeyValueText>2,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>입금일</KeyValueTitle>
          <KeyValueText>매월 05일</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>금융사</KeyValueTitle>
          <KeyValueText>하나증권</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>실입금액</KeyValueTitle>
          <KeyValueText>1,960,000 원</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
