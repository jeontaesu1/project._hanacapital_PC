<script>
// Customer_P14_p003
// Customer_P14_p005
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    PageMainText,
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
    BasicInput,
    SecurityKeypadButton,
    SecurityInput,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicSelect,
    FormHelpText,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      name002Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      phone001Error: false,
      phone002Error: false,
      code001Error: false,
      code002Error: false,
      businessNameError: false,
      businessLicenseError: false,
      businessNumberError: false,
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
        <PageTitle>정보이용·제공 조회</PageTitle>
        <PageMainText
          align="center"
          :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
        >
          정보 이용·제공 현황을 조회시 본인 인증이 필요합니다
        </PageMainText>
      </PageHeadRow>
    </PageHead>

    <div>
      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P14_p003_type"
            id="Customer_P14_p003_type_001"
          >
            <BoxCheckLabel>마케팅 목적 동의 현황 조회</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P14_p003_type"
            id="Customer_P14_p003_type_002"
            :defaultChecked="true"
          >
            <BoxCheckLabel>신용정보 이용제공사실 조회</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <FormList :classNames="{ wrap: 'row-margin-block-small' }">
        <FormListItem titleText="이름" target="#Customer_P14_p003_name001">
          <FormInvalid :error="state.name001Error">
            <InputBlock :error="state.name001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="Customer_P14_p003_name001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#Customer_P14_p003_id001"
        >
          <FormInvalid :error="state.idNumber001Error">
            <InputBlock :error="state.idNumber001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="Customer_P14_p003_id001"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, true, true, true, true]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <section>
        <h3 class="text-title-1 row-margin-contents">본인인증</h3>

        <BoxCheckList
          :classNames="{
            wrap: 'row-margin-container-medium row-margin-top-none',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              name="Customer_P14_p003_method"
              id="Customer_P14_p003_method_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>휴대폰</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="Customer_P14_p003_method"
              id="Customer_P14_p003_method_002"
            >
              <BoxCheckLabel>공동인증서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case : 휴대폰 선택시 노출 -->
        <div>
          <div :class="$style['agree-list']">
            <ul :class="$style['agree-list__depth']">
              <li :class="$style['agree-list__depth-item']">
                <div :class="$style['agree-list__depth-head']">
                  <CheckBox
                    id="Customer_P14_p003_phoneAgree001"
                    :classNames="{
                      wrap: $style['agree-list__depth-checkbox'],
                    }"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      본인인증 약관 전체동의
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
                <div :class="$style['agree-list__depth-contents']">
                  <ul :class="$style['agree-list__list']">
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_phoneAgree001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인정보 수집·이용, 취급위탁 동의
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            고유식별정보 처리 동의
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree001_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            본인확인 이용약관
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree001_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            통신사 본인확인 이용약관 동의
                          </CheckBoxLabelText>
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

          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="휴대폰번호"
              target="#Customer_P14_p003_phone001_telecom"
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
                      inputId="Customer_P14_p003_phone001_telecom"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="휴대폰번호"
                    />
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
              target="#Customer_P14_p003_phone001_code"
            >
              <FormInvalid :error="state.code001Error">
                <InputBlock :error="state.code001Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="인증번호 (6자리)"
                      id="Customer_P14_p003_phone001_code"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3 color-red">00:00</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>
                  수신된 인증번호를 3회 이상 입력 실패 시 인증번호를 재전송 받아
                  인증을 진행해 주세요.
                </FormHelpText>
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
                    id="Customer_P14_p003_phoneAgree002"
                    :classNames="{
                      wrap: $style['agree-list__depth-checkbox'],
                    }"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      본인인증 약관 전체동의
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
                <div :class="$style['agree-list__depth-contents']">
                  <ul :class="$style['agree-list__list']">
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_phoneAgree002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인정보 수집·이용, 취급위탁 동의
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree002_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            고유식별정보 처리 동의
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree002_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            본인확인 이용약관
                          </CheckBoxLabelText>
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
                          id="Customer_P14_p003_phoneAgree002_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            통신사 본인확인 이용약관 동의
                          </CheckBoxLabelText>
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
              target="#Customer_P14_p003_phone002_telecom"
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
                      inputId="Customer_P14_p003_phone002_telecom"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="휴대폰번호"
                    />
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
              target="#Customer_P14_p003_phone002_code"
            >
              <FormInvalid :error="state.code002Error">
                <InputBlock :error="state.code002Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="인증번호 (6자리)"
                      id="Customer_P14_p003_phone002_code"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3 color-red">00:00</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>
                  수신된 인증번호를 3회 이상 입력 실패 시 인증번호를 재전송 받아
                  인증을 진행해 주세요.
                </FormHelpText>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </div>
        <!-- // Case : 휴대폰 선택시 노출 (1차 실명인증 입력 정보를 활용하는 case) -->

        <!-- Case : 공동인증서 선택시 노출 (개인 A type) -->
        <div>
          <FormList>
            <FormListItem titleText="이름" target="#Customer_P14_p003_name002">
              <FormInvalid :error="state.name002Error">
                <InputBlock :error="state.name002Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="이름" id="Customer_P14_p003_name002" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#Customer_P14_p003_id002"
            >
              <FormInvalid :error="state.idNumber002Error">
                <InputBlock :error="state.idNumber002Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="Customer_P14_p003_id002"
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
                  <InputBlockCell>
                    <SecurityKeypadButton />
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
              target="#Customer_P14_p003_businessName"
            >
              <FormInvalid :error="state.businessNameError">
                <InputBlock :error="state.businessNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="법인명"
                      id="Customer_P14_p003_businessName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자등록번호"
              titleOptionalText="(10자리)"
              target="#Customer_P14_p003_BusinessLicense"
            >
              <FormInvalid :error="state.businessLicenseError">
                <InputBlock :error="state.businessLicenseError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      ref="license"
                      title="사업자등록번호 (10자리)"
                      id="Customer_P14_p003_BusinessLicense"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="법인번호"
              target="#Customer_P14_p003_businessNumber"
            >
              <FormInvalid :error="state.businessNumberError">
                <InputBlock :error="state.businessNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="법인번호 앞 6자리"
                      id="Customer_P14_p003_businessNumber"
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
                  <InputBlockCell>
                    <SecurityKeypadButton />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </div>
        <!-- // Case : 공동인증서 선택시 노출 (법인) -->
      </section>

      <section class="row-margin-block-small row-margin-bottom-none">
        <h3 class="text-title-1 row-margin-contents">약관동의</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="Customer_P14_p003_agree_002"
                  :classNames="{
                    wrap: $style['agree-list__depth-checkbox'],
                  }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>
                    서비스 이용약관 전체동의
                  </CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="Customer_P14_p003_agree_002_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인(신용)정보 필수적 수집 · 이용동의
                        </CheckBoxLabelText>
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
                    <ul
                      :class="[
                        $style['agree-list__list'],
                        $style['agree-list__list--secondary'],
                      ]"
                    >
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="Customer_P14_p003_agree_002_001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="Customer_P14_p003_agree_002_001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별번호 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p003.scss';
</style>
