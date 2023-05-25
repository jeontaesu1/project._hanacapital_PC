<script>
// IF_P03_p002
// IF_P03_p004
// IF_P03_p006
import { ref, reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IF_P03_l002 from '@/views/inventoryFinance/IF_P03_l002.vue';

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
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    BankLogo,
    TextButton,
    IF_P03_l002,
    iconInformation,
  },

  setup() {
    const state = reactive({
      accountError: false,
      accountError01: false,
      repaymentMethodError01: false,
      repaymentMethodError02: false,
      repaymentMethodError03: false,
      repaymentAmountError01: false,
      repaymentAmountError02: false,
      repaymentAmountError03: false,
      dateError: false,
    });

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

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
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        선택한 계약상품의 중도상환 신청을 위해<br />
        조건을 입력 또는 선택해 주세요
      </PageMainText>
    </PageHead>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-title-2 font-weight-medium">20고5678</h3>
          <p class="text-body-3 color-gray-tertiary row-margin-item-small">
            BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>2019.05.30 ~ 2019.06.30</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>결제예정금액</KeyValueTitle>
          <KeyValueText>3,500,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>결제회차</KeyValueTitle>
          <KeyValueText>1/1 (매월 11일)</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">중도상환 조건 입력</h3>
      <BoxCheckList :wrap="true" :col="3">
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P03_p002_condition"
            id="IF_P03_p002_condition001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>오늘 즉시 출금</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="IF_P03_p002_condition" id="IF_P03_p002_condition002">
            <BoxCheckLabel>가상계좌 입금</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="IF_P03_p002_condition" id="IF_P03_p002_condition003">
            <BoxCheckLabel>중도상환 시뮬레이션</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <div class="row-margin-contents">
        <!-- Case : 오늘 즉시 출금 선택시 -->
        <FormList>
          <FormListItem
            titleText="즉시 출금 계좌"
            target="#IF_P03_p002_account"
            :selectOnly="true"
          >
            <FormInvalid :error="state.accountError">
              <InputBlock :error="state.accountError">
                <InputBlockCell :flexible="true">
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
                    inputId="IF_P03_p002_account"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <!-- Case : 출금 가능 계좌가 없을 시 -->
          <FormListItem
            titleText="즉시 출금 계좌"
            target="#IF_P03_p002_account01"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.accountError01">
              <InputBlock :error="state.accountError01" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '즉시출금 가능한 계좌가 없습니다',
                      },
                    ]"
                    title="즉시 출금 계좌"
                    inputId="IF_P03_p002_account01"
                    defaultValue="1"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- //Case : 출금 가능 계좌가 없을 시 -->

          <FormListItem
            titleText="중도상환방법"
            target="#IF_P03_p002_repaymentMethod01"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentMethodError01">
              <InputBlock
                :error="state.repaymentMethodError01"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="중도상환방법"
                    id="IF_P03_p002_repaymentMethod01"
                    defaultValue="전체상환"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="상환금액"
            target="#IF_P03_p002_repaymentAmount01"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentAmountError01">
              <InputBlock
                :error="state.repaymentAmountError01"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="상환금액"
                    id="IF_P03_p002_repaymentAmount01"
                    :useDelete="false"
                    align="right"
                    defaultValue="7,400,000"
                    :disabled="true"
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
        <!-- //Case : 오늘 즉시 출금 선택시 -->

        <!-- Case : 가상계좌 입금 선택시 -->
        <BasicBox theme="tertiary">
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
                    <BankLogo size="small" code="088" />
                  </div>
                  <div class="flex-box__cell flex-box__cell--mini">신한</div>
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

        <FormList>
          <FormListItem
            titleText="중도상환방법"
            target="#IF_P03_p002_repaymentMethod02"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentMethodError02">
              <InputBlock
                :error="state.repaymentMethodError02"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="중도상환방법"
                    id="IF_P03_p002_repaymentMethod02"
                    defaultValue="전체상환"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="상환금액"
            target="#IF_P03_p002_repaymentAmount02"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentAmountError02">
              <InputBlock
                :error="state.repaymentAmountError02"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="상환금액"
                    id="IF_P03_p002_repaymentAmount02"
                    :useDelete="false"
                    align="right"
                    defaultValue="7,400,000"
                    :disabled="true"
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
        <!-- //Case : 가상계좌 입금 선택시 -->

        <!-- Case : 중도상환 시뮬레이션 선택시 -->
        <FormList>
          <FormListItem
            titleText="중도상환방법"
            target="#IF_P03_p002_repaymentMethod03"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentMethodError03">
              <InputBlock
                :error="state.repaymentMethodError03"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="중도상환방법"
                    id="IF_P03_p002_repaymentMethod03"
                    defaultValue="전체상환"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem titleText="입금일자" target="#IF_P03_p002_dateButton">
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="입금일자"
                    id="IF_P03_p002_date"
                    buttonId="IF_P03_p002_dateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="상환금액"
            target="#IF_P03_p002_repaymentAmount03"
            :disabled="true"
          >
            <FormInvalid :error="state.repaymentAmountError03">
              <InputBlock
                :error="state.repaymentAmountError03"
                :disabled="true"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="상환금액"
                    id="IF_P03_p002_repaymentAmount03"
                    :useDelete="false"
                    align="right"
                    defaultValue="7,400,000"
                    :disabled="true"
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
        <!-- //Case : 중도상환 시뮬레이션 선택시 -->
      </div>
    </section>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>중도상환금액 조회</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <IF_P03_l002 ref="layer001" />
  </PageContents>
</template>
