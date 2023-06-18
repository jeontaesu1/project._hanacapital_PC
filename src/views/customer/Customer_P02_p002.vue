<script>
// Customer_P02_p002
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalid,
    BasicInput,
    FormInvalidMessage,
    BasicTextarea,
    FormHelpText,
  },

  setup() {
    const state = reactive({
      typeError: false,
      nameError: false,
      birthNumberError: false,
      phoneError: false,
      mailError: false,
      counselingError: false,
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
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        약관 동의 후 상담 내용을 입력해 주세요
      </PageMainText>
    </PageHead>

    <div>// 약관 UI 대기</div>

    <!-- Case : 다음 누른 후 비노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 다음 누른 후 비노출 -->

    <!-- Case : 다음 누른 후 노출 -->
    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">상담 내용 입력</h3>

      <FormList>
        <FormListItem
          titleText="문의분야"
          titleOptionalText="(일반문의)"
          target="#Customer_P02_p002_type"
          :selectOnly="true"
        >
          <FormInvalid :error="state.typeError">
            <InputBlock :error="state.typeError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '정보 변경',
                    },
                    {
                      value: '2',
                      label: '제증명발급',
                    },
                    {
                      value: '3',
                      label: '상환문의',
                    },
                    {
                      value: '4',
                      label: '기타문의',
                    },
                    {
                      value: '5',
                      label: '홈페이지관련',
                    },
                    {
                      value: '6',
                      label: '채용관련',
                    },
                    {
                      value: '7',
                      label: '청약철회신청',
                    },
                  ]"
                  title="문의분야"
                  inputId="Customer_P02_p002_type"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이름" target="#Customer_P02_p002_name">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="Customer_P02_p002_name" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="생년월일" target="#Customer_P02_p002_birth">
          <FormInvalid :error="state.birthNumberError">
            <InputBlock :error="state.birthNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="생년월일"
                  id="Customer_P02_p002_birth"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="연락처" target="#Customer_P02_p002_phone">
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="연락처"
                  id="Customer_P02_p002_phone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이메일" target="#Customer_P02_p002_EmailId">
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 아이디"
                  id="Customer_P02_p002_EmailId"
                />
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
                  title="이메일 도메인"
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
                  id="Customer_P02_p002_EmailDomainSelf"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- //Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <BasicTextarea
          :error="state.counselingError"
          titleText="상담신청내용"
          title="상담신청내용"
        />
      </FormList>
    </section>
    <!-- // Case : 다음 누른 후 노출 -->

    <!-- Case : 다음 누른 후 노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton line="true">대출관련 상담신청</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>민원접수</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 다음 누른 후 노출 -->
  </PageContents>
</template>
