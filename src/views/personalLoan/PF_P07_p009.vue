<script>
// PF_P07_p009
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    NoticeText,
    BasicHr,
    UnitText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '스탁론',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="7" :current="6" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        대출입금 정보와 안내사항을 확인해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <BasicBox className="row-margin-container-medium">
        <div class="flex-box row-margin-item">
          <div class="flex-box__cell">
            <h3 class="text-body-1 font-weight-regular">실입금액</h3>
          </div>
          <div class="flex-box__cell flex-1">
            <UnitText rightUnit="원" align="right">1,960,000</UnitText>
          </div>
        </div>
        <NoticeText>
          신청금액 - 취급수수료 0% - (인지대x50%) = 실입금액
        </NoticeText>

        <BasicHr theme="quaternary" className="row-margin-contents" />

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>신청금액</KeyValueTitle>
            <KeyValueText>2,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>인지대</KeyValueTitle>
            <KeyValueText>0 원 (50% 당사부담)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>취급수수료</KeyValueTitle>
            <KeyValueText>40,000 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-contents">
        <h3 class="text-body-1 font-weight-medium row-margin-item-group">
          연장안내
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          해당 만기일 전까지 계좌평가금액이
          <span class="color-red">최저담보비율(+0.9%)</span>에 만기해당월 이자
          이상 있어야 하며, 위 조건을 충족하지 못 할 경우 상환정책에 따라
          익영업일에 상환조치를 통해 대출금 회수 후 계약이 해지됩니다.
        </p>
      </section>

      <section class="row-margin-contents">
        <h3 class="text-body-1 font-weight-medium row-margin-item-group">
          출금안내
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          대출금의 <span class="color-red">130%</span> 초과 금액에 대해서
          부분출금이 가능합니다. CD기 출금 및 계좌이체, 해당 증권사 영업점에서의
          창구 출금은 제한됩니다.
        </p>
      </section>

      <section class="row-margin-contents">
        <h3 class="text-body-1 font-weight-medium row-margin-item-group">
          주문매체
        </h3>
        <p class="text-body-3 color-gray-tertiary">HTS 온라인 주문</p>
      </section>

      <section class="row-margin-contents">
        <h3 class="text-body-1 font-weight-medium row-margin-item-group">
          유의사항
        </h3>

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
              담보비율이
              <span class="color-red">종가기준 최저유지담보비율(120%)</span
              >미만이면 <span class="color-red">대출금액만큼</span> 익일오전
              동시호가(오전 8:45)에 반대매매하여 대출금을 회수합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출금 상환 전까지
              <span class="color-red"
                >해당 증권계좌의 주식 출고, 입고가 정지됩니다.</span
              >
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              일부 종목 매매(관리,투자경고, 투자위험종목 등) 및 신용, 미수거래를
              할 수 없습니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <span class="color-red"
                >보유불가종목(권리락종목, 감자/합병종목, 관리종목,
                거래정지예정종목, 긴급매수보유금지) 보유시
                반대매매실행되오니</span
              >
              계좌운용규칙 확인바랍니다.
            </div>
          </li>
        </ul>
      </section>

      <div class="row-margin-container-medium">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell flex-1">
            <NoticeText>자세한 사항은 계좌운용규칙을 참고하십시오.</NoticeText>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <TextButton
              textSize="regular"
              theme="secondary"
              :underline="true"
              :block="true"
            >
              계좌운용규칙 다운로드
            </TextButton>
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'color-red' }">
          확인을 누르시면 대출금이 입금되며 입금 후에는 취소가 불가능하므로 이점
          유의하시기 바랍니다.
        </NoticeText>
      </div>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">취소</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p009.scss';
</style>
