<script>
// My_P08_p027
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBox,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicDatepicker,
    InputBlock,
    InputBlockCell,
    NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      dateError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
      state,
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
            text: '만기후처리',
          },
          {
            text: '구매 신청',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="4" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 정보를 확인해 주세요</PageMainText>
    </PageHead>

    <BasicBox>
      <KeyValue>
        <KeyValueItem>
          <KeyValueTitle>이전서류발송예정일자</KeyValueTitle>
          <KeyValueText>2023.01.10</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <section class="row-margin-block-small row-margin-bottom-none">
      <div class="row-margin-contents">
        <h3 class="text-title-1 row-margin-small">이전대행 안내</h3>
        <p class="text-body-1 font-weight-light color-gray-secondary">
          2023.01.10 이후 순차적으로 이전대행 안내 연락 드립니다.
        </p>
      </div>

      <BasicBox>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>이전대행업체</KeyValueTitle>
            <KeyValueText>㈜다코스(1688-6112)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>이전대행비용</KeyValueTitle>
            <KeyValueText>오토리스 27,500원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <section class="row-margin-item-group">
          <h4
            class="text-body-1 color-gray font-weight-regular row-margin-item-group"
          >
            이전대행필요서류
          </h4>
          <BasicBox theme="tertiary">
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>법인사업자</KeyValueTitle>
                <KeyValueText>사업자등록증, 법인인감증명서</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>개인</KeyValueTitle>
                <KeyValueText>필요서류 無</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>개인사업자</KeyValueTitle>
                <KeyValueText>사업자등록증</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </BasicBox>
    </section>

    <section class="row-margin-block row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">정산 정보</h3>

      <!-- Case : 정산금액이 +인 경우 노출 -->
      <div>
        <BasicBox>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>정산금액</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>입금계좌번호</KeyValueTitle>
              <KeyValueText>
                하나<br />
                21556-412-94556
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem
            titleText="입금예약일자"
            target="#My_P08_p020_dateButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="입금예약일자"
                    id="My_P08_p020_date"
                    buttonId="My_P08_p020_dateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
          차량번호 혹은 계약자명으로 입금 부탁드립니다.
        </NoticeText>
      </div>
      <!-- // Case : 정산금액이 +인 경우 노출 -->

      <!-- Case : 정산금액이 -인 경우 노출 -->
      <div>
        <BasicBox>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>정산금액</KeyValueTitle>
              <KeyValueText>-99,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>환불예정일자</KeyValueTitle>
              <KeyValueText>2023.01.10</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
          환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다.
        </NoticeText>
      </div>
      <!-- //  Case : 정산금액이 -인 경우 노출 -->
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
