<script>
// My_P08_p028
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>만기후 구매 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>하나캐피탈을 이용해 주셔서 감사합니다.</IllustInfoText>
    </IllustInfo>

    <BasicBox className="row-margin-block-small row-margin-bottom-none">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-title-2 font-weight-medium">오토리스 07호3994</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>2018.10.29~2021.10.29</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>매수자정보</KeyValueTitle>
          <KeyValueText>김하나</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>2021.10.29</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>서류수령방법</KeyValueTitle>
          <KeyValueText>등기</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>이전방법</KeyValueTitle>
          <KeyValueText>직접 이전</KeyValueText>
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
