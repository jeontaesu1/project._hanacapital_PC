<script>
// Common_P00_p009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    BasicHr,
    BasicBox,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    UnitText,
  },
  setup() {
    const state = reactive({
      typeError: false,
      sumError: false,
      termError: false,
      interestRateError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>대출계산기</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle
              >항목을 입력하신 후 [계산하기] 버튼을 클릭하세요</PopupSubTitle
            >
          </template>
        </ModalPopupHead>
      </template>

      <div>
        <FormList>
          <FormListItem titleText="상환방법" :forceFocus="true">
            <FormInvalid :error="state.typeError">
              <BoxCheckList align="full">
                <BoxCheckListItem>
                  <BoxCheck
                    :contents="true"
                    name="layerLoanCalculatorType"
                    id="layerLoanCalculatorType001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
                    <p class="text-body-3 color-gray row-margin-item-regular">
                      가장 일반적인 방법으로 원금과 이자를 합한 상환금액이 매달
                      동일합니다.
                    </p>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :contents="true"
                    name="layerLoanCalculatorType"
                    id="layerLoanCalculatorType002"
                  >
                    <BoxCheckLabel>만기 일시상환</BoxCheckLabel>
                    <p class="text-body-3 color-gray row-margin-item-regular">
                      대출기간 동안 매달 이자만 상환하고, 대출 만기일에 원금을
                      일시 상환합니다.
                    </p>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="대출금액" :forceFocus="true">
            <FormInvalid :error="state.sumError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 100만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 500만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 1,000만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 5,000만
                  </BasicButton>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.sumError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="대출금액"
                    id="layerLoanCalculatorSum"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">원</div>
                </template>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    초기화
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#layerLoanCalculatorTerm"
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
                    ]"
                    title="대출기간"
                    inputId="layerLoanCalculatorTerm"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="대출금리" :forceFocus="true">
            <FormInvalid :error="state.interestRateError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 0.1%
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 0.5%
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 5.0%
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 10.0%
                  </BasicButton>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.interestRateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    type="number"
                    pattern="\d*"
                    title="대출금리"
                    id="layerLoanCalculatorInterestRate"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">%</div>
                </template>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    초기화
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-container-medium',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :line="true" theme="quaternary"
              >초기화</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">계산하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>

      <!-- Case : 계산하기 후 노출 -->
      <BasicHr
        theme="secondary"
        type="popup"
        className="row-margin-container-medium"
      />

      <div class="contents-wrap">
        <div>
          <BasicBox>
            <KeyValue>
              <!-- Case : 원리금 균등상환 선택 시 노출 -->
              <KeyValueItem verticalAlign="center">
                <KeyValueTitle :classNames="{ title: 'color-black' }">
                  월 납입액
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">333,389</UnitText>
                </KeyValueText>
              </KeyValueItem>
              <!-- // Case : 원리금 균등상환 선택 시 노출 -->

              <!-- Case : 만기 일시상환 선택 시 노출 -->
              <KeyValueItem verticalAlign="center">
                <KeyValueTitle :classNames="{ title: 'color-black' }">
                  월평균 납입이자
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">333,389</UnitText>
                </KeyValueText>
              </KeyValueItem>
              <!-- // Case : 만기 일시상환 선택 시 노출 -->
            </KeyValue>
            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>1,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>이자합계</KeyValueTitle>
                <KeyValueText>167 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>총 상환금액</KeyValueTitle>
                <KeyValueText>1,000,167 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
          <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
            대출금액과 기간으로 계산한 결과이며, 실제 대출 결과와 다를 수
            있습니다.
          </NoticeText>
        </div>

        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">예상 상환 스케쥴</h3>

          <ul class="reset-list">
            <li v-for="i in 12" :key="i" class="row-margin-contents">
              <div class="flex-box text-body-1 row-margin-small">
                <div class="flex-box__cell">{{ i }}회차</div>
                <div class="flex-box__cell flex-1 align-right">
                  <strong>1,232,456,345 원</strong>
                </div>
              </div>
              <div
                class="flex-box text-body-4 font-weight-light color-gray-secondary"
              >
                <div class="flex-box__cell flex-1">
                  <div class="flex-box">
                    <div class="flex-box__cell">원금</div>
                    <div class="flex-box__cell flex-box__cell--small flex-1">
                      912,232,321 원
                    </div>
                  </div>
                </div>
                <div class="flex-box__cell flex-1">
                  <div class="flex-box justify-conten-end">
                    <div class="flex-box__cell">잔액</div>
                    <div class="flex-box__cell flex-box__cell--small">
                      912,232,321 원
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex-box text-body-4 font-weight-light color-gray-secondary row-margin-mini"
              >
                <div class="flex-box__cell">이자</div>
                <div class="flex-box__cell flex-box__cell--small flex-1">
                  912,232,321 원
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <!-- // Case : 계산하기 후 노출 -->
    </ModalPopup>
  </UiLayer>
</template>
