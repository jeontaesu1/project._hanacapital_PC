<script>
// Customer_P02_p001;
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
      name003Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      idNumber003Error: false,
      phone001Error: false,
      phone002Error: false,
      code001Error: false,
      code002Error: false,
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
        <PageTitle align="left">고객상담</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        고객상담을 위해<br />
        본인확인이 필요합니다
      </PageMainText>
    </PageHead>

    <!-- Case : 개인, 법인 선택 -->
    <BoxCheckList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <BoxCheckListItem>
        <BoxCheck
          name="Customer_P02_p001_type"
          id="Customer_P02_p001_type_001"
          :defaultChecked="true"
        >
          <BoxCheckLabel>개인 (개인사업자 포함)</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck name="Customer_P02_p001_type" id="Customer_P02_p001_type_002">
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
            name="Customer_P02_p001_method"
            id="Customer_P02_p001_method_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="Customer_P02_p001_method"
            id="Customer_P02_p001_method_002"
          >
            <BoxCheckLabel>신용카드</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <!-- Case : 휴대폰 선택시 노출 -->
      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="Customer_P02_p001_phoneAgree001"
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
                      id="Customer_P02_p001_phoneAgree001_001"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                      id="Customer_P02_p001_phoneAgree001_002"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                      id="Customer_P02_p001_phoneAgree001_003"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>본인확인 이용약관</CheckBoxLabelText>
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
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
                      id="Customer_P02_p001_phoneAgree001_004"
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
                      <button type="button" :class="$style['agree-list__link']">
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
      <div>
        <FormList>
          <FormListItem
            titleText="휴대폰번호"
            target="#Customer_P02_p001_phone001_telecom"
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
                    inputId="Customer_P02_p001_phone001_telecom"
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
            target="#Customer_P02_p001_phone001_code"
          >
            <FormInvalid :error="state.code001Error">
              <InputBlock :error="state.code001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="Customer_P02_p001_phone001_code"
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
                  id="Customer_P02_p001_phoneAgree002"
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
                        id="Customer_P02_p001_phoneAgree002_001"
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
                        id="Customer_P02_p001_phoneAgree002_002"
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
                        id="Customer_P02_p001_phoneAgree002_003"
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
                        id="Customer_P02_p001_phoneAgree002_004"
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
            target="#Customer_P02_p001_phone002_telecom"
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
                    inputId="Customer_P02_p001_phone002_telecom"
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
            target="#Customer_P02_p001_phone002_code"
          >
            <FormInvalid :error="state.code002Error">
              <InputBlock :error="state.code002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="Customer_P02_p001_phone002_code"
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

      <!-- Case : 신용카드 선택시 노출 -->
      <div>
        <FormList>
          <FormListItem
            titleText="카드번호"
            target="#Customer_P02_p001_cardNumber1"
          >
            <FormInvalid :error="state.cardNumberError">
              <InputBlock :error="state.cardNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="카드번호 첫번째 4자리"
                    id="Customer_P02_p001_cardNumber1"
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
                    id="Customer_P02_p001_cardNumber4"
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

          <FormListItem
            titleText="유효기간"
            target="#Customer_P02_p001_cardDate1"
          >
            <FormInvalid :error="state.cardDateError">
              <InputBlock :error="state.cardDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="유효기간 월"
                    id="Customer_P02_p001_cardDate1"
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
                    id="Customer_P02_p001_cardDate2"
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
            target="#Customer_P02_p001_cardPassword"
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
                    id="Customer_P02_p001_cardPassword"
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

      <!-- Case : 신용카드 선택시 노출 -->
      <ButtonListItem>
        <BasicButton>신용카드 인증</BasicButton>
      </ButtonListItem>
      <!-- // Case : 신용카드 선택시 노출 -->
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P02_p001.scss';
</style>
