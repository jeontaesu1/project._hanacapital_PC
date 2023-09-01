<script>
// Common_P00_p003
// Common_P00_p006
// Common_P00_p007
// Common_P00_p008
// Common_P00_p016
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
    StepProgress,
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
    SecurityInput,
    PartInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    NoticeText,
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
      <PageHeadRow>
        <PageTitle align="left">본인 인증</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"
        >실명 및 본인 인증을 진행해 주세요</PageMainText
      >
      <PageSubText align="left">
        대출상담 및 한도 조회를 위한 신용정보 조회는<br />
        개인신용평점에 영향을 주지 않습니다.
      </PageSubText>
    </PageHead>

    <!-- Case : 1차 실명인증 입력 정보를 활용하는 case -->
    <FormList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <FormListItem titleText="이름" target="#Common_P00_p003_name003">
        <FormInvalid :error="state.name003Error">
          <InputBlock :error="state.name003Error">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="Common_P00_p003_name003" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#Common_P00_p003_id003">
        <FormInvalid :error="state.idNumber003Error">
          <InputBlock :error="state.idNumber003Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="Common_P00_p003_id003"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, true, true, false, false, false, false]"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>
    <!-- // Case : 1차 실명인증 입력 정보를 활용하는 case -->

    <!-- Case : 개인, 법인 선택 -->
    <BoxCheckList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <BoxCheckListItem>
        <BoxCheck
          name="Common_P00_p003_type"
          id="Common_P00_p003_type_001"
          :defaultChecked="true"
        >
          <BoxCheckLabel>개인 (개인사업자 포함)</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck name="Common_P00_p003_type" id="Common_P00_p003_type_002">
          <BoxCheckLabel>법인</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>
    <!-- // Case : 개인, 법인 선택 -->

    <section>
      <h3 class="text-title-1 row-margin-contents">본인인증</h3>

      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-container-medium row-margin-top-none',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_002"
          >
            <BoxCheckLabel>공동인증서</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Common_P00_p003_method"
            id="Common_P00_p003_method_003"
          >
            <BoxCheckLabel>신용카드</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <!-- Case : 휴대폰 선택시 노출 -->
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
                    placeholder="◌"
                  />
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
                <BoxCheck
                  name="Common_P00_p003_sex"
                  id="Common_P00_p003_sex_002"
                >
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
                  <!-- Case : 전송 전 -->
                  <BasicButton size="small" theme="quaternary">
                    인증번호 전송
                  </BasicButton>
                  <!-- Case : 전송 전 -->

                  <!-- Case : 전송 후
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
            :forceFocus="true"
          >
            <FormInvalid :error="state.code001Error">
              <InputBlock :error="state.code001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="Common_P00_p003_phone001_code"
                    placeholder="인증번호를 입력해 주세요"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-red">00:00</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText
                >수신된 인증번호를 3회 이상 입력 실패 시 인증번호를 재전송 받아
                인증을 진행해 주세요.</FormHelpText
              >
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
      <!-- // Case : 휴대폰 선택시 노출 -->

      <!-- Case : 휴대폰 선택시 노출 (1차 실명인증 입력 정보를 활용하는 case) -->
      <div>
        <div :class="[$style['agree-list'], 'row-margin-contents']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="Common_P00_p003_phoneAgree002"
                  :classNames="{
                    wrap: $style['agree-list__depth-checkbox'],
                  }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>본인인증 약관 전체동의</CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="Common_P00_p003_phoneAgree002_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인정보 수집·이용, 취급위탁 동의</CheckBoxLabelText
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
                        id="Common_P00_p003_phoneAgree002_002"
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
                        id="Common_P00_p003_phoneAgree002_003"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>본인확인 이용약관</CheckBoxLabelText>
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
                        id="Common_P00_p003_phoneAgree002_004"
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

        <FormList>
          <FormListItem
            titleText="휴대폰번호"
            target="#Common_P00_p003_phone002_telecom"
          >
            <FormInvalid :error="state.phone002Error">
              <InputBlock :error="state.phone002Error">
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
                    inputId="Common_P00_p003_phone002_telecom"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
                <template v-slot:right>
                  <!-- Case : 전송 전 -->
                  <BasicButton size="small" theme="quaternary">
                    인증번호 전송
                  </BasicButton>
                  <!-- Case : 전송 전 -->

                  <!-- Case : 전송 후
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
            target="#Common_P00_p003_phone002_code"
            :forceFocus="true"
          >
            <FormInvalid :error="state.code002Error">
              <InputBlock :error="state.code002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="Common_P00_p003_phone002_code"
                    placeholder="인증번호를 입력해 주세요"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-red">00:00</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText
                >수신된 인증번호를 3회 이상 입력 실패 시 인증번호를 재전송 받아
                인증을 진행해 주세요.</FormHelpText
              >
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
      <!-- // Case : 휴대폰 선택시 노출 (1차 실명인증 입력 정보를 활용하는 case) -->

      <!-- Case : 공동인증서 선택시 노출 (개인 A type) -->
      <div>
        <FormList>
          <FormListItem titleText="이름" target="#Common_P00_p003_name002">
            <FormInvalid :error="state.name002Error">
              <InputBlock :error="state.name002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="Common_P00_p003_name002" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주민등록번호"
            target="#Common_P00_p003_id002"
          >
            <FormInvalid :error="state.idNumber002Error">
              <InputBlock :error="state.idNumber002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="Common_P00_p003_id002"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, false, false, false, false]"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
      <!-- // Case : 공동인증서 선택시 노출 (개인 A type) -->

      <!-- Case : 공동인증서 선택시 노출 (법인) -->
      <div>
        <section class="row-margin-container-medium">
          <h4 class="text-body-1 font-weight-medium row-margin-item-group">
            법인 정보 확인을 위해 몇 가지 정보를 입력 후 공동인증서 인증을
            진행해 주세요.
          </h4>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                법인 고객은 공동인증서를 통한 인증 수단만 이용 가능합니다.
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                사용 가능한 공동인증서 (은행/신용카드/보험용 인증서 및 범용
                공동인증서)
              </div>
            </li>
          </ul>
        </section>

        <FormList>
          <FormListItem
            titleText="법인명"
            target="#Common_P00_p003_businessName"
          >
            <FormInvalid :error="state.businessNameError">
              <InputBlock :error="state.businessNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="법인명"
                    id="Common_P00_p003_businessName"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업자등록번호"
            titleOptionalText="(10자리)"
            target="#Common_P00_p003_BusinessLicense"
          >
            <FormInvalid :error="state.businessLicenseError">
              <InputBlock :error="state.businessLicenseError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    ref="license"
                    title="사업자등록번호 (10자리)"
                    id="Common_P00_p003_BusinessLicense"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="법인번호"
            target="#Common_P00_p003_businessNumber"
          >
            <FormInvalid :error="state.businessNumberError">
              <InputBlock :error="state.businessNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="법인번호 앞 6자리"
                    id="Common_P00_p003_businessNumber"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="법인번호 뒤 7자리"
                    :dot="[true, true, true, false, false, false, false]"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
      <!-- // Case : 공동인증서 선택시 노출 (법인) -->

      <!-- Case : 신용카드 선택시 노출 -->
      <div>
        <FormList>
          <FormListItem
            titleText="카드번호"
            target="#Common_P00_p003_cardNumber1"
          >
            <FormInvalid :error="state.cardNumberError">
              <InputBlock :error="state.cardNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="카드번호 첫번째 4자리"
                    id="Common_P00_p003_cardNumber1"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="카드번호 두번째 4자리"
                    :dot="[true, true, false, false]"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="카드번호 세번째 4자리"
                    :dot="[false, false, false, false]"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="카드번호 네번째 4자리"
                    id="Common_P00_p003_cardNumber4"
                    :useDelete="false"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="유효기간"
            target="#Common_P00_p003_cardDate1"
          >
            <FormInvalid :error="state.cardDateError">
              <InputBlock :error="state.cardDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="유효기간 월"
                    id="Common_P00_p003_cardDate1"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-1">월</div>
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="유효기간 년"
                    id="Common_P00_p003_cardDate2"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-1">년</div>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="카드비밀번호 앞 2자리"
            target="#Common_P00_p003_cardPassword"
          >
            <FormInvalid :error="state.cardPasswordError">
              <InputBlock :error="state.cardPasswordError">
                <InputBlockCell :flexible="true">
                  <PartInput
                    type="number"
                    pattern="\d*"
                    title="카드비밀번호 앞 2자리"
                    :afterDot="2"
                    :length="2"
                    id="Common_P00_p003_cardPassword"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
          일부 카드사는 지원되지 않습니다.
        </NoticeText>
      </div>
      <!-- // Case : 신용카드 선택시 노출 -->
    </section>

    <ButtonList align="full">
      <!-- Case : 휴대폰 선택시 노출 -->
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
      <!-- // Case : 휴대폰 선택시 노출 -->

      <!-- Case : 공동인증서 선택시 노출 -->
      <ButtonListItem>
        <BasicButton>공동인증서 인증</BasicButton>
      </ButtonListItem>
      <!-- // Case : 공동인증서 선택시 노출 -->

      <!-- Case : 신용카드 선택시 노출 -->
      <ButtonListItem>
        <BasicButton>신용카드 인증</BasicButton>
      </ButtonListItem>
      <!-- // Case : 신용카드 선택시 노출 -->
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/Common_P00_p003.scss';
</style>
