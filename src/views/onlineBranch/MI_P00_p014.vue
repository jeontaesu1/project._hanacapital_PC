<script>
// MI_P00_p014
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
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
import NoticeText from '@/components/ui/text/NoticeText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
    NoticeText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
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

    return {
      store,
    };
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '지정운전자 등록',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">지정운전자 등록</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        지정운전자 등록을 원하시는 상품을 선택해 주세요
      </PageMainText>
    </PageHead>

    <UiAccordion>
      <UiAccordionItem>
        <BasicBox :className="$style['application']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">
                지정운전자 등록 안내 및 유의사항
              </h3>
            </div>
            <div class="flex-box__cell">
              <UiAccordionOpener />
            </div>
          </div>
          <UiAccordionLayer>
            <div :class="$style['application-contents']">
              <section class="row-margin-contents-small">
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--regular-margin'],
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      렌터카 차량의 운전자는 계약 시의 보험조건을 준수하여야
                      하며, 운전 경력이 1년이상이어야 하며, 유효한 운전면허증을
                      소지하여야 합니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <span class="color-red">
                        기본 운전자 외 2인에 한하여 추가로 지정운전자를 지정할
                        수 있습니다.<br />
                        (단, 법인 고객이 ‘임직원 운전자 한정운전 특약’ 가입하는
                        경우 제외)
                      </span>
                    </div>
                  </li>
                </ul>
              </section>
              <section class="row-margin-contents-small">
                <h4
                  class="text-body-1 font-weight-medium row-margin-item-group"
                >
                  기본운전자 범위
                </h4>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--regular-margin'],
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>
                        법인 고객이 임직원 운전자 한정특약에 미가입한 경우
                      </div>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--regular'],
                          'row-margin-item-medium',
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'text-body-4']"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            임원일 경우 직계가족 포함
                          </div>
                        </li>
                        <li
                          :class="[$style['basic-list__item'], 'text-body-4']"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인 소속직원(파견 및 파트타임 직원 포함) 외
                            지정운전자
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>법인고객이 임직원운전자 한정특약에 가입한 경우</div>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--regular'],
                          'row-margin-item-medium',
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'text-body-4']"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인 소속 임직원(파견 및 파트타임 직원 포함)에 한함
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      개인의 경우 배우자, 직계가족 및 보험조건을 준수한
                      지정운전자 2인<br />
                      (개인 사업자의 경우, 임직원 포함)
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      대리운전의 경우 종합보험(대인, 대물, 자손, 자차) 처리
                      가능한 자에 한함
                    </div>
                  </li>
                </ul>
                <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }"
                  >상세내용은 약관 제3조 및 계약서를 참고해 주세요.</NoticeText
                >
              </section>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
    </UiAccordion>

    <!-- Case : 지정운전자 등록이 가능한 계약 리스트가 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        지정운전자 등록 가능한 계약이 없습니다
      </p>
    </div>
    <!-- Case : 지정운전자 등록이 가능한 계약 리스트가 없는 경우 -->

    <!-- Case : 지정운전자 등록이 가능한 계약 리스트가 있는 경우 -->
    <div class="row-margin-container-medium row-margin-bottom-none">
      <ul class="reset-list">
        <li v-for="i in 10" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  렌터카 159호5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        팰리세이드 디젤 2
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
              <KeyValueItem>
                <KeyValueTitle>정기서비스</KeyValueTitle>
                <KeyValueText>프리미엄</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>만기일자</KeyValueTitle>
                <KeyValueText>2023.02.02</KeyValueText>
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
    </div>

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
    <!-- //Case : 지정운전자 등록이 가능한 계약 리스트가 있는 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p014.scss';
</style>
