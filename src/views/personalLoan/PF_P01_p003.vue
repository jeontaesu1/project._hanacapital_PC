<script>
// PF_P01_p003
import { reactive } from 'vue';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    FormList,
    FormListItem,
    FormHelpText,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SecurityInput,
    SecurityKeypadButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicDatepicker,
  },

  setup() {
    const state = reactive({
      typeError: false,
      workplaceNameError001: false,
      workplaceNameError002: false,
      dayError001: false,
      dayError002: false,
      incomeError: false,
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
        <PageTitle align="left">e하나신용대출</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        소득정보 자동 제출을 진행해 주세요
      </PageMainText>
    </PageHead>

    <div>
      <div class="row-margin-block-small">
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
              건강보험공단 또는 국민연금공단, 국세청의 소득정보(자격득실 및
              보험료 납부확인서, 소득금액증명원)를 자동제출합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              iSASService 모듈 설치가 필요합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우
              거래관계의 설정 또는 유지가 불가능할 수 있음을 알려드립니다.
            </div>
          </li>
        </ul>
      </div>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          건강보험공단/국민연금공단 정보 이용 동의
        </h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="PF_P01_p003_agree001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >소득정보 자동산출 약관</CheckBoxLabelText
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
            </li>
          </ul>
        </div>
      </section>

      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">고객정보</h3>
          <div class="text-body-1 color-gray-secondary font-weight-light">
            실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
          </div>
        </div>

        <FormList>
          <FormListItem
            titleText="이름"
            :disabled="true"
            target="#PF_P01_p003_name"
          >
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  defaultValue="김하나"
                  :disabled="true"
                  id="PF_P01_p003_name"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>

          <FormListItem
            titleText="주민등록번호"
            target="#PF_P01_p003_id"
            :disabled="true"
          >
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="PF_P01_p003_id"
                  :disabled="true"
                  defaultValue="951222"
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
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">소득구분</h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="PF_P01_p003_checkBox001"
              id="PF_P01_p003_checkBox001_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>급여소득자</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="PF_P01_p003_checkBox001"
              id="PF_P01_p003_checkBox001_002"
            >
              <BoxCheckLabel>자영업자</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="PF_P01_p003_checkBox001"
              id="PF_P01_p003_checkBox001_003"
            >
              <BoxCheckLabel>기타</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <FormList :classNames="{ wrap: 'row-margin-container-medium' }">
          <!-- Case : '급여소득자' 선택 시  -->
          <FormListItem
            titleText="직장명"
            target="#PF_P01_p003_workplaceName001Button"
          >
            <FormInvalid :error="state.workplaceNameError001">
              <InputBlock :error="state.workplaceNameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="직장명" :disabled="true" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P01_p003_workplaceName001Button"
                  >
                    직장 검색
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="입사일" target="#PF_P01_p003_day_001_Button">
            <FormInvalid :error="state.dayError001">
              <InputBlock :error="state.dayError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="입사일"
                    id="PF_P01_p003_day_001"
                    buttonId="PF_P01_p003_day_001_Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="연소득" target="#PF_P01_p003_income">
            <FormInvalid :error="state.incomeError">
              <InputBlock :error="state.incomeError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    type="number"
                    pattern="\d*"
                    title="연소득"
                    id="PF_P01_p003_income"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-1">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '급여소득자' 선택 시  -->

          <!-- Case : '자영업자' 선택 시  -->
          <FormListItem
            titleText="상호명"
            target="#PF_P01_p003_WorkplaceName001"
          >
            <FormInvalid :error="state.workplaceNameError002">
              <InputBlock :error="state.workplaceNameError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="상호명"
                    id="PF_P01_p003_WorkplaceName001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업자번호"
            target="#PF_P01_p003_businessNumber"
          >
            <FormInvalid :error="state.businessNumberError">
              <InputBlock :error="state.businessNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업자번호"
                    id="PF_P01_p003_businessNumber"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    확인
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업개시일"
            target="#PF_P01_p003_day_002_Button"
          >
            <FormInvalid :error="state.dayError002">
              <InputBlock :error="state.dayError002">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="사업개시일"
                    id="PF_P01_p003_day_002"
                    buttonId="PF_P01_p003_day_002_Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '자영업자' 선택 시  -->
        </FormList>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p003.scss';
</style>
