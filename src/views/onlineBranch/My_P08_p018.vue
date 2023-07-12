<script>
// My_P08_p018
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    NoticeText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
            text: '만기후처리',
          },
          {
            text: '구매 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 예상 비용을 확인해 주세요</PageMainText>
    </PageHead>

    <BasicBox>
      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>2023.01.05</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>최종결제일자</KeyValueTitle>
          <KeyValueText>2023.01.05</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">구매 예상 정산 비용</h3>

      <BasicBox className="row-margin-contents-small">
        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-title-2',
            }"
          >
            <KeyValueTitle
              :classNames="{
                title: 'color-black font-weight-medium',
              }"
            >
              예상비용(입금/지급)
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">99,999,999</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicHr theme="quaternary" className="row-margin-contents" />

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>제세금(a)</KeyValueTitle>
            <KeyValueText>0 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>보증금(b)</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>잔존가치(c)</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-contents"
        />
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>합계 (a-b+c)</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <NoticeText>
        정산금액은 (만기일자) 기준으로 기준일자에 따라 변경될 수 있습니다.
      </NoticeText>
    </section>

    <section>
      <h3 class="text-title-1 row-margin-contents">
        세금계산서 발행 금액(잔존가치)
      </h3>

      <BasicBox className="row-margin-contents-small">
        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-title-2',
            }"
          >
            <KeyValueTitle
              :classNames="{
                title: 'color-black font-weight-medium',
              }"
            >
              잔존가치
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">99,999,999</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>구매신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
