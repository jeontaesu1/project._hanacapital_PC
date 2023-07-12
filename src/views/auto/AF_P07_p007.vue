<script>
// AF_P07_p007
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    NoticeText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '오토승계',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">오토승계</PageTitle>
        <template v-slot:right>
          <StepProgress :total="6" :current="4" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        리스 승계 상세정보를 확인해 주세요
      </PageMainText>
      <PageSubText align="left">
        실제 차량을 운행하는 목적으로의 승계만 가능하며 신규로 리스계약을
        체결하는 절차와 동일하게 금융회사가 정한 심시기준에 따라 심사가
        이루어집니다.
      </PageSubText>
      <PageSubText
        align="left"
        :classNames="{
          wrap: 'row-margin-item-group color-green',
        }"
      >
        판매 목적을 위한 승계는 전액선납 승계만 가능합니다.
      </PageSubText>
    </PageHead>

    <section>
      <h3 class="text-title-1 row-margin-contents">리스 조건</h3>

      <BasicBox className="row-margin-contents-small">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">운용리스</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>월 리스료</KeyValueTitle>
            <KeyValueText>500,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>잔여기간</KeyValueTitle>
            <KeyValueText>00개월</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">승계 조건</h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="AF_P07_p007_type"
            id="AF_P07_p007_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>동일 조건 승계</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="AF_P07_p007_type" id="AF_P07_p007_type_002">
            <BoxCheckLabel>전액선납 승계</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <!-- Case : 동일 조건 승계 선택 시 노출 -->
      <div class="row-margin-contents-small">
        <NoticeText>
          현재 계약자의 이용 조건을 동일하게 승계합니다.
        </NoticeText>

        <section :class="[$style['notice-section'], 'row-margin-contents']">
          <h3 :class="$style['notice-section__title']">보험가입 안내</h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                양수인 명의로 자동차 보험을 가입합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                자차손해 가입은 필수이며, 질권설정금액 부족/불가 시
                보증금/선납금을 추가 납입할 수 있습니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <!-- //  Case : 동일 조건 승계 선택 시 노출 -->

      <!-- Case : 전액선납 승계 선택 시 노출 -->
      <div class="row-margin-contents-small">
        <div>
          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
            >심사서류가 간소화됩니다.</NoticeText
          >
          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
            전액선납 정산비용이 발생합니다.
          </NoticeText>
          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
            >정산서는 심사 승인 이후 발송됩니다.</NoticeText
          >
        </div>

        <section :class="[$style['notice-section'], 'row-margin-contents']">
          <h3 :class="$style['notice-section__title']">보험가입 안내</h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                양수인 명의로 자동차 보험을 가입해 주세요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                책임보험 가입 가능합니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <!-- //  Case : 전액선납 승계 선택 시 노출 -->
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>승계 신청하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p007.scss';
</style>
