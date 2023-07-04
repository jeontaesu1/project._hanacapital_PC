<script>
// My_p04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
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
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
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
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '근저당설정 조회/해지신청',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle
        >근저당설정 조회/해지 가능한 상품은 총
        <span class="color-green">42</span>건</PageTitle
      >
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
          상환이 종료된 계약 건에 한하여 조회/신청이 가능합니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          근저당해지 신청은 평일 오전 9시 ~ 오후 4시까지 접수 가능합니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <strong class="color-green font-weight-medium"
            >저당해지 비용 19,300원</strong
          >이 발생하며, 금액과 계좌번호를 문자로 발송해
          드립니다.(저당해지대행업체: 다코스)
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          저당해지 비용은 오후 5시까지 입금 시 당일 해지 처리되며, 이후 입금 시
          영업일 기준으로 해지 됩니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          담보대출, 건설기계 등 일부 상환은 홈페이지를 통한 근저당설정 해지
          신청이 불가능하며, 고객센터(<strong
            class="color-green font-weight-medium"
            >1800-1110</strong
          >)로 연락 바랍니다.
        </div>
      </li>
    </ul>

    <!-- Case : 근저당설정 조회 가능한 계약 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        근저당설정조회 가능한 계약이 없습니다.
      </p>
    </div>
    <!-- // Case : 근저당설정 조회 가능한 계약 없는 경우 -->

    <!-- Case : 근저당설정 조회 가능한 계약 있는 경우 -->
    <div>
      <ul class="reset-list">
        <!-- Case : 종료 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus size="large" :block="true"> 종료 </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>저당설정액</KeyValueTitle>
                <KeyValueText>17,220,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>을부번호</KeyValueTitle>
                <KeyValueText>482A-2021-143903</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KLAPC56LDNB2320</KeyValueText>
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
                <BasicButton size="regular">해지 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 종료 -->

        <!-- Case : 연체 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="nonary" size="large" :block="true">
                  연체
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>저당설정액</KeyValueTitle>
                <KeyValueText>17,220,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>을부번호</KeyValueTitle>
                <KeyValueText>482A-2021-143903</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KLAPC56LDNB2320</KeyValueText>
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
                <BasicButton size="regular">해지 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 연체 -->

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="nonary" size="large" :block="true">
                  연체
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>저당설정액</KeyValueTitle>
                <KeyValueText>17,220,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>을부번호</KeyValueTitle>
                <KeyValueText>482A-2021-143903</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KLAPC56LDNB2320</KeyValueText>
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
                <BasicButton size="regular">해지 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="nonary" size="large" :block="true">
                  연체
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>저당설정액</KeyValueTitle>
                <KeyValueText>17,220,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>을부번호</KeyValueTitle>
                <KeyValueText>482A-2021-143903</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KLAPC56LDNB2320</KeyValueText>
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
                <BasicButton size="regular">해지 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토할부 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="nonary" size="large" :block="true">
                  연체
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>저당설정액</KeyValueTitle>
                <KeyValueText>17,220,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>을부번호</KeyValueTitle>
                <KeyValueText>482A-2021-143903</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KLAPC56LDNB2320</KeyValueText>
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
                <BasicButton size="regular">해지 신청</BasicButton>
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
    <!-- // Case : 근저당설정 조회 가능한 계약 있는 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p04_p001.scss';
</style>
