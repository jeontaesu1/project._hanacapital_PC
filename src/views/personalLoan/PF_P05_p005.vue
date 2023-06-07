<script>
// PF_P05_p005
import { reactive } from 'vue';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    BasicButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicDatepicker,
    FormHelpText,
    TextButton,
    NoticeText,
    ButtonList,
    ButtonListItem,
    IconLogo,
    IconLink,
  },

  setup() {
    const state = reactive({
      idNumberError: false,
      mailError: false,
      homeNumberError: false,
      phoneError: false,
      addressError001: false,
      addressError002: false,
      dayError001: false,
      bankError: false,
      dateError: false,
      MethodSelectError: false,
      addressMethodSelectError: false,
      amountError: false,
      rateError: false,
      methodError: false,
      commissionError: false,
      residenceTypeError: false,
      additionalTypeError: false,
      routeError: false,
      objectError: false,
      ownerError: false,
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
        <PageTitle align="left">우수고객추가대출</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">손님 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <FormList>
          <FormListItem
            titleText="이름"
            :disabled="true"
            target="#PF_P05_p005_name"
          >
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  defaultValue="김하나"
                  :disabled="true"
                  id="PF_P05_p005_name"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>

          <FormListItem
            titleText="이메일"
            titleOptionalText="(선택)"
            target="#PF_P05_p005_EmailId"
          >
            <FormInvalid :error="state.mailError">
              <InputBlock :error="state.mailError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이메일 아이디" id="PF_P05_p005_EmailId" />
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
                    ]"
                    title="이메일 도메인"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="자택전화번호"
            titleOptionalText="(선택)"
            target="#PF_P05_p005_homeNumber"
          >
            <FormInvalid :error="state.homeNumberError">
              <InputBlock :error="state.homeNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택전화번호"
                    id="PF_P05_p005_homeNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대전화번호" target="#PF_P05_p005_phone">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="휴대전화번호" id="PF_P05_p005_phone" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="자택주소"
            target="#PF_P05_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P05_p005_addressSerachButton"
                    >주소검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">신분증 정보</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              소지하고 계신 신분증종류를 선택하여 주세요.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              특정금융거래정보의 보고 및 이용 등에 관한 법률 제5조 2에 따라
              고객확인을 위해 신분증 개인 등의 확인이 필요합니다. 만일 정보/자료
              제출이 안될 경우 본 금융거래가 거절 또는 중단될 수 있습니다.
            </div>
          </li>
        </ul>

        <BoxCheckList :classNames="{ wrap: 'row-margin-container-medium' }">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="PF_P05_p005_checkBox001"
              id="PF_P05_p005_checkBox001_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>주민등록증</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="PF_P05_p005_checkBox001"
              id="PF_P05_p005_checkBox001_002"
            >
              <BoxCheckLabel>운전면허증</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <FormList>
          <!-- Case : '주민등록증' 선택 시  -->
          <FormListItem
            titleText="발급일자"
            target="#PF_P05_p005_day_001_Button"
          >
            <FormInvalid :error="state.dayError001">
              <InputBlock :error="state.dayError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="발급일자"
                    id="PF_P05_p005_day_001"
                    buttonId="PF_P05_p005_day_001_Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '주민등록증' 선택 시  -->

          <!-- Case : '운전면허증' 선택 시  -->
          <FormListItem
            titleText="면허발급번호"
            target="#PF_P05_p005_license001"
          >
            <FormInvalid :error="state.licenseError">
              <InputBlock :error="state.licenseError">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '서울 (11)',
                      },
                      {
                        value: '2',
                        label: '부산 (12)',
                      },
                      {
                        value: '3',
                        label: '경기 (13)',
                      },
                      {
                        value: '4',
                        label: '강원 (14)',
                      },
                      {
                        value: '5',
                        label: '충북 (15)',
                      },
                      {
                        value: '6',
                        label: '충남 (16)',
                      },
                      {
                        value: '7',
                        label: '전북 (17)',
                      },
                      {
                        value: '8',
                        label: '경남 (18)',
                      },
                      {
                        value: '9',
                        label: '제주 (19)',
                      },
                      {
                        value: '10',
                        label: '대구 (20)',
                      },
                      {
                        value: '11',
                        label: '인천 (21)',
                      },
                      {
                        value: '12',
                        label: '광주 (22)',
                      },
                      {
                        value: '13',
                        label: '대전 (23)',
                      },
                      {
                        value: '14',
                        label: '울산 (24)',
                      },
                    ]"
                    title="면허발급번호 지역번호 선택하기"
                    inputId="PF_P05_p005_license001"
                    :classNames="{
                      wrap: 'input-width-driving-license',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="면허발급번호 앞 2자리"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell
                  :classNames="{
                    cell: 'flex-2',
                  }"
                  margin="regular"
                >
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="면허발급번호 두번째 6자리"
                    :useDelete="false"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="면허발급번호 뒤 2자리"
                    :useDelete="false"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '운전면허증' 선택 시  -->
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>진위여부확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">결제 정보</h3>

        <FormList>
          <FormListItem
            titleText="은행명"
            target="#PF_P05_p005_bank"
            :selectOnly="true"
          >
            <FormInvalid :error="state.bankError">
              <InputBlock :error="state.bankError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '하나은행',
                      },
                    ]"
                    title="은행명"
                    inputId="PF_P05_p005_bank"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="계좌번호"
            target="#PF_P05_p005_accountNumber"
          >
            <FormInvalid :error="state.workplaceNameError001">
              <InputBlock :error="state.workplaceNameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="계좌번호" id="PF_P05_p005_accountNumber" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary">
                    1원 인증
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>‘-’없이 숫자만 입력</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="결제일"
            target="#PF_P05_p005_date"
            :selectOnly="true"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
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
                    title="결제일"
                    inputId="PF_P05_p005_date"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="청구방법"
            target="#PF_P05_p005_Method"
            :selectOnly="true"
          >
            <FormInvalid :error="state.MethodSelectError">
              <InputBlock :error="state.MethodSelectError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '미발송',
                      },
                      {
                        value: '2',
                        label: '온라인(SMS)',
                      },
                      {
                        value: '3',
                        label: '우편',
                      },
                      {
                        value: '4',
                        label: '이메일',
                      },
                      {
                        value: '5',
                        label: '우편+이메일',
                      },
                      {
                        value: '6',
                        label: '우편(지속)',
                      },
                    ]"
                    title="청구방법"
                    inputId="PF_P05_p005_Method"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="청구지"
            target="#PF_P05_p005_addressMethod"
            :selectOnly="true"
          >
            <FormInvalid :error="state.addressMethodSelectError">
              <InputBlock :error="state.addressMethodSelectError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label:
                          '22742 인천 서구 에코로 181 하나금융그룹통합데이터센터',
                      },
                    ]"
                    title="청구지"
                    inputId="PF_P05_p005_addressMethod"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div :class="$style['join']">
          <div :class="$style['join__inner']">
            <div :class="$style['join__icon']"><IconLogo /></div>
            <div :class="$style['join__title']">
              하나은행 계좌가 없으신가요?
            </div>
            <TextButton
              :block="true"
              :classNames="{
                wrap: [$style['join__link'], 'color-gray-tertiary'],
              }"
            >
              비대면 개설
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-small">대출신청정보</h3>
        <div class="text-body-1 color-gray-secondary font-weight-light">
          대출조건 변경 시 한도 및 금리 등이 변경될 수 있으므로 반드시 약정서를
          확인하여 주시기 바랍니다.
        </div>

        <FormList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <FormListItem titleText="대출신청금액" target="#PF_P05_p005_Amount">
            <FormInvalid :error="state.amountError">
              <InputBlock :error="state.amountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출신청금액"
                    id="PF_P05_p005_Amount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText
                :classNames="{
                  wrap: 'row-margin-item-medium',
                }"
                >대출가능한도 20,000만원</NoticeText
              >
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출금리"
            target="#PF_P05_p005_rate"
            :disabled="true"
          >
            <FormInvalid :error="state.rateError">
              <InputBlock :error="state.rateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출금리"
                    id="PF_P05_p005_rate"
                    pattern="\d*"
                    :useDelete="false"
                    :disabled="true"
                    defaultValue="13.2%"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText
                :classNames="{
                  wrap: 'color-red row-margin-item-medium',
                }"
                >대출가능한도 20,000만원</NoticeText
              >
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#PF_P05_p005_period"
            :selectOnly="true"
          >
            <FormInvalid :error="state.periodError">
              <InputBlock :error="state.periodError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '12개월',
                      },
                      {
                        value: '2',
                        label: '24개월',
                      },
                      {
                        value: '3',
                        label: '36개월',
                      },
                      {
                        value: '4',
                        label: '48개월',
                      },
                      {
                        value: '5',
                        label: '60개월',
                      },
                      {
                        value: '6',
                        label: '72개월',
                      },
                      {
                        value: '7',
                        label: '84개월',
                      },
                      {
                        value: '8',
                        label: '96개월',
                      },
                      {
                        value: '9',
                        label: '108개월',
                      },
                      {
                        value: '10',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="PF_P05_p005_period"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="상환방법"
            target="#PF_P05_p005_inputMethod"
            :disabled="true"
          >
            <FormInvalid :error="state.methodError">
              <InputBlock :error="state.methodError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="상환방법"
                    id="PF_P05_p005_inputMethod"
                    defaultValue="원리금균등분할상환"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="중도상환수수료"
            target="#PF_P05_p005_commission"
            :disabled="true"
          >
            <FormInvalid :error="state.commissionError">
              <InputBlock :error="state.commissionError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="중도상환수수료"
                    id="PF_P05_p005_inputMethod"
                    defaultValue="0%"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">부가 정보</h3>

        <FormList>
          <FormListItem
            titleText="주거형태"
            target="#PF_P05_p005_residenceType"
            :selectOnly="true"
          >
            <FormInvalid :error="state.residenceTypeError">
              <InputBlock :error="state.residenceTypeError">
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
                    inputId="PF_P05_p005_residenceType"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="주택소유구분"
            target="#PF_P05_p005_additionalType"
            :selectOnly="true"
          >
            <FormInvalid :error="state.additionalTypeError">
              <InputBlock :error="state.additionalTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '본인소유',
                      },
                      {
                        value: '2',
                        label: '전/월세',
                      },
                      {
                        value: '3',
                        label: '기타',
                      },
                    ]"
                    title="주택소유구분"
                    inputId="PF_P05_p005_additionalType"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="상품인지경로"
            target="#PF_P05_p005_route"
            :selectOnly="true"
          >
            <FormInvalid :error="state.routeError">
              <InputBlock :error="state.routeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '직접 방문',
                      },
                      {
                        value: '2',
                        label: '택배',
                      },
                      {
                        value: '3',
                        label: '기타',
                      },
                    ]"
                    title="상품인지경로"
                    inputId="PF_P05_p005_route"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출목적"
            target="#PF_P05_p005_object"
            :selectOnly="true"
          >
            <FormInvalid :error="state.objectError">
              <InputBlock :error="state.objectError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '차량구입자금',
                      },
                      {
                        value: '2',
                        label: '주택자금',
                      },
                      {
                        value: '3',
                        label: '경조사금',
                      },
                      {
                        value: '4',
                        label: '타기관 대출금상환',
                      },
                      {
                        value: '5',
                        label: '교육비',
                      },
                      {
                        value: '6',
                        label: '의료비',
                      },
                      {
                        value: '7',
                        label: '사업자금(운전자금)',
                      },
                      {
                        value: '8',
                        label: '가계자금',
                      },
                      {
                        value: '9',
                        label: '기타',
                      },
                    ]"
                    title="대출목적선택하기"
                    inputId="PF_P05_p005_object"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="거래자금의 원천"
            target="#PF_P05_p005_source"
            :disabled="true"
          >
            <FormInvalid :error="state.sourceError">
              <InputBlock :error="state.sourceError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="거래자금의 원천"
                    id="PF_P05_p005_source"
                    defaultValue="대출금"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="실제소유자 확인"
            target="#PF_P05_p005_owner"
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
                    ]"
                    title="실제소유자 확인"
                    inputId="PF_P05_p005_owner"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
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
@import '@/assets/scss/views/personalLoan/PF_P05_p005.scss';
</style>
