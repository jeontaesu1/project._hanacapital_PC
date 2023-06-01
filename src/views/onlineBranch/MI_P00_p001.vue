<script>
// MI_P00_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    UnitText,

    ImgMainSample,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle>
          김하나님이 보유하신 계약은 총
          <span class="color-green">42</span>건 입니다
        </PageTitle>
      </PageHeadRow>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          하나캐피탈과 제휴된 렌탈(할부)사와의 계약입니다.
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수 있습니다.
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'text-body-3',
          'font-weight-regular',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          자세한 내용은 각 렌탈(할부)사로 문의 부탁드립니다.
        </div>
      </li>
    </ul>
    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <UnitText size="large" rightUnit="원" align="left">400,000</UnitText>
          <div class="text-body-3 color-gray-tertiary">당월 결제예정금액</div>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight
          ><BasicButton inline="true" size="small" :line="true"
            >상세보기</BasicButton
          ></BasicBoxHeadRight
        >
      </BasicBoxHead>
      // contents
    </BasicBox>

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><ImgMainSample /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__text']">
                결제예정금액의 자세한 내역이 궁금하시다면
              </div>
              <div :class="$style['icon-list__title']">온라인청구서</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <div class="row-margin-block row-margin-top-none">
      <ul class="reset-list">
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  벤츠 S-Class 세단 가솔린 3.0 S350 Long 자동
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>현재금리</KeyValueTitle>
                <KeyValueText>4.50%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>월 납입금</KeyValueTitle>
                <KeyValueText>324,440 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>4,820,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>

      <!-- Case : 첫번째 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p001.scss';
</style>
