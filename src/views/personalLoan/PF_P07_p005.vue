<script>
// PF_P07_p005
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    BasicDatepicker,
    SecurityKeypadButton,
    SecurityInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      idNumber001Error: false,
      possibleAmountError: false,
      accountError: false,
      applicationAmountError: false,
      date001Error: false,
      ownerError: false,
      customerError: false,
      incomeTypeError: false,
      name002Error: false,
      idNumber002Error: false,
      address001Error: false,
      address002Error: false,
      telephoneError: false,
      phoneError: false,
      mailError: false,
      marriageTypeError: false,
      liveTogetherError: false,
      ownershipError: false,
      residentialTypeError: false,
      year001Error: false,
      academicAbilityError: false,
      workNameError: false,
      departmentError: false,
      jobGroupError: false,
      jobCategoryError: false,
      year002Error: false,
      telephone002Error: false,
      faxError: false,
      address003Error: false,
      buisnessLicenseError: false,
      date002Error: false,
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
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="7" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        대출 정보와 거래유형을 입력해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">대출 정보 입력</h3>
          <p class="text-body-1 color-gray-secondary font-weight-light">
            이자 및 만기관련 내용을 서면통보하지 않습니다.
          </p>
        </div>

        <FormList>
          <FormListItem
            titleText="이름"
            target="#PF_P07_p005_Name001"
            :disabled="true"
          >
            <FormInvalid :error="state.name001Error">
              <InputBlock :error="state.name001Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="PF_P07_p005_Name001"
                    defaultValue="김하나"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주민등록번호"
            target="#PF_P07_p005_idNumber001"
            :disabled="true"
          >
            <FormInvalid :error="state.idNumber001Error">
              <InputBlock :error="state.idNumber001Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="PF_P07_p005_idNumber001"
                    defaultValue="123456"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, true, true, true, true]"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton :disabled="true" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출가능금액"
            target="#PF_P07_p005_PossibleAmount"
          >
            <FormInvalid :error="state.possibleAmountError">
              <InputBlock :error="state.possibleAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출가능금액"
                    id="PF_P07_p005_PossibleAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">백만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="증권계좌"
            target="#PF_P07_p005_Account"
            :disabled="true"
          >
            <FormInvalid :error="state.accountError">
              <InputBlock :error="state.accountError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="증권계좌"
                    id="PF_P07_p005_Account"
                    defaultValue="123456789012"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출신청금액"
            target="#PF_P07_p005_ApplicationAmount"
          >
            <FormInvalid :error="state.applicationAmountError">
              <InputBlock :error="state.applicationAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출신청금액"
                    id="PF_P07_p005_ApplicationAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">백만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="결제일자"
            target="#PF_P07_p005_date001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.date001Error">
              <InputBlock :error="state.date001Error">
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
                    inputId="PF_P07_p005_date001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText
                :classNames="{ wrap: 'color-red row-margin-item-medium' }"
              >
                결제일자는 변경되지 않습니다.
              </NoticeText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="실제 소유자 확인"
            target="#PF_P07_p005_owner"
            :selectOnly="true"
          >
            <FormInvalid :error="state.ownerError">
              <InputBlock :error="state.ownerError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '본인',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="실제 소유자 확인"
                    inputId="PF_P07_p005_owner"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">거래유형</h3>
          <p class="text-body-1 color-gray-secondary font-weight-light">
            자세한 내용은 계좌운용규칙을 참고하여 주시기 바랍니다.
          </p>
        </div>

        <BasicBox>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>계좌담보평가액</KeyValueTitle>
              <KeyValueText>5천만원 이하</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>최저유지담보비율</KeyValueTitle>
              <KeyValueText>120%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>집중투자비율</KeyValueTitle>
              <KeyValueText>50%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출시 초기담보비율</KeyValueTitle>
              <KeyValueText>140%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>최대대출가능비율</KeyValueTitle>
              <KeyValueText>250%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>수익금인출가능비율</KeyValueTitle>
              <KeyValueText>130%</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <!-- Case : 대출 정보 입력 및 다음 버튼 클릭 시 노출 -->
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">손님정보</h3>

        <FormList>
          <FormListItem
            titleText="고객구분"
            target="#PF_P07_p005_Customer"
            :require="true"
            :disabled="true"
          >
            <FormInvalid :error="state.customerError">
              <InputBlock :error="state.customerError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="고객구분"
                    id="PF_P07_p005_Customer"
                    defaultValue="개인"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="소득구분" :forceFocus="true" :require="true">
            <FormInvalid :error="state.incomeTypeError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="PF_P07_p005_incomeType"
                    id="PF_P07_p005_incomeType001"
                  >
                    <BoxCheckLabel>급여소득자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="PF_P07_p005_incomeType"
                    id="PF_P07_p005_incomeType002"
                  >
                    <BoxCheckLabel>자영업자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="PF_P07_p005_incomeType"
                    id="PF_P07_p005_incomeType003"
                  >
                    <BoxCheckLabel>기타</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="이름"
            target="#PF_P07_p005_Name002"
            :require="true"
            :disabled="true"
          >
            <FormInvalid :error="state.name002Error">
              <InputBlock :error="state.name002Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="PF_P07_p005_Name002"
                    defaultValue="김하나"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주민등록번호"
            target="#PF_P07_p005_idNumber002"
            :require="true"
            :disabled="true"
          >
            <FormInvalid :error="state.idNumber002Error">
              <InputBlock :error="state.idNumber002Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="PF_P07_p005_idNumber002"
                    defaultValue="123456"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, true, true, true, true]"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton :disabled="true" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="자택주소"
            :forceFocus="true"
            :require="true"
            target="#PF_P07_p005_address001Search"
          >
            <FormInvalid :error="state.address001Error">
              <InputBlock :error="state.address001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 우편번호"
                    :disabled="true"
                    defaultValue="06123"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P07_p005_address001Search"
                  >
                    주소검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- Case : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.address001Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 도로명 주소"
                    :disabled="true"
                    defaultValue="서울 중구 을지로 35"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.address001Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 상세 주소"
                    :disabled="true"
                    defaultValue="1205호"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case : 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="기타주소"
            titleOptionalText="(선택)"
            :forceFocus="true"
            target="#PF_P07_p005_address002Search"
          >
            <FormInvalid :error="state.address002Error">
              <InputBlock :error="state.address002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="기타주소 우편번호"
                    :disabled="true"
                    defaultValue="06123"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P07_p005_address002Search"
                  >
                    주소검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- Case : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.address002Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="기타주소 도로명 주소"
                    :disabled="true"
                    defaultValue="서울 중구 을지로 35"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.address002Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="기타주소 상세 주소"
                    :disabled="true"
                    defaultValue="1205호"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case : 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="자택전화번호"
            :require="true"
            target="#PF_P07_p005_telephone"
          >
            <FormInvalid :error="state.telephoneError">
              <InputBlock :error="state.telephoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="자택전화번호"
                    id="PF_P07_p005_telephone"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대전화번호"
            :require="true"
            target="#PF_P07_p005_phone"
          >
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="휴대전화번호"
                    id="PF_P07_p005_phone"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="이메일"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_mailId"
          >
            <FormInvalid :error="state.mailError">
              <InputBlock :error="state.mailError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이메일 아이디" id="PF_P07_p005_mailId" />
                </InputBlockCell>
                <InputBlockCell margin="regular">@</InputBlockCell>
                <InputBlockCell margin="regular" :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'naver.com',
                      },
                      {
                        value: '2',
                        label: 'hanmail.net',
                      },
                      {
                        value: '3',
                        label: 'gmail.com',
                      },
                      {
                        value: '4',
                        label: 'nate.com',
                      },
                      {
                        value: '5',
                        label: 'paran.com',
                      },
                      {
                        value: '6',
                        label: 'dreamwiz.com',
                      },
                      {
                        value: '7',
                        label: 'yahoo.com',
                      },
                      {
                        value: '8',
                        label: 'freechal.com',
                      },
                      {
                        value: '9',
                        label: '직접입력',
                      },
                    ]"
                    title="이메일 도메인 선택"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- Case : 직접입력 선택 시 노출 -->
              <InputBlock
                :error="state.mailError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이메일 도메인 직접입력"
                    id="PF_P07_p005_mailDomainSelf"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case : 직접입력 선택 시 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="결혼여부"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_marriageType"
            :selectOnly="true"
          >
            <FormInvalid :error="state.marriageTypeError">
              <InputBlock :error="state.marriageTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '미혼',
                      },
                      {
                        value: '2',
                        label: '기혼',
                      },
                    ]"
                    title="결혼여부"
                    inputId="PF_P07_p005_marriageType"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="가족동거사항"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_liveTogether"
            :selectOnly="true"
          >
            <FormInvalid :error="state.liveTogetherError">
              <InputBlock :error="state.liveTogetherError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '없음',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="가족동거사항"
                    inputId="PF_P07_p005_liveTogether"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주택소유"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_ownership"
            :selectOnly="true"
          >
            <FormInvalid :error="state.ownershipError">
              <InputBlock :error="state.ownershipError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '본인소유',
                      },
                      {
                        value: '2',
                        label: '배우자소유',
                      },
                      {
                        value: '3',
                        label: '가족소유',
                      },
                      {
                        value: '4',
                        label: '공동소유',
                      },
                      {
                        value: '5',
                        label: '전/월세',
                      },
                      {
                        value: '6',
                        label: '기타',
                      },
                      {
                        value: '7',
                        label: '무응답',
                      },
                    ]"
                    title="주택소유"
                    inputId="PF_P07_p005_ownership"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주거형태"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_residentialType"
            :selectOnly="true"
          >
            <FormInvalid :error="state.residentialTypeError">
              <InputBlock :error="state.residentialTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '아파트',
                      },
                      {
                        value: '2',
                        label: '오피스텔',
                      },
                      {
                        value: '3',
                        label: '단독주택',
                      },
                      {
                        value: '4',
                        label: '빌라/연립',
                      },
                      {
                        value: '5',
                        label: '다가구/다세대',
                      },
                      {
                        value: '6',
                        label: '사택',
                      },
                      {
                        value: '7',
                        label: '기술사',
                      },
                      {
                        value: '8',
                        label: '분양아파트',
                      },
                      {
                        value: '9',
                        label: '기타',
                      },
                      {
                        value: '10',
                        label: '무응답',
                      },
                    ]"
                    title="주거형태"
                    inputId="PF_P07_p005_residentialType"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="거주년수"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_year001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.year001Error">
              <InputBlock :error="state.year001Error">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '6개월 이하',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="거주년수"
                    inputId="PF_P07_p005_year001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="학력"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_academicAbility"
            :selectOnly="true"
          >
            <FormInvalid :error="state.academicAbilityError">
              <InputBlock :error="state.academicAbilityError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '석사',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="학력"
                    inputId="PF_P07_p005_academicAbility"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
      <!-- // Case : 대출 정보 입력 및 다음 버튼 클릭 시 노출 -->

      <!-- Case : 손님정보 입력 및 다음 버튼 클릭 시 노출 -->
      <section class="row-margin-block-small">
        <h3 class="text-title-1">직장 정보 입력</h3>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="직장명/상호명"
            :require="true"
            target="#PF_P07_p005_workName"
          >
            <FormInvalid :error="state.workNameError">
              <InputBlock :error="state.workNameError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput title="직장명/상호명" id="PF_P07_p005_workName" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="부서명"
            :require="true"
            target="#PF_P07_p005_department"
          >
            <FormInvalid :error="state.departmentError">
              <InputBlock :error="state.departmentError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput title="부서명" id="PF_P07_p005_department" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="직군/직장"
            target="#PF_P07_p005_jobGroup"
            :require="true"
          >
            <FormInvalid :error="state.jobGroupError">
              <InputBlock :error="state.jobGroupError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '행정',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="직군"
                    inputId="PF_P07_p005_jobGroup"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '기타',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="직장"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="직종/직위"
            target="#PF_P07_p005_jobCategory"
            :require="true"
          >
            <FormInvalid :error="state.jobCategoryError">
              <InputBlock :error="state.jobCategoryError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '사무',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="직종"
                    inputId="PF_P07_p005_jobCategory"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '사원',
                      },
                      {
                        value: '2',
                        label: 'option 2',
                      },
                      {
                        value: '3',
                        label: 'option 3',
                      },
                    ]"
                    title="직위"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업/근속년수"
            :require="true"
            target="#PF_P07_p005_year002"
            :selectOnly="true"
          >
            <FormInvalid :error="state.year002Error">
              <InputBlock :error="state.year002Error">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '6개월 이하',
                      },
                      {
                        value: '2',
                        label: '1년 이하',
                      },
                      {
                        value: '3',
                        label: '2년 이하',
                      },
                      {
                        value: '4',
                        label: '3년 이하',
                      },
                      {
                        value: '5',
                        label: '4년 이하',
                      },
                      {
                        value: '6',
                        label: '6년 이하',
                      },
                      {
                        value: '7',
                        label: '7년 이하',
                      },
                      {
                        value: '8',
                        label: '8년 이하',
                      },
                      {
                        value: '9',
                        label: '9년 이하',
                      },
                      {
                        value: '10',
                        label: '10년 이하',
                      },
                      {
                        value: '11',
                        label: '10년 초과',
                      },
                      {
                        value: '12',
                        label: '무응답',
                      },
                    ]"
                    title="사업/근속년수"
                    inputId="PF_P07_p005_year002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="직장전화번호"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_telephone002"
          >
            <FormInvalid :error="state.telephone002Error">
              <InputBlock :error="state.telephone002Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="직장전화번호"
                    id="PF_P07_p005_telephone002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="직장팩스번호"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_fax"
          >
            <FormInvalid :error="state.faxError">
              <InputBlock :error="state.faxError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="직장팩스번호"
                    id="PF_P07_p005_fax"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="직장주소"
            :forceFocus="true"
            :require="true"
            target="#PF_P07_p005_address003Search"
          >
            <FormInvalid :error="state.address003Error">
              <InputBlock :error="state.address003Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장주소 우편번호"
                    :disabled="true"
                    defaultValue="06123"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P07_p005_address003Search"
                  >
                    주소검색
                  </BasicButton>
                </template>
              </InputBlock>
              <!-- Case : 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.address003Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장주소 도로명 주소"
                    :disabled="true"
                    defaultValue="서울 중구 을지로 35"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.address003Error"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장주소 상세 주소"
                    :disabled="true"
                    defaultValue="1205호"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case : 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업자등록번호"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_buisnessLicense"
          >
            <FormInvalid :error="state.buisnessLicenseError">
              <InputBlock :error="state.buisnessLicenseError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="사업자등록번호"
                    id="PF_P07_p005_buisnessLicense"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="개업일"
            titleOptionalText="(선택)"
            target="#PF_P07_p005_date002Button"
          >
            <FormInvalid :error="state.date002Error">
              <InputBlock :error="state.date002Error">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="개업일"
                    id="PF_P07_p005_date002"
                    buttonId="PF_P07_p005_date002Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
      <!-- // Case : 손님정보 입력 및 다음 버튼 클릭 시 노출 -->
    </div>

    <!-- Case : 손님정보 입력 및 다음 버튼 클릭 시 노출 -->
    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular-margin'],
        'row-margin-container-medium row-margin-bottom-none',
      ]"
    >
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          ‘특정금융거래보고 및 이용 등에 관한 법률‘에 따라 금융거래 시
          손님께서는 위의 내용을 제공하셔야 하며, 제공하신 정보는 동법의 용도
          외의 목적으로 사용되지 않습니다. 금융기간의 기재된 정보를 검증하기
          위하여 추가적인 문서와 자료를 요청할 수 있으며, 요청된 정보제출을
          거부하거나 검증이 충분히 수행되지 않을 경우에는 금융거래가 제한될 수
          있습니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          금융기관에서 파악한 정보는 기본적으로 외부에 제공되지 않으며, 고객의
          정보는 자금세탁방지 목적으로만 관리하고, ‘금융설명법‘ 및 ‘신용정보법‘
          등에 의해 금융기관 임직원이 이를 누설하는 것을 엄격히 금지하고
          있습니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          본 상품은 손님의 증권계좌에 있는 예수금 및 유가증권 자산을 담보로 하여
          주식매매를 목적으로 하는 주식매입자금대출입니다. 또한, 이와 관련하여
          스탁론 거래자금의 원천은 대출금 임을 확인합니다. 있습니다.
        </div>
      </li>
    </ul>
    <!-- // Case : 손님정보 입력 및 다음 버튼 클릭 시 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p005.scss';
</style>
