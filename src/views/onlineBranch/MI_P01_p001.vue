<script>
// MI_P01_p001
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

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
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    InputBlock,
    InputBlockCell,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      passwordError: false,
      passwordConfirmError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
      store.ui.header.setDepthActive(() => 'onlineBranch003');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });

    return {
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '내정보관리',
          },
          {
            text: '비밀번호 변경',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">비밀번호 변경</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">변경할 비밀번호를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        비밀번호 8~16자리 영문/숫자/지정된 특수문자 ~`!@#$%^*_-+=.?’{} 혼합<br />
        (반복/연속된 문자, 지정되지 않은 특수문자, ID와 동일한 문자 불가)
      </PageSubText>
    </PageHead>

    <FormList>
      <FormListItem titleText="신규 비밀번호" target="#MI_P01_p001_password">
        <FormInvalid :error="state.passwordError">
          <InputBlock :error="state.passwordError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="password"
                title="신규 비밀번호"
                id="MI_P01_p001_password"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>
            비밀번호 8~16자리(영문/숫자/특수문자 혼합)
          </FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="신규 비밀번호 확인"
        target="#MI_P01_p001_passwordConfirm"
      >
        <FormInvalid :error="state.passwordConfirmError">
          <InputBlock :error="state.passwordConfirmError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="password"
                title="신규 비밀번호 확인"
                id="MI_P01_p001_passwordConfirm"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>비밀번호 변경하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
