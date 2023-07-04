<script>
// PF_P07_p006
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
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    NoticeText,
    BasicHr,
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
          <StepProgress :total="7" :current="3" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">계약정보를 확인해 주세요</PageMainText>
    </PageHead>

    <div>
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">김하나</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <TextButton
              :underline="true"
              :block="true"
              :classNames="{
                wrap: 'color-gray-tertiary',
              }"
              >수정</TextButton
            >
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>주민등록번호</KeyValueTitle>
            <KeyValueText>951222-2******</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>2,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출일</KeyValueTitle>
            <KeyValueText>2022.12.22</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>6개월</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>초회결제일</KeyValueTitle>
            <KeyValueText>2022.12.23</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>매월 05일</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출금리</KeyValueTitle>
            <KeyValueText>1.2%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>만기일</KeyValueTitle>
            <KeyValueText>2023.05.23</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>인지대</KeyValueTitle>
            <KeyValueText>0원 (50%당사 부담)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>취급수수료(원)</KeyValueTitle>
            <KeyValueText>40,000원 (2%)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>자택전화번호</KeyValueTitle>
            <KeyValueText>02-1234-****</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>증권계좌번호</KeyValueTitle>
            <KeyValueText>123456789</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>핸드폰번호</KeyValueTitle>
            <KeyValueText>010-1234-****</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>직장전화번호</KeyValueTitle>
            <KeyValueText>02-123-1234</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicHr theme="tertiary" className="row-margin-contents" />

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>최대대출가능비율</KeyValueTitle>
            <KeyValueText>250%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>포트폴리오</KeyValueTitle>
            <KeyValueText>50%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>최저유지담보비율</KeyValueTitle>
            <KeyValueText>120%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>현금인출비율</KeyValueTitle>
            <KeyValueText>130%</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <div class="flex-box row-margin-contents-small">
        <div class="flex-box__cell flex-1">
          <NoticeText>매월 납입해야하는 금액이 궁금하신가요?</NoticeText>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <TextButton
            textSize="regular"
            theme="secondary"
            :underline="true"
            :block="true"
          >
            월납입금 조회
          </TextButton>
        </div>
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
