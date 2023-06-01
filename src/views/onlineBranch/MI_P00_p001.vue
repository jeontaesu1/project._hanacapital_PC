<script>
// MI_P00_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
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
    BasicBanner,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    UnitText,
    RoundStatus,

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
    <section>
      <!-- case : 팩토링만 보유 -->
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
          'row-margin-container-medium',
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
            기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수
            있습니다.
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
      <!-- //case : 팩토링만 보유 -->

      <!-- case : 캐피탈 계약+파트너사 양도계약 보유 -->
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
          'row-margin-container-medium',
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
            기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수
            있습니다.
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
      <!-- //case : 캐피탈 계약+파트너사 양도계약 보유 -->

      <!-- case : 
      캐피탈 계약만 보유,
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      캐피탈 계약+파트너사 양도계약 보유 
       -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <UnitText size="large" rightUnit="원" align="left"
              >400,000</UnitText
            >
            <div class="text-body-3 color-gray-tertiary">당월 결제예정금액</div>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight
            ><BasicButton inline="true" size="small" :line="true"
              >상세보기</BasicButton
            ></BasicBoxHeadRight
          >
        </BasicBoxHead>
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>총 남은 원금</KeyValueTitle>
            <KeyValueText class="font-weight-medium">
              2,449,160 원
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <!-- // case : 
      캐피탈 계약만 보유,
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      캐피탈 계약+파트너사 양도계약 보유 
       -->

      <div
        :class="[
          $style['icon-list'],
          'row-margin-container-medium',
          'row-margin-bottom-none',
        ]"
      >
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

      <!-- case : 
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      캐피탈 계약+파트너사 양도계약 보유 
       -->
      <BasicBox class="row-margin-block-small row-margin-bottom-none">
        <p class="row-margin-contents text-title-2 font-weight-medium">
          고객님께서는 <span class="color-green">우수고객</span>으로
          <span class="color-green">추가 신용대출</span>이 가능합니다!
        </p>
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출상담신청은 고객님의 개인신용평점에 영향을 주지 않습니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출상담신청이 대출 실행을 보장하는 것은 아니며 고객님의 현재
              신용도에 따라 대출조건이 변경될 수 있습니다.
            </div>
          </li>
        </ul>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <ButtonListItem>
            <BasicButton size="small">추가대출 상담신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </BasicBox>
      <!-- //case : 
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      캐피탈 계약+파트너사 양도계약 보유 
       -->
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-title-1 row-margin-contents">계약 현황 리스트</h3>

      <div class="row-margin-block row-margin-top-none">
        <ul :class="$style['logs']">
          <li :class="[$style['logs__item'], 'row-margin-contents-small']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
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
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents"
              />

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText class="color-green">6,265,200 원</KeyValueText>
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
            </div>
          </li>
          <li :class="[$style['logs__item'], 'row-margin-contents-small']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
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
                </div>
                <RoundStatus
                  theme="nonary"
                  size="large"
                  :classNames="{ wrap: 'display-block' }"
                >
                  연체
                </RoundStatus>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents"
              />

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText class="color-green">6,265,200 원</KeyValueText>
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
            </div>
          </li>

          <li :class="[$style['logs__item'], 'row-margin-contents-small']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
                  <p
                    class="text-body-3 color-gray-tertiary row-margin-item-small"
                  >
                    품목명이 노출됩니다.
                  </p>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents"
              />

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>월 납입금</KeyValueTitle>
                  <KeyValueText class="color-green">6,265,200 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>렌탈잔액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>렌탈기간</KeyValueTitle>
                  <KeyValueText>12/36개월</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>전화번호</KeyValueTitle>
                  <KeyValueText>02-1234-6789</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
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

      <!-- case : 
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      팩토링만 보유,
      캐피탈 계약+파트너사 양도계약 보유 
       -->
      <BasicBanner thumb="/images/_dummy/banner-money-up.png" @click="() => {}">
        <p class="text-body-2 color-gray-tertiary row-margin-mini">
          하나금융그룹의 생활금융플랫폼!<br />
        </p>
        <div class="text-title-2 font-weight-medium">다이렉트 장기렌터카</div>
      </BasicBanner>
      <!-- //case : 
      캐피탈 계약만 보유_추가대출 상담신청, 배너 노출,
      팩토링만 보유,
      캐피탈 계약+파트너사 양도계약 보유 
       -->
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p001.scss';
</style>
