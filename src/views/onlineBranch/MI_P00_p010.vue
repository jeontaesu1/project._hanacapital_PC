<script>
// MI_P00_p010
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
    LocationBar,
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
            text: '중도상환신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">중도상환신청을 진행해 주세요</PageMainText>
    </PageHead>

    <UiAccordion>
      <UiAccordionItem>
        <BasicBox :className="$style['application']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">
                중도상환신청 안내 및 유의사항
              </h3>
            </div>
            <div class="flex-box__cell">
              <UiAccordionOpener />
            </div>
          </div>
          <UiAccordionLayer>
            <div :class="$style['application-contents']">
              <section class="row-margin-contents-small">
                <h4
                  class="text-body-1 font-weight-medium row-margin-item-group"
                >
                  신청 가능 상품
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
                      할부 및 대출상품 (스탁론 포함)
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <span class="color-red"
                        >리스, 렌터카 상품은 홈페이지를 통한 중도상환신청이
                        불가능</span
                      >하며, 고객센터(1800-1110)로 연락 바랍니다.
                    </div>
                  </li>
                </ul>
              </section>
              <section class="row-margin-contents-small">
                <h4
                  class="text-body-1 font-weight-medium row-margin-item-group"
                >
                  신청 가능 시간
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
                      월 ~ 금요일 09:00 ~ 18:00 (스탁론은 08:30 ~ 15:30)까지
                      신청 가능합니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      토요일, 일요일, 공휴일 또는 계약의 결제일에는 신청이
                      불가합니다.
                    </div>
                  </li>
                </ul>
              </section>
              <section class="row-margin-contents-small">
                <h4
                  class="text-body-1 font-weight-medium row-margin-item-group"
                >
                  유의사항
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
                      중도상환시에는 상품에 따라 일정액의 “중도상환수수료” 가
                      발생합니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>
                        즉시출금은 “전자금융거래법”에 따라 “고객님의 명의로
                        인증된 자동이체계좌“에서만 출금이 가능합니다.
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
                            타인 명의 자동이체 계좌에서는 즉시출금이 불가합니다.
                          </div>
                        </li>
                        <li
                          :class="[$style['basic-list__item'], 'text-body-4']"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            자동이체 계좌의 잔고가 중도상환신청 금액보다 부족한
                            경우, 출금처리가 되지 않습니다.
                          </div>
                        </li>
                        <li
                          :class="[$style['basic-list__item'], 'text-body-4']"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            현재, “하나은행”만 즉시출금이 가능하며 타 은행
                            계좌는 즉시 출금이 불가능합니다.
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
                      가상계좌 입금 신청 시, 신청 일자에 따라 중복 출금이 발생할
                      수 있으며, 중복 출금되었을 경우 고객센터 (1800-1110)로
                      연락 바랍니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      대출원금잔액의 전액 상환 시, 담보물건이 있는 경우 담보물건
                      해지에 관한 사항은 고객센터(1800-1110)로 연락 바랍니다.
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      스탁론(하나금융투자) 전액상환 시,
                      <span class="color-red"
                        >대출계좌 내 미체결 내역이 있을 경우 약정해지가
                        불가능</span
                      >하니 반드시 주문 취소 후 중도상환을 신청하시기 바랍니다.
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
    </UiAccordion>

    <!-- Case : 중도상환신청이 가능한 계약 리스트가 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        중도상환신청이 가능한 계약이 없습니다.
      </p>
    </div>
    <!-- // Case : 중도상환신청이 가능한 계약 리스트가 없는 경우 -->

    <!-- Case : 중도상환신청이 가능한 계약 리스트가 있는 경우 -->
    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
        'row-margin-container-medium',
        'row-margin-bottom-none',
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          중도상환신청을 원하시는 계약을 선택하시면 다음 단계로 진행합니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          리스, 렌터카 등 일부 상품은 홈페이지를 통한 중도상환신청이 불가능하며,
          고객센터(1800-1110)로 연락 바랍니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          고객님께서 대출 실행 후 14일 이내에 중도상환을 하실 경우
          '대출계약철회권'에 해당 하실수도 있으며, 자세한 사항은 당사 홈페에지
          '금융소비자보호>대출계약철회 안내' 및 고객센터(1800-1110)에 문의하여
          주시기 바랍니다.
        </div>
      </li>
    </ul>
    <div class="row-margin-block-small row-margin-bottom-none">
      <ul class="reset-list">
        <li v-for="i in 10" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토리스 20고5678
                </h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  BMW 435d
                </p>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  L99999999999999
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary" size="large" :block="true">
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
    <!-- //Case : 중도상환신청이 가능한 계약 리스트가 있는 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p010.scss';
</style>
