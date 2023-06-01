<script>
// My_P08_p006
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 연장 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        연장 견적 신청정보를 확인해 주세요
      </PageMainText>
    </PageHead>
    <BasicBox>
      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>상품</KeyValueTitle>
          <KeyValueText>렌터카</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>보증금</KeyValueTitle>
          <KeyValueText>50% (99,999,999 원)</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>렌트기간</KeyValueTitle>
          <KeyValueText>36개월</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>선납금</KeyValueTitle>
          <KeyValueText>50% (99,999,999 원)</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
