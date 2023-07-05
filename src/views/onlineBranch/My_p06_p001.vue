<script>
// My_p06_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
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
    PaginationNav,
    PaginationNavArrow,
    PaginationNavNumber,
    PaginationNavEllipsis,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '청약철회권 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>
        청약철회권 신청 가능한 상품은 총
        <span class="color-green">0</span>건
      </PageTitle>
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
          금융소비자 보호를 위해 대출 계약 후, 14일 동안 불이익 없이 청약 탈퇴할
          수 있습니다. 대출 실행일 다음날부터 14일을 초과한 경우 철약 철회가
          불가합니다. (14일째가 휴일인 경우 다음 영업일까지 가능)
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          할부금융/시설대여/연불판매 상품의 경우 청약 철회가 불가합니다. (재화를
          제공받지 않은 경우, 철회 가능)
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          청약철회로 안내되는 상환 금액은 신청일 기준이므로 신청일 이후에는
          재신청을 하셔야합니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          5영업일 이내 대출기록이 삭제됩니다.
        </div>
      </li>
    </ul>

    <!-- Case : 보유 상품이 없는 경우 노출 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">현재 보유하고 계신 상품이 없습니다.</p>
    </div>
    <!-- // Case : 보유 상품이 없는 경우 노출 -->

    <!-- Case : 신청 가능 상품이 없는 경우 노출 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        현재 금리인하가 가능한 상품이 없습니다.
      </p>
    </div>
    <!-- // Case : 신청 가능 상품이 없는 경우 노출 -->

    <!-- Case : 보유 상품이 있는 경우 노출 -->
    <div class="row-margin-block-small">
      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">소비자신용대출</h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  L99999999999999
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>23,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>12/36</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>23,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>05일</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>6,265,200 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText>원리금균등분할상환</KeyValueText>
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
                <BasicButton size="regular">철회 신청</BasicButton>
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
    <!-- // Case : 보유 상품이 있는 경우 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p06_p001.scss';
</style>
