<script>
// MI_P00_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    NavTab,
    NavTabButton,
    BasicButton,
    BasicHr,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    RoundStatus,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
      store.ui.header.setDepthActive(() => 'onlineBranch002');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
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
            text: '계약현황',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>계약현황</PageTitle>
    </PageHead>

    <NavTab>
      <!-- Case : 캐피탈 계약 있을 때 -->
      <NavTabButton tagName="button" type="button" :active="true">
        캐피탈 계약
      </NavTabButton>
      <!-- // Case : 캐피탈 계약 있을 때 -->

      <!-- Case : 팩토링 계약 있을 때 -->
      <NavTabButton tagName="button" type="button">팩토링 계약</NavTabButton>
      <!-- // Case : 팩토링 계약 있을 때 -->

      <NavTabButton tagName="button" type="button">종료된 계약</NavTabButton>
    </NavTab>

    <ul :class="$style['logs']">
      <!-- Case : 자동차금융 - 렌트 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>계약기간</KeyValueTitle>
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

      <!-- Case : 연체 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RoundStatus theme="nonary" size="large" :block="true">
                    연체
                  </RoundStatus>
                </div>
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>계약기간</KeyValueTitle>
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
      <!-- // Case : 연체 -->

      <!-- Case : 종료 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </div>
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 종료 -->

      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>계약기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>정비서비스</KeyValueTitle>
              <KeyValueText>프리미엄</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <!-- Case : 만기일 6개월 ~ 만기일 (단 채권상태가 기한이익상실인 경우 비활성화) -->
          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 180일 남았습니다. 만기안내장을 확인해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" :line="true"
                  >만기안내장</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </div>
          <!-- // Case : 만기일 6개월 ~ 만기일 (단 채권상태가 기한이익상실인 경우 비활성화) -->
        </div>
      </li>
      <!-- // Case : 자동차금융 - 렌트 -->

      <!-- Case : 자동차금융 - 리스[금융] -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[금융] 20고5678
              </h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <!-- Case : 만기일 D-3개월 ~ 2주 (단 채권상태가 기한이익상실인 경우 비활성화) -->
          <div
            :class="[
              $style['inline-alert'],
              $style['inline-alert--error'],
              'row-margin-contents',
            ]"
          >
            <p :class="$style['inline-alert__text']">
              계약만기일이 90일 남았습니다. 만기후처리를 등록해 주세요.
            </p>
          </div>

          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular" :line="true"
                  >만기안내장</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="regular">만기후처리</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
          <!-- // Case : 만기일 D-3개월 ~ 2주 (단 채권상태가 기한이익상실인 경우 비활성화) -->
        </div>
      </li>
      <!-- // Case : 자동차금융 - 리스[금융] -->

      <!-- Case : 자동차금융 - 리스[운용] -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">
                리스[운용] 20고5678
              </h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 자동차금융 - 리스[운용] -->

      <!-- Case : 자동차금융 - 오토론 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토론 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 자동차금융 - 오토론 -->

      <!-- Case : 자동차금융 - 오토론 종료 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">오토론 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </div>
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 자동차금융 - 오토론 종료 -->

      <!-- Case : 자동차금융 - 중고차론 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">중고차론 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                BMW 435d
              </p>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 자동차금융 - 중고차론 -->

      <!-- Case : 개인금융 - 신용대출 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">신용대출</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 개인금융 - 신용대출 -->

      <!-- Case : 개인금융 - 아파트담보대출 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">아파트담보대출</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 개인금융 - 아파트담보대출 -->

      <!-- Case : 개인금융 - 스탁론(키움증권) -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">스탁론(키움증권)</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <!-- Case : 계약 만기일 D-30 ~ D-1 까지 연장버튼 노출 && 5년 만기 대상자 연장 버튼 노출 없음 -->
          <div :class="[$style['logs__button'], 'row-margin-contents']">
            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">연장</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
          <!-- // Case : 계약 만기일 D-30 ~ D-1 까지 연장버튼 노출 && 5년 만기 대상자 연장 버튼 노출 없음 -->
        </div>
      </li>
      <!-- // Case : 개인금융 - 스탁론(키움증권) -->

      <!-- Case : 개인금융 - 담보대출 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">담보대출</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 개인금융 - 담보대출 -->

      <!-- Case : 개인금융 - 내구재 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">내구재</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 개인금융 - 내구재 -->

      <!-- Case : 기업금융 - 의료기리스 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">의료기리스</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 기업금융 - 의료기리스 -->

      <!-- Case : 기업금융 - 산업재/선박리스 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">산업재/선박리스</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 기업금융 - 산업재/선박리스 -->

      <!-- Case : 기업금융 - 건설상용금융 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">건설상용금융</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                L99999999999999
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원금균등상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 기업금융 - 건설상용금융 -->

      <!-- Case : 팩토링 - 할부 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">업체명</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                품목명
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 팩토링 - 할부 -->

      <!-- Case : 팩토링 - 할부 종료 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">업체명</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                품목명
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </div>
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>할부금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 팩토링 - 할부 종료 -->

      <!-- Case : 팩토링 - 렌탈 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">업체명</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                품목명
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
              <KeyValueText>
                <div class="color-green">6,265,200 원</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>월 렌탈료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 팩토링 - 렌탈 -->

      <!-- Case : 팩토링 - 렌탈 종료 -->
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-title-2 font-weight-medium">업체명</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                품목명
              </p>
            </div>
            <div :class="$style['logs__right']">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </div>
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents"
          />

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>렌탈기간</KeyValueTitle>
              <KeyValueText>12/36개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>월 렌탈료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>전화번호</KeyValueTitle>
              <KeyValueText>02-1234-6789</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </li>
      <!-- // Case : 팩토링 - 렌탈 종료 -->
    </ul>
    <!-- //Case : 캐피탈 계약 영역 -->

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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p002.scss';
</style>
