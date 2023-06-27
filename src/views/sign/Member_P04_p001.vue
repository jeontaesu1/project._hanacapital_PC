<script>
// Member_P04_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
  },
  setup() {
    const state = reactive({
      idError: false,
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
            text: '회원관리',
          },
          {
            text: '비밀번호 찾기',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <!-- Case : 다음 버튼 누르기 전 노출 -->
      <PageTitle>아이디를 입력해 주세요</PageTitle>
      <!-- // Case : 다음 버튼 누르기 전 노출 -->

      <!-- Case : 아이디 입력 및 다음 버튼 누른 후 노출 -->
      <PageTitle>
        가입여부 확인을 위해<br />
        본인확인이 필요합니다
      </PageTitle>
      <!-- // Case : 아이디 입력 및 다음 버튼 누른 후 노출 -->
    </PageHead>

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
    </FormList>

    <!-- Case : 아이디 입력 및 다음 버튼 누른 후 노출 -->
    <div class="row-margin-block-small row-margin-bottom-none">
      // [공통 > 본인인증] 내용 노출
    </div>
    <!-- // Case : 아이디 입력 및 다음 버튼 누른 후 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
