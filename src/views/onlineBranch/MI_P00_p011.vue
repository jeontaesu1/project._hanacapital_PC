<script>
// MI_P00_p011
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">중도상환신청을 진행해 주세요</PageMainText>
    </PageHead>

    <section>
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                </li>
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus
              theme="secondary"
              size="large"
              :classNames="{ wrap: 'display-block' }"
            >
              정상
            </RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>6,265,200 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>이용기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p011.scss';
</style>
