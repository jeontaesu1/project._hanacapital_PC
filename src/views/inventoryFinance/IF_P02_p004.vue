<script>
// IF_P02_p004
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    PartInput,
    SecurityKeypadButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      name002Error: false,
      name003Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      idNumber003Error: false,
      phone001Error: false,
      phone002Error: false,
      code001Error: false,
      code002Error: false,
      businessNameError: false,
      businessLicenseError: false,
      businessNumberError: false,
      cardNumberError: false,
      cardDateError: false,
      cardPasswordError: false,
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
      <PageTitle
        ><span class="color-green">주식회사알차이노베이션</span>님,<br />
        총 <span class="color-green">2건</span> 차량 재고로 총
        <span class="color-green">60,000,000원</span><br />대출
        신청하셨습니다.</PageTitle
      >
      <PageSubText> 확인 후 약정해 주세요. </PageSubText>
    </PageHead>

    <BasicBox class="row-margin-contents row-margin-top-none">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <p class="text-body-4 font-weight-light row-margin-small">
            2023.01.10
          </p>
          <h3 class="text-title-2">재고금융Ⅱ20고5678</h3>
          <p class="text-body-3 color-gray row-margin-item-small">
            BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>
      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>대출신청금액</KeyValueTitle>
          <KeyValueText>200,000,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>차대번호</KeyValueTitle>
          <KeyValueText>KNALD2237A21548</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>3개월</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>상환방법</KeyValueTitle>
          <KeyValueText>만기일시상환</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>대출금리</KeyValueTitle>
          <KeyValueText>7.5%</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>연체이자율</KeyValueTitle>
          <KeyValueText>약정대출금리 + 3%</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>2023.02.11</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>결제일자</KeyValueTitle>
          <KeyValueText>매월 11일<br />(최초결제일 2월 11일)</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>총 납부 금액<br />(원금+이자)</KeyValueTitle>
          <KeyValueText>10,500,000원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>서류등록</KeyValueTitle>
          <KeyValueText
            ><TextButton
              :underline="true"
              :classNames="{
                wrap: 'text-body-3 color-green font-weight-medium',
              }"
              >서류확인</TextButton
            ></KeyValueText
          >
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="row-margin-block-small row-margin-top-none">
      <div :class="$style['term-list__head']">
        <div :class="$style['term-list__title']">
          <CheckBox id="testCheckBox123321" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText>재고금융 확약서</CheckBoxLabelText>
          </CheckBox>
        </div>
        <div :class="$style['term-list__right']">
          <button type="button" :class="$style['term-list__link']">
            <span :class="$style['term-list__link-text']">상세보기</span>
          </button>
        </div>
      </div>
    </div>
    <h3 class="text-title-1 row-margin-item-group row-margin-bottom-none">
      대출신청 내용을 확인하고 약정합니다.
    </h3>
    <div class="row-margin-contents">
      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-block-small ',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_type"
            id="Common_P00_p003_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>예</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="Common_P00_p003_type" id="Common_P00_p003_type_002">
            <BoxCheckLabel>아니오</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <h3 class="text-title-1 row-margin-item-group">본인인증</h3>
      <!-- 입력전 -->
      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck> </BoxCheckListItem
        ><BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_002"
            :defaultChecked="true"
          >
            <BoxCheckLabel>공동인증서</BoxCheckLabel>
          </BoxCheck> </BoxCheckListItem
        ><BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_003"
            :defaultChecked="true"
          >
            <BoxCheckLabel>신용카드</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- //입력전 -->
      <!-- 입력후 -->
      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p007_method"
            id="Common_P00_p007_method_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem> </BoxCheckList
      ><!-- //입력후 -->
    </div>

    <div>
      <FormList>
        <FormListItem titleText="이름" target="#Common_P00_p003_name001">
          <FormInvalid :error="state.name001Error">
            <InputBlock :error="state.name001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="Common_P00_p003_name001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#Common_P00_p003_idNumber001"
        >
          <FormInvalid :error="state.idNumber001Error">
            <InputBlock :error="state.idNumber001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="Common_P00_p003_idNumber001"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <PartInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 뒤 7자리 중 첫번째자리"
                  :afterDot="6"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="국적" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                name="Common_P00_p003_nationality"
                id="Common_P00_p003_nationality_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>내국인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                name="Common_P00_p003_nationality"
                id="Common_P00_p003_nationality_002"
              >
                <BoxCheckLabel>외국인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>

        <FormListItem titleText="성별" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                name="Common_P00_p003_sex"
                id="Common_P00_p003_sex_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>남자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck name="Common_P00_p003_sex" id="Common_P00_p003_sex_002">
                <BoxCheckLabel>여자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>

        <FormListItem titleText="약관동의" :forceFocus="true">
          <div :class="$style['agree-list']">
            <ul :class="$style['agree-list__depth']">
              <li :class="$style['agree-list__depth-item']">
                <div :class="$style['agree-list__depth-head']">
                  <CheckBox
                    id="Common_P00_p003_phoneAgree001"
                    :classNames="{
                      wrap: $style['agree-list__depth-checkbox'],
                    }"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >본인인증 약관 전체동의</CheckBoxLabelText
                    >
                  </CheckBox>
                </div>
                <div :class="$style['agree-list__depth-contents']">
                  <ul :class="$style['agree-list__list']">
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Common_P00_p003_phoneAgree001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인정보 수집·이용, 취급위탁
                            동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Common_P00_p003_phoneAgree001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >고유식별정보 처리 동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Common_P00_p003_phoneAgree001_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >본인확인 이용약관</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Common_P00_p003_phoneAgree001_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >통신사 본인확인 이용약관 동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#Common_P00_p003_phone001_telecom"
        >
          <FormInvalid :error="state.phone001Error">
            <InputBlock :error="state.phone001Error">
              <InputBlockCell>
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'SKT',
                    },
                    {
                      value: '2',
                      label: 'KT',
                    },
                    {
                      value: '3',
                      label: 'LG U+',
                    },
                    {
                      value: '4',
                      label: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      label: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      label: '알뜰폰 LG +',
                    },
                  ]"
                  title="통신사"
                  inputId="Common_P00_p003_phone001_telecom"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
              </InputBlockCell>
              <template v-slot:right>
                <!-- Cass : 전송 전 -->
                <BasicButton size="small" theme="quaternary">
                  인증번호 전송
                </BasicButton>
                <!-- Cass : 전송 전 -->

                <!-- Cass : 전송 후
                <BasicButton size="small" theme="quaternary">
                  인증번호 재전송
                </BasicButton>
                -->
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="인증번호"
          titleOptionalText="(6자리)"
          target="#Common_P00_p003_phone001_code"
        >
          <FormInvalid :error="state.code001Error">
            <InputBlock :error="state.code001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="인증번호 (6자리)"
                  id="Common_P00_p003_phone001_code"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3 color-red">00:00</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              수신된 인증번호를 3회 이상 입력 실패 시 인증번호를 재전송 받아
              인증을 진행해 주세요.</FormHelpText
            >
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>약정하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P02_p004.scss';
</style>
