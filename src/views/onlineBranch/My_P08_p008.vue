<script>
// My_P08_p008
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
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
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicHr,
    BasicBoxHeadRight,
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
        <PageTitle align="left">만기후처리 연장 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        연장 견적 신청정보를 확인해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <BasicBox>
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'text-title-2 color-black font-weight-medium',
              }"
            >
              매회 리스료(실납)
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">9,999,999</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicBox className="row-margin-contents">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">운용리스</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>종료후처리</KeyValueTitle>
            <KeyValueText>-</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>선납금</KeyValueTitle>
            <KeyValueText>50% (99,999,999 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>36개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>자동차세</KeyValueTitle>
            <KeyValueText>포함</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>약정주행거리</KeyValueTitle>
            <KeyValueText>연3만 km</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>50% (99,999,999 원)</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">예상 정산 비용</h3>

        <BasicBox className="row-margin-contents">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">예상비용(지급)</h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <UnitText rightUnit="원" align="right">9,999,999</UnitText>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>정산금액(a)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>기납입보증금(b)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>연장후보증금(c)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>연장후선납금(d)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>인지대(e)</KeyValueTitle>
              <KeyValueText>5,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>합계 (a-b+c+d+e)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
