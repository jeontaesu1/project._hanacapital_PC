<script>
// MI_P00_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
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
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

import IconBill from '@/assets/images/icon/bill.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    LocationBar,
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
    UnitText,
    RoundStatus,
    TextButton,
    BasicBanner,
    IconBill,
    IconLink,
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
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle>
          김하나님이 보유하신 계약은 총
          <span class="color-green">3</span>건 입니다
        </PageTitle>
      </PageHeadRow>
    </PageHead>

    <div>
      <!-- Case : 파트너사 양도계약(팩토링) 보유 -->
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
          'row-margin-container-medium',
        ]"
      >
        <!-- Case : 캐피탈 계약 + 파트너사 양도계약(팩토링) 보유 -->
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            렌탈/할부채권 양도계약은 총 금액에 포함되지 않습니다.
          </div>
        </li>
        <!-- // Case : 캐피탈 계약 + 파트너사 양도계약(팩토링) 보유 -->
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나캐피탈과 제휴된 렌탈(할부)사와의 계약입니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기간 및 잔액의 경우, 입금반영 스케줄에 따라 실제와 상이할 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            자세한 내용은 각 렌탈(할부)사로 문의 부탁드립니다.
          </div>
        </li>
      </ul>
      <!-- // Case : 파트너사 양도계약(팩토링) 보유 -->

      <!-- Case : 캐피탈 계약 보유 - 총 남은 원금 있는 경우 -->
      <BasicBox className="row-margin-container-medium">
        <div class="flex-box">
          <div class="flex-1">
            <UnitText size="large" rightUnit="원" align="left">
              2,449,160
            </UnitText>
            <div class="text-body-1 color-gray-secondary">
              당월 결제예정금액
            </div>
          </div>
          <div class="flex-cell">
            <BasicButton size="small" :line="true">상세보기</BasicButton>
          </div>
        </div>
        <BasicHr theme="quaternary" className="row-margin-contents" />
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>총 남은 원금</KeyValueTitle>
            <KeyValueText>
              <strong class="font-weight-medium">2,449,160 원</strong>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <!-- // Case : 캐피탈 계약 보유 - 총 남은 원금 있는 경우 -->

      <!-- Case : 캐피탈 계약 보유 - 총 남은 원금 없는 경우 -->
      <BasicBox className="row-margin-container-medium">
        <div class="flex-box">
          <div class="flex-1">
            <UnitText size="large" rightUnit="원" align="left">
              2,449,160
            </UnitText>
            <div class="text-body-1 color-gray-secondary">
              당월 결제예정금액
            </div>
          </div>
          <div class="flex-cell">
            <BasicButton size="small" :line="true">상세보기</BasicButton>
          </div>
        </div>
      </BasicBox>
      <!-- // Case : 캐피탈 계약 보유 - 총 남은 원금 없는 경우 -->

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconBill /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">
                  결제예정금액의 자세한 내역이 궁금하시다면
                </span>
                <span :class="$style['icon-list__title']">온라인청구서</span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Case : 마케팅 동의여부, 대출 여부 확인 -->
      <BasicBox className="row-margin-block-small">
        <p class="text-title-2 font-weight-medium row-margin-contents">
          고객님께서는 <span class="color-green">우수고객</span>으로
          <span class="color-green">추가 신용대출</span>이 가능합니다!
        </p>
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출상담신청은 고객님의 개인신용평점에 영향을 주지 않습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
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
      <!-- // Case : 마케팅 동의여부, 대출 여부 확인 -->
    </div>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-1">계약 현황 리스트</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton
            iconSize="medium"
            textSize="medium"
            :block="true"
            :classNames="{ wrap: 'color-gray-tertiary' }"
            tagName="RouterLink"
            to=""
          >
            더보기
            <template v-slot:rightIcon>
              <IconLink />
            </template>
          </TextButton>
        </div>
      </div>

      <ul class="reset-list">
        <li class="row-margin-contents-small">
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
            </BasicBoxHead>

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
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>05일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>12/36</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-contents-small">
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
                <RoundStatus theme="nonary" size="large" :block="true">
                  연체
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

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
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>05일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>12/36</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-contents-small">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">현대렌탈</h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        품목명이 노출됩니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>월 납입금</KeyValueTitle>
                <KeyValueText>
                  <div class="color-green">6,265,200 원</div>
                </KeyValueText>
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
          </BasicBox>
        </li>
      </ul>
    </section>

    <!-- Case : 법인, 멤버십가입 유무 확인 -->
    <div class="row-margin-block">
      <!-- DD : 하드 코딩 배너 -->
      <BasicBanner
        tagName="RouterLink"
        to="/hana-money/MI_P02_p002"
        thumb="/images/banner/banner-money-up.png"
      >
        <p class="text-body-2 color-gray-tertiary row-margin-mini">
          하나금융그룹의 생활금융플랫폼!<br />
        </p>
        <p class="text-title-2 font-weight-medium">하나머니 가입하기</p>
      </BasicBanner>
      <!-- // DD : 하드 코딩 배너 -->
    </div>
    <!-- // Case : 법인, 멤버십가입 유무 확인 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p001.scss';
</style>
