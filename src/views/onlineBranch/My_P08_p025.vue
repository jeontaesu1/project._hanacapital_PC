<script>
// My_P08_p025
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBox,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="3" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">명의이전방법을 선택해 주세요</PageMainText>
    </PageHead>

    <section>
      <h3 class="text-title-1 row-margin-contents">명의이전방법</h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="My_P08_p025_type"
            id="My_P08_p025_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>직접이전</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="My_P08_p025_type" id="My_P08_p025_type_002">
            <BoxCheckLabel>이전대행</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">이전대행 안내</h3>

      <BasicBox>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>이전대행업체</KeyValueTitle>
            <KeyValueText>㈜다코스(1688-6112)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>이전대행비용</KeyValueTitle>
            <KeyValueText>오토리스 27,500원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <section class="row-margin-item-group">
          <h4
            class="text-body-1 color-gray font-weight-regular row-margin-item-group"
          >
            이전대행필요서류
          </h4>
          <BasicBox theme="tertiary">
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>법인사업자</KeyValueTitle>
                <KeyValueText>사업자등록증, 법인인감증명서</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>개인</KeyValueTitle>
                <KeyValueText>필요서류 無</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>개인사업자</KeyValueTitle>
                <KeyValueText>사업자등록증</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </BasicBox>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
