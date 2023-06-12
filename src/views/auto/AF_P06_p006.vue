<script>
// AF_P06_p006
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    CarEmblem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormHelpText,
    NoticeText,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },

  setup() {
    const state = reactive({
      carAmountError: false,
      loanAmountError: false,
      typeError: false,
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
        <PageTitle align="left">중고차오토론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">신청정보를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        고객님의 신용등급에 따라 금리와 한도가 달라질 수 있습니다.
      </PageSubText>
    </PageHead>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="flex-box row-margin-small">
            <div class="flex-box__cell">
              <CarEmblem code="1001" name="현대" />
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
          </div>
          <h4 class="text-title-2 font-weight-medium">
            쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
          </h4>
        </BasicBoxHeadLeft>
      </BasicBoxHead>
      <KeyValue verticalAlign="center">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'color-black' }">
            차량 가격
          </KeyValueTitle>
          <KeyValueText>
            <UnitText rightUnit="원" align="right">
              <strong>23,500,000</strong>
            </UnitText>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="row-margin-container-medium row-margin-bottom-none">
      <FormList>
        <FormListItem
          titleText="차량구입금액"
          :require="true"
          target="#AF_P06_p006_carAmount"
        >
          <FormInvalid :error="state.carAmountError">
            <InputBlock :error="state.carAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="차량구입금액"
                  placeholder="매매계약서상 매매금액을 입력해 주세요."
                  id="AF_P06_p006_carAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <!-- Case : 차량구입금액 입력 시 노출 -->
            <FormHelpText :classNames="{ wrap: 'align-right' }"
              >천오백삼십만원</FormHelpText
            >
            <!-- // Case : 차량구입금액 입력 시 노출 -->
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="대출신청금액" target="#AF_P06_p006_loanAmount">
          <FormInvalid :error="state.loanAmountError">
            <InputBlock :error="state.loanAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="대출신청금액"
                  placeholder="최소 대출금액은 200만원 입니다."
                  id="AF_P06_p006_loanAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <!-- Case : 대출신청금액 입력 시 노출 -->
            <FormHelpText :classNames="{ wrap: 'align-right' }"
              >천삼백만원</FormHelpText
            >
            <!-- // Case : 대출신청금액 입력 시 노출 -->

            <NoticeText
              :classNames="{
                wrap: 'row-margin-item-medium',
              }"
            >
              대출신청금액은 차량 기준가격과 차량구입비용을 초과할 수 없습니다.
            </NoticeText>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="대출신청기간" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P06_p006_BoxCheckList001"
                  id="AF_P06_p006_BoxCheckList001_001"
                >
                  <BoxCheckLabel>24개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P06_p006_BoxCheckList001"
                  id="AF_P06_p006_BoxCheckList001_002"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>36개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P06_p006_BoxCheckList001"
                  id="AF_P06_p006_BoxCheckList001_003"
                >
                  <BoxCheckLabel>48개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P06_p006_BoxCheckList001"
                  id="AF_P06_p006_BoxCheckList001_004"
                >
                  <BoxCheckLabel>60개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="AF_P06_p006_BoxCheckList001"
                  id="AF_P06_p006_BoxCheckList001_005"
                >
                  <BoxCheckLabel>72개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
