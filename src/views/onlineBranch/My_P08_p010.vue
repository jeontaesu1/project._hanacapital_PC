<script>
// My_P08_p010
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    BasicInput,
    SecurityInput,
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
      phoneError: false,
      businessNameError: false,
      businessLicenseError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
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
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '만기후처리',
          },
          {
            text: '연장 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 연장 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="6" :current="3" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">계약자 정보를 확인해 주세요</PageMainText>
    </PageHead>

    <FormList>
      <FormListItem
        titleText="이름"
        target="#My_P08_p010_name"
        :disabled="true"
      >
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이름"
                id="My_P08_p010_name"
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
        target="#My_P08_p010_id"
        :disabled="true"
      >
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="My_P08_p010_id"
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
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="휴대폰번호"
        target="#My_P08_p010_phone_telecom"
        :disabled="true"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError" :disabled="true">
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
                inputId="My_P08_p010_phone_telecom"
                :classNames="{
                  wrap: 'input-width-telecom',
                }"
                defaultValue="1"
                :disabled="true"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicInput
                pattern="\d*"
                title="휴대폰번호"
                defaultValue="010-1234-5678"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 개인사업자인 경우 노출 -->
      <FormListItem
        titleText="사업자명"
        target="#My_P08_p010_businessName"
        :disabled="true"
      >
        <FormInvalid :error="state.businessNameError">
          <InputBlock :error="state.businessNameError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업자명"
                id="My_P08_p010_businessName"
                defaultValue="하나테크"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="사업자등록번호"
        target="#My_P08_p010_BusinessLicense"
        :disabled="true"
      >
        <FormInvalid :error="state.businessLicenseError">
          <InputBlock :error="state.businessLicenseError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                ref="license"
                title="사업자등록번호"
                id="My_P08_p010_BusinessLicense"
                defaultValue="123-12-12345"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 개인사업자인 경우 노출 -->
    </FormList>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
