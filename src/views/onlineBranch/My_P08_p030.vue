<script>
// My_P08_p030
import { reactive, onMounted, onUnmounted } from 'vue';

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
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
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
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 정보를 확인해 주세요</PageMainText>
    </PageHead>

    <div>
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
            이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            취득세가 발생됩니다. 리스차량 이용자는 리스
            <span class="color-red"
              >계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부</span
            >하여야 합니다. 불이행시 가산세를 포함한 금액으로 과세됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            리스 종료 이후, <span class="color-red">저당해지</span>가
            필요합니다.
          </div>
        </li>
      </ul>

      <section class="row-margin-block-small">
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
              target="#My_P08_p030_dateButton"
            >
              <FormInvalid :error="state.dateError">
                <InputBlock :error="state.dateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="입금예약일자"
                      id="My_P08_p030_date"
                      buttonId="My_P08_p030_dateButton"
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
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p030.scss';
</style>
