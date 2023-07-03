<script>
// PF_P07_p012
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
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
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

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
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
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
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        연장 신청할 상품을 선택해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <ul class="reset-list">
        <li class="row-margin-item-regular">
          <ContentsButton>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  NH투자증권(유캔그린)
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus size="large" :block="true"> 미신청 </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출일</KeyValueTitle>
                <KeyValueText>2023.12.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>만기일</KeyValueTitle>
                <KeyValueText>2023.12.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>50,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>현재금리</KeyValueTitle>
                <KeyValueText>4.2%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>12개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>
        <li class="row-margin-item-regular">
          <ContentsButton>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  NH투자증권(유캔그린)
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary" size="large" :block="true">
                  신청완료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출일</KeyValueTitle>
                <KeyValueText>2023.12.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>만기일</KeyValueTitle>
                <KeyValueText>2023.12.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>50,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>현재금리</KeyValueTitle>
                <KeyValueText>4.2%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>12개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>
      </ul>

      <!-- Case : 상품 선택 시 노출 -->
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">만기현황</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">스탁론</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>현재금리</KeyValueTitle>
              <KeyValueText>4.2%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>최초실행일</KeyValueTitle>
              <KeyValueText>2022.12.22</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>5년만기도래일</KeyValueTitle>
              <KeyValueText>2022.12.22</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>2021.11.05</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>50,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>50,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>증권사</KeyValueTitle>
              <KeyValueText>NH투자증권(유캔그린)</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>증권계좌</KeyValueTitle>
              <KeyValueText>34084054022</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>당월청구이자</KeyValueTitle>
              <KeyValueText>178,360원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">연장청구내역</h3>

        <BasicBox>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>연장요청일</KeyValueTitle>
              <KeyValueText>2021.10.21</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>연장금리</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
                >4.2%</KeyValueText
              >
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>12개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>연장결과</KeyValueTitle>
              <KeyValueText
                :classNames="{ text: 'color-green font-weight-medium' }"
                >정상</KeyValueText
              >
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
      <!-- // Case : 상품 선택 시 노출 -->
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>연장신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
