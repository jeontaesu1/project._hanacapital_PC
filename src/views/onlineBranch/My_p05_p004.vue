<script>
// My_p05_p004
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
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
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
    SecurityKeypadButton,
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
      idNumberError: false,
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
        <PageTitle align="left">금리인하요구권 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">본인인증을 진행해 주세요</PageMainText>
      <PageSubText align="left">
        대출상담 및 한도 조회를 위한 신용정보 조회는<br />
        개인신용평점에 영향을 주지 않습니다.
      </PageSubText>
    </PageHead>

    <section>
      <h3 class="text-body-1 font-weight-medium row-margin-item-medium">
        금리인하요구권 신청시 참고사항
      </h3>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="[$style['basic-list__item'], 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="[$style['basic-list__content'], 'font-weight-regular']">
            금리인하 신청을 위해서 개인신용정보조회가 필요합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="[$style['basic-list__content'], 'font-weight-regular']">
            신용정보조회가 완료되면 신청이 완료됩니다.
          </div>
        </li>
      </ul>

      <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
        심사결과에 따라 금리인하요구 수용이 불가능할 수 있습니다.
      </NoticeText>
      <NoticeText>
        금리인하요구 비대상상품은 금리인하 요구 수용이 불가능합니다.
      </NoticeText>
    </section>

    <div class="row-margin-block-small">
      <FormList>
        <FormListItem titleText="이름" target="#My_p05_p004_name001">
          <FormInvalid :error="state.name001Error">
            <InputBlock :error="state.name001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="My_p05_p004_name001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="주민등록번호" target="#My_p05_p004_id">
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="My_p05_p004_id"
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

    <section>
      <h3 class="text-title-1 row-margin-contents">본인인증</h3>

      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-container-medium row-margin-top-none',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="My_p05_p004_method"
            id="My_p05_p004_method_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="My_p05_p004_method" id="My_p05_p004_method_002">
            <BoxCheckLabel>공동인증서</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="My_p05_p004_method" id="My_p05_p004_method_003">
            <BoxCheckLabel>신용카드</BoxCheckLabel>
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
                  id="My_p05_p004_phoneAgree001"
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
                        id="My_p05_p004_phoneAgree001_001"
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
                        id="My_p05_p004_phoneAgree001_002"
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
                        id="My_p05_p004_phoneAgree001_003"
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
                        id="My_p05_p004_phoneAgree001_004"
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
            target="#My_p05_p004_phone001_telecom"
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
                    inputId="My_p05_p004_phone001_telecom"
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
            target="#My_p05_p004_phone001_code"
          >
            <FormInvalid :error="state.code001Error">
              <InputBlock :error="state.code001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="My_p05_p004_phone001_code"
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
                  id="My_p05_p004_phoneAgree002"
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
                        id="My_p05_p004_phoneAgree002_001"
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
                        id="My_p05_p004_phoneAgree002_002"
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
                        id="My_p05_p004_phoneAgree002_003"
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
                        id="My_p05_p004_phoneAgree002_004"
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
            target="#My_p05_p004_phone002_telecom"
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
                    inputId="My_p05_p004_phone002_telecom"
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
            target="#My_p05_p004_phone002_code"
          >
            <FormInvalid :error="state.code002Error">
              <InputBlock :error="state.code002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="My_p05_p004_phone002_code"
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

      <!-- Case : 공동인증서 선택시 노출 -->
      <div>
        <FormList>
          <FormListItem titleText="이름" target="#My_p05_p004_name002">
            <FormInvalid :error="state.name002Error">
              <InputBlock :error="state.name002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="My_p05_p004_name002" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#My_p05_p004_id">
            <FormInvalid :error="state.idNumberError">
              <InputBlock :error="state.idNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="My_p05_p004_id001"
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
      <!-- // Case : 공동인증서 선택시 노출 -->

      <!-- Case : 신용카드 선택시 노출 -->
      <div>
        <FormList>
          <FormListItem titleText="카드번호" target="#My_p05_p004_cardNumber1">
            <FormInvalid :error="state.cardNumberError">
              <InputBlock :error="state.cardNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="카드번호 첫번째 4자리"
                    id="My_p05_p004_cardNumber1"
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
                    id="My_p05_p004_cardNumber4"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="유효기간" target="#My_p05_p004_cardDate1">
            <FormInvalid :error="state.cardDateError">
              <InputBlock :error="state.cardDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="유효기간 월"
                    id="My_p05_p004_cardDate1"
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
                    id="My_p05_p004_cardDate2"
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
            target="#My_p05_p004_cardPassword"
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
                    id="My_p05_p004_cardPassword"
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

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="My_p05_p004_agreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__depth']">
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__depth-head']">
                          <CheckBox
                            id="My_p05_p004_agree_001"
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
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="My_p05_p004_agree_001_001"
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
                                id="My_p05_p004_agree_001_001_001"
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
                                id="My_p05_p004_agree_001_001_002"
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
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="My_p05_p004_agree_001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 조회 동의
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
                                id="My_p05_p004_agree_001_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 조회
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="My_p05_p004_agree_001_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별번호 필수적 조회
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="My_p05_p004_agree_001_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 제공 동의
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
                                id="My_p05_p004_agree_001_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="My_p05_p004_agree_001_003_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별번호 필수적 제공
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="My_p05_p004_agree_001_004"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              금융상품안내
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
                                id="My_p05_p004_agree_001_004_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  금융 상품 안내 동의
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
          </li>
        </ul>
      </div>
    </section>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>신청서 제출하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p05_p004.scss';
</style>
