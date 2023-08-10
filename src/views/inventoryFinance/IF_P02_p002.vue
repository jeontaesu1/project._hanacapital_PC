<script>
// IF_P02_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    InputBlock,
    InputBlockCell,
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

    const state = reactive({
      amountError: false,
      termError: false,
      paymentDateError: false,
      accountError: false,
      carOwnerError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'inventoryFinance002');
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
    <PageHead>
      <PageTitle>금융정보를 입력해 주세요</PageTitle>
    </PageHead>

    <BasicBox>
      <div>
        <h3 class="text-title-2 font-weight-medium">20고5678</h3>
        <p class="text-body-3 color-gray-tertiary row-margin-item-small">
          BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
        </p>
      </div>

      <KeyValue
        margin="regular"
        :classNames="{ wrap: 'row-margin-item-regular' }"
      >
        <KeyValueItem
          :classNames="{
            item: 'text-body-1',
          }"
          verticalAlign="center"
        >
          <KeyValueTitle
            :classNames="{
              title: 'color-black',
            }"
            >한도금액</KeyValueTitle
          >
          <KeyValueText>
            <UnitText rightUnit="원" align="right">10,000,000</UnitText>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="row-margin-container-medium">
      <FormList>
        <FormListItem titleText="대출신청금액" target="#IF_P02_p002_amount">
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="대출신청금액"
                  id="IF_P02_p002_amount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출신청기간"
          target="#IF_P02_p002_term"
          :selectOnly="true"
        >
          <FormInvalid :error="state.termError">
            <InputBlock :error="state.termError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '3개월',
                    },
                    {
                      value: '2',
                      label: '5개월',
                    },
                  ]"
                  title="대출신청기간"
                  inputId="IF_P02_p002_term"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="결제일자"
          target="#IF_P02_p002_paymentDate"
          :selectOnly="true"
        >
          <FormInvalid :error="state.paymentDateError">
            <InputBlock :error="state.paymentDateError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '1일',
                    },
                    {
                      value: '2',
                      label: '5일',
                    },
                    {
                      value: '3',
                      label: '11일',
                    },
                    {
                      value: '4',
                      label: '15일',
                    },
                    {
                      value: '5',
                      label: '21일',
                    },
                  ]"
                  title="결제일자"
                  inputId="IF_P02_p002_paymentDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="계좌선택"
          target="#IF_P02_p002_account"
          :selectOnly="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '하나 123-456-7890123',
                    },
                    {
                      value: '2',
                      label: '신한 123-456-7890123',
                    },
                    {
                      value: '3',
                      label: '우리 123-456-7890123',
                    },
                  ]"
                  title="계좌선택"
                  inputId="IF_P02_p002_account"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              >재고금융 대출금 송금계좌 및 자동이체 계좌</FormHelpText
            >
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="차량 전 소유주" target="#IF_P02_p002_CarOwner">
          <FormInvalid :error="state.carOwnerError">
            <InputBlock :error="state.carOwnerError">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량 전 소유주" id="IF_P02_p002_CarOwner" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              차량 전 소유주 정보를 정확히 입력 해 주시기 바랍니다.
            </FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>

    <div>// 구비서류등록 영역 기획 대기</div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>저장</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
