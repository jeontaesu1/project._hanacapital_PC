<script>
// MI_P00_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>자동이체 계좌 변경</PageTitle>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          결제계좌 변경 시 각 은행의 계좌 승인 작업으로 인해 1~3 영업일 소요 후
          변경됩니다.<br />
          (단, 하나은행의 경우 실시간 승인 작업으로 즉시 변경됩니다.)
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          스탁론은 변경이 불가하며 고객센터(1800-1110)로 연락 바랍니다.
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small">
      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토리스 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        BMW 435d
                      </div>
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
                <TextButton
                  :underline="true"
                  :block="true"
                  :classNames="{
                    wrap: 'color-gray-tertiary',
                  }"
                  >변경</TextButton
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>6,265,200 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>05일</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상태</KeyValueTitle>
                <KeyValueText>정상</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>자동이체계좌</KeyValueTitle>
                <KeyValueText>
                  신한<br />
                  123-123456-12345
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>최근변경일</KeyValueTitle>
                <KeyValueText>2022.12.06</KeyValueText>
              </KeyValueItem>
            </KeyValue>
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
@import '@/assets/scss/views/onlineBranch/MI_P00_p003.scss';
</style>
