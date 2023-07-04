<script>
// PF_P04_p003
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
    StepProgress,
    BasicBox,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    SecurityInput,
    SecurityKeypadButton,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
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
      businessNameError: false,
      businessNumberError: false,
      businessDateError: false,
      workNameError: false,
      employmentDateError: false,
      annualIncomeError: false,
      carNumberError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '개인금융',
            to: '/',
          },
          {
            text: '원큐자동차담보대출',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">원큐자동차담보대출</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">고객정보를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
      </PageSubText>
    </PageHead>

    <div>
      <FormList>
        <FormListItem
          titleText="이름"
          target="#PF_P04_p003_name"
          :disabled="true"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="PF_P04_p003_name"
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
          target="#PF_P04_p003_idNumber"
          :disabled="true"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="PF_P04_p003_idNumber"
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
      </FormList>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">소득구분</h3>
        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              name="PF_P04_p003_incomeCheck"
              id="PF_P04_p003_incomeCheck001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>급여소득자</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="PF_P04_p003_incomeCheck"
              id="PF_P04_p003_incomeCheck002"
            >
              <BoxCheckLabel>자영업자</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="PF_P04_p003_incomeCheck"
              id="PF_P04_p003_incomeCheck003"
            >
              <BoxCheckLabel>기타</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case : 자영업자 선택시 노출 -->
        <FormList :classNames="{ wrap: 'row-margin-item-group' }">
          <FormListItem titleText="상호명" target="#PF_P04_p003_businessName">
            <FormInvalid :error="state.businessNameError">
              <InputBlock :error="state.businessNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="상호명" id="PF_P04_p003_businessName" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="사업자번호"
            target="#PF_P04_p003_businessNumber"
          >
            <FormInvalid :error="state.businessNumberError">
              <InputBlock :error="state.businessNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="사업자번호"
                    id="PF_P04_p003_businessNumber"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary"
                    >확인</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="사업개시일"
            target="#PF_P04_p003_businessDateButton"
          >
            <FormInvalid :error="state.businessDateError">
              <InputBlock :error="state.businessDateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="사업개시일"
                    id="PF_P04_p003_businessDate"
                    buttonId="PF_P04_p003_businessDateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <!-- //Case : 자영업자 선택시 노출 -->

        <!-- Case : 급여소득자, 기타 선택시 노출 -->
        <section class="row-margin-container-medium">
          <h4 class="text-body-1 row-margin-item-small">
            추가한도 입력정보(선택)
          </h4>

          <p class="text-body-4 color-gray-quaternary">
            직장정보를 입력하면 한도를 높일 수 있습니다.
          </p>

          <FormList :classNames="{ wrap: 'row-margin-item-group' }">
            <FormListItem titleText="직장명" target="#PF_P04_p003_workName">
              <FormInvalid :error="state.workNameError">
                <InputBlock :error="state.workNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="직장명" id="PF_P04_p003_workName" />
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
              titleText="입사일"
              target="#PF_P04_p003_employmentDateButton"
            >
              <FormInvalid :error="state.employmentDateError">
                <InputBlock :error="state.employmentDateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="입사일"
                      id="PF_P04_p003_employmentDate"
                      buttonId="PF_P04_p003_employmentDateButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem titleText="연소득" target="#PF_P04_p003_annualIncome">
              <FormInvalid :error="state.annualIncomeError">
                <InputBlock :error="state.annualIncomeError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      type="number"
                      pattern="\d*"
                      title="연소득"
                      id="PF_P04_p003_annualIncome"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-1">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
        <!-- //Case : 급여소득자, 기타 선택시 노출 -->
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">차량정보</h3>

        <FormList>
          <FormListItem titleText="차량번호" target="#PF_P04_p003_carNumber">
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="차량번호" id="PF_P04_p003_carNumber" />
                </InputBlockCell>
              </InputBlock>

              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>예) 12가 1234</FormHelpText>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <UiAccordion :classNames="{ wrap: 'row-margin-contents' }">
          <UiAccordionItem :initialOpen="true">
            <BasicBox :className="$style['application']">
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <h3 class="text-body-1 font-weight-medium">
                    대출가능 차량 기준안내
                  </h3>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>
              <UiAccordionLayer>
                <div :class="$style['application-contents']">
                  <KeyValue margin="regular">
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

                  <NoticeText
                    :classNames="{
                      wrap: 'row-margin-contents row-margin-bottom-none',
                    }"
                  >
                    차량 조회 결과(사고금액, 침수/도난/전손여부)에 따라 대출
                    제한이 될 수 있습니다.
                  </NoticeText>
                  <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                    차량 압류/설정 여부는 자동차민원
                    대국민포털(https://ecar.go.kr)에서 조회 가능합니다.
                  </NoticeText>
                </div>
              </UiAccordionLayer>
            </BasicBox>
          </UiAccordionItem>
        </UiAccordion>
      </section>
    </div>

    <ButtonList align="full">
      <!-- Case : 차량정보 프로세스 노출 전 -->
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
      <!-- //Case : 차량정보 프로세스 노출 전 -->

      <!-- Case : 차량정보 프로세스 노출 후 -->
      <ButtonListItem>
        <BasicButton>조회</BasicButton>
      </ButtonListItem>
      <!-- //Case : 차량정보 프로세스 노출 후 -->
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P04_p003.scss';
</style>
