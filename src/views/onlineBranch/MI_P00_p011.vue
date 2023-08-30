<script>
// MI_P00_p011
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IF_P03_l002 from '@/views/inventoryFinance/IF_P03_l002.vue';

import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
    BankLogo,
    TextButton,
    BasicHr,
    UnitText,
    IF_P03_l002,
    iconInformation,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      accountNumberError: false,
      repaymentMethodError: false,
      paymentDateError: false,
      repaymentStandardError001: false,
      repaymentStandardError002: false,
      accountError: false,
      repaymentAmountError: false,
      paymentMethodError001: false,
      paymentMethodError002: false,
    });

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
      layer001,
      layer001Open,
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '중도상환신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">중도상환신청을 진행해 주세요</PageMainText>
    </PageHead>

    <div>
      <!-- Case : 스탁론일 때 -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">스탁론</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              키움증권
            </p>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              L99999999999999
            </p>
          </BasicBoxHeadLeft>
          <!-- Case : 연체 -->
          <BasicBoxHeadRight>
            <RoundStatus theme="nonary" size="large" :block="true">
              연체
            </RoundStatus>
          </BasicBoxHeadRight>
          <!-- // Case : 연체 -->
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>6,265,200 원</KeyValueText>
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
      <!-- //Case : 스탁론일 때 -->

      <!-- Case : 스탁론 외 일 때 -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">신용대출</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              L99999999999999
            </p>
          </BasicBoxHeadLeft>
          <!-- Case : 연체 -->
          <BasicBoxHeadRight>
            <RoundStatus theme="nonary" size="large" :block="true">
              연체
            </RoundStatus>
          </BasicBoxHeadRight>
          <!-- // Case : 연체 -->
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>6,265,200 원</KeyValueText>
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
      <!-- //Case : 스탁론 외 일 때 -->

      <FormList
        :classNames="{
          wrap: 'row-margin-container-medium row-margin-bottom-none',
        }"
      >
        <!-- Case : 스탁론일 때만 노출 -->
        <FormListItem
          titleText="증권계좌번호"
          target="#MI_P00_p011_accountNumber"
          :disabled="true"
        >
          <FormInvalid :error="state.accountNumberError">
            <InputBlock :error="state.accountNumberError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="증권계좌번호"
                  id="MI_P00_p011_accountNumber"
                  defaultValue="키움증권 28374795829903"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 스탁론일 때만 노출 -->

        <FormListItem titleText="중도상환방법" :forceFocus="true">
          <FormInvalid :error="state.repaymentMethodError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentMethod"
                  id="MI_P00_p011_repaymentMethod001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>일부상환</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentMethod"
                  id="MI_P00_p011_repaymentMethod002"
                >
                  <BoxCheckLabel>전체상환</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 디폴트, 일부상환 선택 시 -->
        <FormListItem titleText="상환기준" :forceFocus="true">
          <FormInvalid :error="state.repaymentStandardError001">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentStandard001"
                  id="MI_P00_p011_repaymentStandard001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>원금기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentStandard001"
                  id="MI_P00_p011_repaymentStandard001_002"
                >
                  <BoxCheckLabel>입금액기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 디폴트, 일부상환 선택 시 -->

        <!-- Case : 전체상환 선택 시 -->
        <FormListItem titleText="상환기준" :forceFocus="true">
          <FormInvalid :error="state.repaymentStandardError002">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentStandard002"
                  id="MI_P00_p011_repaymentStandard002_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>원금기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 전체상환 선택 시 -->

        <!-- Case : 스탁론 외 일 때 노출 -->
        <FormListItem
          titleText="중도상환 후 결제일자"
          target="#MI_P00_p011_paymentDate"
          :selectOnly="true"
        >
          <FormInvalid :error="state.paymentDateError">
            <InputBlock :error="state.paymentDateError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '2021.11.20',
                    },
                    {
                      value: '2',
                      label: '2021.12.20',
                    },
                    {
                      value: '3',
                      label: '2022.01.20',
                    },
                  ]"
                  title="중도상환 후 결제일자"
                  inputId="MI_P00_p011_paymentDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 스탁론 외 일 때 노출 -->

        <FormListItem
          titleText="상환금액"
          target="#MI_P00_p011_repaymentAmount"
        >
          <FormInvalid :error="state.repaymentAmountError">
            <InputBlock :error="state.repaymentAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="상환금액"
                  id="MI_P00_p011_repaymentAmount"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 스탁론 일 때 노출 -->
        <FormListItem titleText="결제방법" :forceFocus="true">
          <FormInvalid :error="state.paymentMethodError001">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_paymentMethodError001"
                  id="MI_P00_p011_paymentMethodError001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>오늘 즉시 출금 (2023.01.01)</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
            >오늘 즉시 출금은 하나은행 계좌만 가능합니다.</NoticeText
          >
        </FormListItem>
        <!-- //Case : 스탁론 일 때 노출 -->

        <!-- Case : 스탁론 외 일 때 노출 -->
        <FormListItem titleText="결제방법" :forceFocus="true">
          <FormInvalid :error="state.paymentMethodError002">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_paymentMethodError002"
                  id="MI_P00_p011_paymentMethodError002_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>오늘 즉시 출금 (2023.01.01)</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_paymentMethodError002"
                  id="MI_P00_p011_paymentMethodError002_002"
                >
                  <BoxCheckLabel>가상계좌 입금</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <!-- Case : 오늘 즉시 출금 선택시 -->
      <FormList
        :classNames="{ wrap: 'row-margin-contents row-margin-bottom-none' }"
      >
        <FormListItem
          titleText="즉시 출금 계좌"
          target="#MI_P00_p011_account"
          :selectOnly="true"
          :disabled="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true" :disabled="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '농협은행 52438123435',
                    },
                    {
                      value: '2',
                      label: '신한 123-456-789012',
                    },
                    {
                      value: '3',
                      label: '우리 123-456-789012',
                    },
                  ]"
                  title="즉시 출금 계좌"
                  inputId="MI_P00_p011_account"
                  defaultValue="1"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }"
              >오늘 즉시 출금은 하나은행 계좌만 가능합니다.</NoticeText
            >
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- //Case : 오늘 즉시 출금 선택시 -->

      <!-- Case : 가상계좌 입금 선택시 -->
      <BasicBox
        theme="tertiary"
        className="row-margin-contents row-margin-bottom-none"
      >
        <KeyValue align="left" :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="003" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">기업</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="090" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">
                  카카오뱅크
                </div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <div class="inline-wrap align-right row-margin-item-medium">
        <TextButton
          theme="quaternary"
          textSize="regular"
          iconSize="regular"
          @click="layer001Open"
        >
          가상계좌 유의사항
          <template v-slot:rightIcon>
            <iconInformation />
          </template>
        </TextButton>
      </div>
      <!--// Case : 가상계좌 입금 선택시 -->
      <!-- //Case : 스탁론 외 일 때 노출 -->

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true">중도상환금액 조회하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <div class="flex-box">
        <div class="flex-box__cell">
          <h3 class="text-title-2">중도상환금액</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--small">
          <span class="text-body-1">(결제하실 금액)</span>
        </div>
      </div>

      <BasicBox className="row-margin-contents">
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle>실 납부액</KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">999,999,999</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicHr theme="quaternary" className="row-margin-contents" />

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>상환원금</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>경과이자</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>중도상환수수료</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>지연배상금</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>비용</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>환급금액</KeyValueTitle>
            <KeyValueText>999,999,999 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <div class="row-margin-contents-small">
        <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
          환급금액 : 2011.06.27기준 금융위원회 대부업법 시행령 개정안을 기준으로
          모든 금융사가 수취할 수 있는 최고이자율 연39%를 초과한 경우 고객에게
          돌려주어야 하는 금액
        </NoticeText>
        <NoticeText>
          실납부액 : 선수금과 환급금액이 차감되어 조회 및 청구
        </NoticeText>
      </div>

      <ButtonList>
        <ButtonListItem>
          <BasicButton>중도상환 신청하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <IF_P03_l002 ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p011.scss';
</style>
