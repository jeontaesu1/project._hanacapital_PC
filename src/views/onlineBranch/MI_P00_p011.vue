<script>
// MI_P00_p011
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
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

import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    PageContents,
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
    iconInformation,
  },
  setup() {
    const state = reactive({
      accountNumberError: false,
      repaymentMethodError: false,
      paymentDateError: false,
      repaymentStandardError: false,
      accountError: false,
      repaymentAmountError: false,
      paymentMethodError001: false,
      paymentMethodError002: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">중도상환신청을 진행해 주세요</PageMainText>
    </PageHead>

    <section>
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
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
            <RoundStatus
              theme="secondary"
              size="large"
              :classNames="{ wrap: 'display-block' }"
            >
              정상
            </RoundStatus>
          </BasicBoxHeadRight>
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
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="상환기준" :forceFocus="true">
          <FormInvalid :error="state.repaymentStandardError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentStandard"
                  id="MI_P00_p011_repaymentStandard001"
                >
                  <BoxCheckLabel>원금기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="MI_P00_p011_repaymentStandard"
                  id="MI_P00_p011_repaymentStandard002"
                >
                  <BoxCheckLabel>입금액기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormInvalid>
        </FormListItem>

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
                      label: '2023.01.05',
                    },
                    {
                      value: '2',
                      label: '2023.01.10',
                    },
                    {
                      value: '3',
                      label: '2023.01.15',
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
                >
                  <BoxCheckLabel>오늘 즉시 출금 (2023.01.01)</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
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
          </FormInvalid>
        </FormListItem>

        <!-- Case : 오늘 즉시 출금 선택시 -->
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
        <!-- //Case : 오늘 즉시 출금 선택시 -->
      </FormList>

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
        <TextButton theme="quaternary" textSize="regular" iconSize="regular">
          가상계좌 유의사항
          <template v-slot:rightIcon>
            <iconInformation />
          </template>
        </TextButton>
      </div>
      <!--// Case : 가상계좌 입금 선택시 -->
      <!-- //Case : 스탁론 외 일 때 노출 -->

      <BasicButton :line="true" size="regular" class="row-margin-block">
        중도상환금액 조회하기
      </BasicButton>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block"></BasicHr>

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

        <BasicHr theme="quaternary" className="row-margin-contents"></BasicHr>

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

      <BasicButton size="regular" class="row-margin-block">
        중도상환 신청하기
      </BasicButton>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p011.scss';
</style>
