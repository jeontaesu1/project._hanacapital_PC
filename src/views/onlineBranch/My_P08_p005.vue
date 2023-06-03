<script>
// My_P08_p005
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    NoticeText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
  },

  setup() {
    const state = reactive({
      dateTypeError: false,
      paymentAmountTypeError: false,
      percentage001Error: false,
      percentage002Error: false,
      percentage003Error: false,
      percentage004Error: false,
      paymentAmount001Error: false,
      paymentAmount002Error: false,
      paymentAmount003Error: false,
      paymentAmount004Error: false,
      paymentAmount005Error: false,
      paymentAmount006Error: false,
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
        <PageTitle align="left">만기후처리 연장 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">연장 조건을 선택하세요</PageMainText>
    </PageHead>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-title-2 font-weight-medium">렌터카 07호3994</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>계약기간</KeyValueTitle>
          <KeyValueText>2016.01.01-2021.01.01</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>실납렌트료(VAT포함)</KeyValueTitle>
          <KeyValueText>999,999 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>잔존가치(VAT포함)</KeyValueTitle>
          <KeyValueText>99,999,999 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>약정주행거리</KeyValueTitle>
          <KeyValueText>999,999 km</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>보증금</KeyValueTitle>
          <KeyValueText>99,999,999 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>정비서비스</KeyValueTitle>
          <KeyValueText>프리미엄</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="row-margin-container-medium row-margin-bottom-none">
      <FormList>
        <FormListItem titleText="기간 선택" :forceFocus="true">
          <FormInvalid :error="state.dateTypeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_date_type"
                  id="My_P08_p005_date_type001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>12개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_date_type"
                  id="My_P08_p005_date_type002"
                >
                  <BoxCheckLabel>24개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_date_type"
                  id="My_P08_p005_date_type003"
                >
                  <BoxCheckLabel>36개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_date_type"
                  id="My_P08_p005_date_type004"
                >
                  <BoxCheckLabel>48개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="보증금/선납금 선택" :forceFocus="true">
          <FormInvalid :error="state.paymentAmountTypeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_paymentAmount_type"
                  id="My_P08_p005_paymentAmount_type_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>보증금</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_paymentAmount_type"
                  id="My_P08_p005_paymentAmount_type002"
                >
                  <BoxCheckLabel>선납금</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_paymentAmount_type"
                  id="My_P08_p005_paymentAmount_type003"
                >
                  <BoxCheckLabel>보증금+선납금</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_paymentAmount_type"
                  id="My_P08_p005_paymentAmount_type004"
                >
                  <BoxCheckLabel>해당사항없음</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
        보증금: 보증금을 납입하는 경우 리스료가 할인됩니다.<br />
        (계약이 중도해지 되거나, 약정서에 기재된 채무를 전부 이행한 때에는
        리스보증금을 반환해 드립니다.)
      </NoticeText>
      <NoticeText>
        선납금: 리스기간 회차로 나누어 매월 리스료에 충당 (만기 시 반환되지
        않습니다.)
      </NoticeText>

      <!-- Case : '보증금' 선택 시 노출 -->
      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem titleText="보증금비율" :forceFocus="true">
          <FormInvalid :error="state.percentage001Error">
            <BoxCheckList :wrap="true" :col="4">
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage001"
                  id="My_P08_p005_percentage001_008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- // Case : '보증금' 선택 시 노출 -->

      <!-- Case : '선납금' 선택 시 노출 -->
      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem titleText="선납금비율" :forceFocus="true">
          <FormInvalid :error="state.percentage002Error">
            <BoxCheckList :wrap="true" :col="4">
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage002"
                  id="My_P08_p005_percentage002_008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- // Case : '선납금' 선택 시 노출 -->

      <!-- Case : '비율' 선택 시 노출 -->
      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount001">
          <FormInvalid :error="state.paymentAmount001Error">
            <InputBlock :error="state.paymentAmount001Error" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount001"
                  :useDelete="false"
                  align="right"
                  :disabled="true"
                  defaultValue="10,002,120"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '비율' 선택 시 노출 -->

        <!-- Case : '금액입력' 선택 시 노출 -->
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount002">
          <FormInvalid :error="state.paymentAmount002Error">
            <InputBlock :error="state.paymentAmount002Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount002"
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
        <!-- // Case : '금액입력' 선택 시 노출 -->
      </FormList>

      <!-- Case : '보증금+선납금' 선택 시 노출 -->
      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem titleText="보증금비율" :forceFocus="true">
          <FormInvalid :error="state.percentage003Error">
            <BoxCheckList :wrap="true" :col="4">
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage003"
                  id="My_P08_p005_percentage003_008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : '보증금+선납금 보증금비율 비율' 선택 시 노출 -->
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount003">
          <FormInvalid :error="state.paymentAmount003Error">
            <InputBlock :error="state.paymentAmount003Error" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount003"
                  :useDelete="false"
                  align="right"
                  :disabled="true"
                  defaultValue="10,002,120"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '보증금+선납금 보증금비율 비율' 선택 시 노출 -->

        <!-- Case : '보증금+선납금 보증금비율 금액입력' 선택 시 노출 -->
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount004">
          <FormInvalid :error="state.paymentAmount004Error">
            <InputBlock :error="state.paymentAmount004Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount004"
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
        <!-- // Case : '보증금+선납금 보증금비율 금액입력' 선택 시 노출 -->

        <FormListItem titleText="선납금비율" :forceFocus="true">
          <FormInvalid :error="state.percentage004Error">
            <BoxCheckList :wrap="true" :col="4">
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P08_p005_percentage004"
                  id="My_P08_p005_percentage004_008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : '보증금+선납금 선납금비율 비율' 선택 시 노출 -->
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount005">
          <FormInvalid :error="state.paymentAmount005Error">
            <InputBlock :error="state.paymentAmount005Error" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount005"
                  :useDelete="false"
                  align="right"
                  :disabled="true"
                  defaultValue="10,002,120"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '보증금+선납금 선납금비율 비율' 선택 시 노출 -->

        <!-- Case : '보증금+선납금 선납금비율 금액입력' 선택 시 노출 -->
        <FormListItem titleText="금액" target="#My_P08_p005_paymentAmount006">
          <FormInvalid :error="state.paymentAmount006Error">
            <InputBlock :error="state.paymentAmount006Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="금액"
                  id="My_P08_p005_paymentAmount006"
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
      </FormList>
      <!-- // Case : '보증금+선납금 선납금비율 금액입력' 선택 시 노출 노출 -->
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
