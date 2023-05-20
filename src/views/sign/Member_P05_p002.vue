<script>
// Member_P05_p002
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    SecurityKeypadButton,
  },
  setup() {
    const state = reactive({
      idError: false,
      passwordError: false,
      passwordConfirmError: false,
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
        <PageTitle align="left">회원가입</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        아이디와 비밀번호를 입력해 주세요
      </PageMainText>
      <PageSubText align="left">
        비밀번호는 반복/연속 된 문자, ID와 동일한 문자, 4자리 이상 숫자 및
        지정된 특수문자 ~’!@#$%^*_-+=.?{} 이외의 문자는 사용할 수 없습니다.
      </PageSubText>
    </PageHead>

    <FormList>
      <FormList>
        <FormListItem titleText="아이디" target="#id">
          <FormInvalid :error="state.idError">
            <InputBlock :error="state.idError">
              <InputBlockCell :flexible="true">
                <BasicInput title="아이디" id="id" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="신규 비밀번호" target="#password">
          <FormInvalid :error="state.passwordError">
            <InputBlock :error="state.passwordError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="신규 비밀번호"
                  id="password"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              비밀번호 8~16자리(영문/숫자/특수문자 혼합)
            </FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="신규 비밀번호 확인" target="#passwordConfirm">
          <FormInvalid :error="state.passwordConfirmError">
            <InputBlock :error="state.passwordConfirmError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="신규 비밀번호 확인"
                  id="passwordConfirm"
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
    </FormList>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
