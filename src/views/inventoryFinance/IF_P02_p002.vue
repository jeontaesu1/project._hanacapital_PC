<script>
// IF_P02_p002

import { reactive } from 'vue';
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
    const state = reactive({
      testError001: false,
      dateError: false,
      paymentDateError: false,
      amountError: false,
      accountError: false,
      carOwnerError: false,
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
        <p class="text-body-4 font-weight-light row-margin-small">2021년식</p>
        <h3 class="text-body-1">20노1511</h3>
        <p class="text-body-3 color-gray row-margin-item-small">
          5시리즈(7세대) 520d M 스포츠 패키지 플러스
        </p>
      </div>

      <KeyValue margin="regular" class="row-margin-item-regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-1',
          }"
          verticalAlign="center"
          class="align-items-center"
        >
          <KeyValueTitle
            :classNames="{
              title: 'color-black',
            }"
            >대출가능한도</KeyValueTitle
          >
          <KeyValueText>
            <UnitText rightUnit="원" align="right">23,000,000</UnitText>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>
    <FormList class="row-margin-container-medium row-margin-bottom-none">
      <FormListItem
        titleText="대출신청금액"
        target="#inventoryFinanceStateAddInfoAmount"
      >
        <FormInvalid :error="state.amountError">
          <InputBlock :error="state.amountError">
            <InputBlockCell :flexible="true">
              <BasicInput
                align="right"
                :useDelete="false"
                pattern="\d*"
                title="대출신청금액"
                id="inventoryFinanceStateAddInfoAmount"
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
        target="#testInput010"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '3개월',
                  },
                  {
                    value: '2',
                    label: '6개월',
                  },
                  {
                    value: '3',
                    label: '12개월',
                  },
                  {
                    value: '4',
                    label: '24개월',
                  },
                  {
                    value: '5',
                    label: '36개월',
                  },
                  {
                    value: '6',
                    label: '48개월',
                  },
                  {
                    value: '7',
                    label: '60개월',
                  },
                  {
                    value: '8',
                    label: '72개월',
                  },
                  {
                    value: '9',
                    label: '84개월',
                  },
                  {
                    value: '10',
                    label: '96개월',
                  },
                  {
                    value: '11',
                    label: '108개월',
                  },
                  {
                    value: '12',
                    label: '120개월',
                  },
                ]"
                title="대출신청기간"
                inputId="testInput010"
                :selectable="
                  (option) => {
                    switch (option.value) {
                      case '3':
                      case '4':
                        return false;
                      default:
                        return true;
                    }
                  }
                "
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="결제일자"
        target="#testInput0110"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '1일',
                  },
                  {
                    value: '2',
                    label: '2일',
                  },
                  {
                    value: '3',
                    label: '15일',
                  },
                ]"
                title="결제일자"
                inputId="testInput0110"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 선택 계좌가 있는 경우 -->
      <FormListItem
        titleText="계좌 선택"
        target="#inventoryFinanceStateAddInfoAccountButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.accountError">
          <InputBlock :error="state.accountError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나 123-456-7890123',
                  },
                  {
                    value: '2',
                    text: '신한 123-456-7890123',
                  },
                  {
                    value: '3',
                    text: '우리 123-456-7890123',
                  },
                ]"
                buttonTitle="계좌 선택하기"
                layerTitle="계좌를 선택해 주세요"
                id="inventoryFinanceStateAddInfoAccount"
                buttonId="inventoryFinanceStateAddInfoAccountButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>재고금융 대출금 송금계좌 및 자동이체 계좌</FormHelpText>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 선택 계좌가 있는 경우 -->

      <!-- Case : 선택 계좌가 없는 경우 -->
      <FormListItem
        titleText="계좌 선택"
        target="#inventoryFinanceStateAddInfoAccountButton"
        :selectOnly="true"
        :disabled="true"
      >
        <FormInvalid :error="state.accountError">
          <InputBlock :error="state.accountError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나 123-456-7890123',
                  },
                  {
                    value: '2',
                    text: '신한 123-456-7890123',
                  },
                  {
                    value: '3',
                    text: '우리 123-456-7890123',
                  },
                ]"
                buttonTitle="계좌 선택하기"
                layerTitle="계좌를 선택해 주세요"
                id="inventoryFinanceStateAddInfoAccount"
                buttonId="inventoryFinanceStateAddInfoAccountButton"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>재고금융 대출금 송금계좌 및 자동이체 계좌</FormHelpText>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 선택 계좌가 없는 경우 -->

      <FormListItem
        titleText="차량 전 소유주"
        target="#inventoryFinanceStateAddInfoCarOwner"
      >
        <FormInvalid :error="state.carOwnerError">
          <InputBlock :error="state.carOwnerError">
            <InputBlockCell :flexible="true">
              <BasicInput
                :useDelete="false"
                pattern="\d*"
                title="차량 전 소유주"
                id="inventoryFinanceStateAddInfoCarOwner"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>
            차량 전 소유주 정보를 정확히 입력 해 주시기 바랍니다.
          </FormHelpText>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>저장</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
