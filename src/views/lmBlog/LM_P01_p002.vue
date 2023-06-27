<script>
// LM_P01_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';

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
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    SecurityKeypadButton,
    BasicSelect,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    NoticeText,
    TextButton,
    FormHelpText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionOpener,
    BasicBox,
    UiAccordionLayer,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      idNumberError: false,
      incomeTypeError: false,
      typeError: false,
      securityError: false,
      apartmentInfoError: false,
      setAmountError: false,
      residenceError: false,
      settingError: false,
      carNumberError: false,
      workNameError: false,
      workYearError: false,
      workMonthError: false,
      workIncomeError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      buisnessDateError: false,
      loanAmountError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'lmBlog004');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
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
        <PageTitle align="left">대출상담</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">계약정보를 입력하세요</PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">고객 기본정보</h3>

        <FormList>
          <FormListItem
            titleText="이름"
            target="#LM_P01_p002_name"
            :disabled="true"
          >
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="LM_P01_p002_name"
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
            target="#LM_P01_p002_idNumber"
            :disabled="true"
          >
            <FormInvalid :error="state.idNumberError">
              <InputBlock :error="state.idNumberError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="LM_P01_p002_idNumber"
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
            titleText="소득구분"
            target="#LM_P01_p002_incomeType"
            :selectOnly="true"
          >
            <FormInvalid :error="state.incomeTypeError">
              <InputBlock :error="state.incomeTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '급여소득자',
                      },
                      {
                        value: '2',
                        label: '전문직',
                      },
                      {
                        value: '3',
                        label: '자영업자',
                      },
                      {
                        value: '4',
                        label: '학생',
                      },
                      {
                        value: '5',
                        label: '주부',
                      },
                      {
                        value: '6',
                        label: '무직',
                      },
                      {
                        value: '7',
                        label: '연금소득자',
                      },
                      {
                        value: '8',
                        label: '공무원',
                      },
                      {
                        value: '9',
                        label: '기타',
                      },
                    ]"
                    title="소득구분 선택하기"
                    inputId="LM_P01_p002_incomeType"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="고객구분" :forceFocus="true">
            <FormInvalid :error="state.typeError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="LM_P01_p002_type"
                    id="LM_P01_p002_type_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>개인</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck name="LM_P01_p002_type" id="LM_P01_p002_type_002">
                    <BoxCheckLabel>사업자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="담보시세종류"
            target="#LM_P01_p002_security"
            :selectOnly="true"
          >
            <FormInvalid :error="state.securityError">
              <InputBlock :error="state.securityError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'KB부동산',
                      },
                      {
                        value: '2',
                        label: '부동산테크',
                      },
                      {
                        value: '3',
                        label: '부동산114',
                      },
                      {
                        value: '4',
                        label: '담보물 감정가액',
                      },
                      {
                        value: '5',
                        label: '분양가액',
                      },
                    ]"
                    title="담보시세종류 선택하기"
                    inputId="LM_P01_p002_security"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">아파트 정보</h3>

        <FormList>
          <FormListItem
            titleText="아파트 정보"
            target="#LM_P01_p002_apartmentInfo"
          >
            <FormInvalid :error="state.apartmentInfoError">
              <InputBlock :error="state.apartmentInfoError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="아파트 정보"
                    defaultValue="인천광역시 연수구 송도동 39-1"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="LM_P01_p002_apartmentInfo"
                    >아파트 검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.apartmentInfoError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="아파트 정보"
                    defaultValue="더샵 랜드마크시티"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '85㎡',
                      },
                      {
                        value: '2',
                        label: '100㎡',
                      },
                    ]"
                    title="평형"
                    inputId="LM_P01_p002_apartmentInfoArea"
                    :classNames="{
                      wrap: 'input-width-area',
                    }"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case: 주소 검색 및 입력 후 노출 -->

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                본인 소유 또는 배우자 공동소유만 대출진행 가능합니다.
              </NoticeText>
            </FormInvalid>
          </FormListItem>

          <!-- DD : 아파트 시세 입력 후 선택된 아파트 시세 값 자동 입력 -->
          <FormListItem titleText="시세" :disabled="true">
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="시세"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1 font-weight-medium">만원</div>
              </template>
            </InputBlock>
          </FormListItem>
          <!-- // DD : 아파트 시세 입력 후 선택된 아파트 시세 값 자동 입력 -->

          <FormListItem
            titleText="부동산 설정금액"
            titleOptionalText="(선택)"
            target="#LM_P01_p002_amount"
          >
            <FormInvalid :error="state.setAmountError">
              <InputBlock :error="state.setAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    id="LM_P01_p002_amount"
                    title="부동산 설정금액 (선택)"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1 font-weight-medium">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>

              <div class="flex-box align-items-start row-margin-item-medium">
                <div class="flex-box__cell flex-1">
                  <NoticeText>
                    등기부등본 조회버튼을 클릭하여 확인되는 하단의 채권최고액을
                    부동산설정금액란에 입력바랍니다. (근저당설정이 2건 이상일
                    경우 합산하여 입력)
                  </NoticeText>
                </div>
                <div class="flex-box__cell flex-box__cell--medium">
                  <div :class="$style['text-button']">
                    <TextButton
                      theme="secondary"
                      :underline="true"
                      :block="true"
                      textSize="regular"
                    >
                      등기부등본 조회
                    </TextButton>
                  </div>
                </div>
              </div>
            </FormInvalid>

            <!-- Case :  등기부등본 조회 버튼 클릭시 노출 -->
            <div :class="$style['estate-setting-info']">
              <section class="row-margin-container-medium">
                <h4 class="text-body-1 row-margin-item-group">
                  부동산설정정보
                </h4>

                <div :class="$style['basic-table']">
                  <table>
                    <colgroup>
                      <col style="width: 80px" />
                      <col style="width: 120px" />
                      <col style="width: 131px" />
                      <col />
                      <col style="width: 92px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>순위번호</th>
                        <th>등기목적</th>
                        <th>접수정보</th>
                        <th>주요등기사항</th>
                        <th>대상소유자</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3</td>
                        <td>근저당권설정</td>
                        <td>2021년2월5일 제4845호</td>
                        <td>
                          채권최고금액<br />금330,000,000원<br />
                          근저당권자 주식회사<br />국민은행
                        </td>
                        <td>박지혜</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Case : 부동산 기록사항 없을 때 -->
                <div :class="$style['not-table']">기록사항 없음</div>
                <!-- //Case : 부동산 기록사항 없을 때 -->
              </section>

              <section class="row-margin-container-medium">
                <h4 class="text-body-1 row-margin-item-group">
                  표제부(전유 부분의 건물의 표시) 건물내역
                </h4>
                <p class="text-body-3">철근콘크리트조60.69㎡</p>
              </section>
            </div>
            <!-- //Case : 등기부등본 조회 버튼 클릭시 노출 -->
          </FormListItem>

          <FormListItem titleText="소유지 거주여부" :forceFocus="true">
            <FormInvalid :error="state.residenceError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="LM_P01_p002_residence"
                    id="LM_P01_p002_residence01"
                  >
                    <BoxCheckLabel>예</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="LM_P01_p002_residence"
                    id="LM_P01_p002_residence02"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>아니오</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                주민등록등본 주소와 아파트 주소가 일치하면 ‘예‘, 다르면
                ‘아니오’를 선택해주세요.
              </NoticeText>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="비금융권설정여부" :forceFocus="true">
            <FormInvalid :error="state.settingError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="LM_P01_p002_setting"
                    id="LM_P01_p002_setting01"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>예</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="LM_P01_p002_setting"
                    id="LM_P01_p002_setting02"
                  >
                    <BoxCheckLabel>아니오</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">차량정보</h3>

        <FormList>
          <FormListItem titleText="차량번호" target="#LM_P01_p002_carNumber">
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="차량번호" id="LM_P01_p002_carNumber" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary">조회</BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>예) 12가 1234</FormHelpText>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <UiAccordion
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <UiAccordionItem>
            <BasicBox>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <h4 class="text-body-1 font-weight-medium">
                    대출가능 차량 기준안내
                  </h4>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['accordion-contents']">
                  <KeyValue>
                    <KeyValueItem>
                      <KeyValueTitle>차량명의</KeyValueTitle>
                      <KeyValueText>본인명의(공동명의 제외)</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>소유기간</KeyValueTitle>
                      <KeyValueText>3개월 이상 소유</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>차종</KeyValueTitle>
                      <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>차량연식</KeyValueTitle>
                      <KeyValueText>출고 이후 10년 이내</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>차량가격</KeyValueTitle>
                      <KeyValueText>
                        500만원 이상(당사 차량 시세 가격 기준)
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>차량압류 및 설정</KeyValueTitle>
                      <KeyValueText>
                        차량 압류 및 설정 내역이 있을 경우 해지 후 대출 가능
                      </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>

                  <ul class="reset-list row-margin-contents">
                    <li class="row-margin-item-medium">
                      <NoticeText>
                        차량 조회 결과(사고금액, 침수/도난/전손여부)에 따라 대출
                        제한이 될 수 있습니다.
                      </NoticeText>
                    </li>
                    <li class="row-margin-item-medium">
                      <NoticeText>
                        차량 압류/설정 여부는 자동차민원
                        대국민포털(https://ecar.go.kr)에서 조회 가능합니다.
                      </NoticeText>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </BasicBox>
          </UiAccordionItem>
        </UiAccordion>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">추가한도 얻기</h3>

        <FormList>
          <FormListItem titleText="직장명" target="#LM_P01_p002_WorkName">
            <FormInvalid :error="state.workNameError">
              <InputBlock :error="state.workNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="직장명" id="LM_P01_p002_WorkName" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary"
                    >직장 검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="입사년도"
            target="#LM_P01_p002_WorkYear"
            :selectOnly="true"
          >
            <FormInvalid :error="state.workYearError">
              <InputBlock :error="state.workYearError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '2022년',
                      },
                      {
                        value: '2',
                        label: '2021년',
                      },
                      {
                        value: '3',
                        label: '2020년',
                      },
                      {
                        value: '4',
                        label: '2019년',
                      },
                      {
                        value: '5',
                        label: '2018년',
                      },
                      {
                        value: '6',
                        label: '2017년',
                      },
                      {
                        value: '7',
                        label: '2016년',
                      },
                      {
                        value: '8',
                        label: '2015년',
                      },
                      {
                        value: '9',
                        label: '2014년',
                      },
                      {
                        value: '10',
                        label: '2013년',
                      },
                      {
                        value: '11',
                        label: '2012년',
                      },
                      {
                        value: '12',
                        label: '2011년',
                      },
                      {
                        value: '13',
                        label: '2010년',
                      },
                      {
                        value: '14',
                        label: '2009년',
                      },
                      {
                        value: '15',
                        label: '2008년',
                      },
                      {
                        value: '16',
                        label: '2007년',
                      },
                      {
                        value: '17',
                        label: '2006년',
                      },
                      {
                        value: '18',
                        label: '2005년',
                      },
                    ]"
                    title="입사년도 선택하기"
                    inputId="LM_P01_p002_WorkYear"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="입사월"
            target="#LM_P01_p002_WorkMonth"
            :selectOnly="true"
          >
            <FormInvalid :error="state.workMonthError">
              <InputBlock :error="state.workMonthError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '1월',
                      },
                      {
                        value: '2',
                        label: '2월',
                      },
                      {
                        value: '3',
                        label: '3월',
                      },
                      {
                        value: '4',
                        label: '4월',
                      },
                      {
                        value: '5',
                        label: '5월',
                      },
                      {
                        value: '6',
                        label: '6월',
                      },
                      {
                        value: '7',
                        label: '7월',
                      },
                      {
                        value: '8',
                        label: '8월',
                      },
                      {
                        value: '9',
                        label: '9월',
                      },
                      {
                        value: '10',
                        label: '10월',
                      },
                      {
                        value: '11',
                        label: '11월',
                      },
                      {
                        value: '12',
                        label: '12월',
                      },
                    ]"
                    title="입사월 선택하기"
                    inputId="LM_P01_p002_WorkMonth"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="연소득" target="#LM_P01_p002_workIncome">
            <FormInvalid :error="state.workIncomeError">
              <InputBlock :error="state.workIncomeError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="연소득"
                    id="LM_P01_p002_workIncome"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1 font-weight-medium">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">사업자 정보</h3>

        <FormList>
          <FormListItem titleText="사업자명" target="#LM_P01_p002_buisnessName">
            <FormInvalid :error="state.buisnessNameError">
              <InputBlock :error="state.buisnessNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="사업자명" id="LM_P01_p002_buisnessName" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="tertiary"
                    >KCB사업자조회</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업자등록번호"
            target="#LM_P01_p002_buisnessLicense"
          >
            <FormInvalid :error="state.buisnessLicenseError">
              <InputBlock :error="state.buisnessLicenseError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="사업자등록번호"
                    id="LM_P01_p002_buisnessLicense"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업게시일자"
            target="#LM_P01_p002_buisnessDate"
          >
            <FormInvalid :error="state.buisnessDateError">
              <InputBlock :error="state.buisnessDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업게시일자"
                    id="LM_P01_p002_buisnessDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <BasicHr theme="quaternary" className="row-margin-block" />

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">대출신청정보</h3>

        <FormList>
          <FormListItem
            titleText="대출신청금액"
            target="#LM_P01_p002_loanAmount"
          >
            <FormInvalid :error="state.loanAmountError">
              <InputBlock :error="state.loanAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출신청금액"
                    id="LM_P01_p002_loanAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1 font-weight-medium">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#LM_P01_p002_loanPeriod"
            :selectOnly="true"
          >
            <FormInvalid :error="state.loanPeriodError">
              <InputBlock :error="state.loanPeriodError">
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
                    title="대출기간 선택하기"
                    inputId="LM_P01_p002_loanPeriod"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">대출상담사 정보</h3>

        <BasicBox>
          <KeyValue wrap="true">
            <KeyValueItem>
              <KeyValueTitle>영업센터</KeyValueTitle>
              <KeyValueText>서울소비자금융센터</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>대출상담사</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
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
@import '@/assets/scss/views/lmBlog/LM_P01_p002.scss';
</style>
