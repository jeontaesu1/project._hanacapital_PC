<script>
// LM_P01_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
    StepProgress,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    SecurityInput,
    PartInput,
    SecurityKeypadButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    NoticeText,
    BasicHr,
    BasicDatepicker,
  },

  setup() {
    const state = reactive({
      name001Error: false,
      name002Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      phone001Error: false,
      phone002Error: false,
      sendError: false,
    });

    const LM_P01_p001_sendEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    return {
      state,
      LM_P01_p001_sendEvent,
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
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        신용정보조회동의 여부를 확인하세요
      </PageMainText>
      <PageSubText align="left">
        대출상담은 적법한 절차에 의해 모집한 고객만 등록 가능 합니다. 모집
        과정에서 불법정보 활용 시 대출모집인 모범규준 및 당사 내규에 따라 계약
        해지될 수 있으니 유의하시길 바랍니다.
      </PageSubText>
    </PageHead>

    <section>
      <h3 class="text-title-1 row-margin-contents">
        본 고객은 적법한 절차에 의해 모집한 고객임을 확인 합니다.
      </h3>

      <BoxCheckList
        :classNames="{
          wrap: 'row-margin-block-small row-margin-top-none',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            name="LM_P01_p0011_type"
            id="LM_P01_p0011_type_001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>아니오</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="LM_P01_p0011_type" id="LM_P01_p0011_type_002">
            <BoxCheckLabel>예</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">고객 기본정보</h3>

      <FormList>
        <FormListItem titleText="이름" target="#LM_P01_p001_name001">
          <FormInvalid :error="state.name001Error">
            <InputBlock :error="state.name001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="LM_P01_p001_name001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="주민등록번호" target="#LM_P01_p001_id001">
          <FormInvalid :error="state.idNumber001Error">
            <InputBlock :error="state.idNumber001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="LM_P01_p001_id001"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#LM_P01_p001_phone001">
          <FormInvalid :error="state.phone001Error">
            <InputBlock :error="state.phone001Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="휴대폰번호" id="LM_P01_p001_phone001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList align="full">
        <ButtonListItem>
          <BasicButton theme="tertiary">신용정보조회동의(URL 발송)</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-title-1 row-margin-contents">신용정보조회 동의내역</h3>

      <FormList>
        <FormListItem titleText="이름" target="#LM_P01_p001_name002">
          <FormInvalid :error="state.name002Error">
            <InputBlock :error="state.name002Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="LM_P01_p001_name002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="주민등록번호" target="#LM_P01_p001_id002">
          <FormInvalid :error="state.idNumber002Error">
            <InputBlock :error="state.idNumber002Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="LM_P01_p001_id002"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell>
                <SecurityKeypadButton />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#LM_P01_p001_phone002">
          <FormInvalid :error="state.phone002Error">
            <InputBlock :error="state.phone002Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="휴대폰번호" id="LM_P01_p001_phone002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="URL 발송일"
          target="#LM_P01_p001_send_button001"
        >
          <FormInvalid :error="state.sendError">
            <InputBlock :error="state.sendError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="URL 발송일"
                  id="LM_P01_p001_send"
                  buttonId="LM_P01_p001_send_button"
                  :onChange="LM_P01_p001_sendEvent"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList align="full">
        <ButtonListItem>
          <BasicButton theme="tertiary">신용정보조회동의(URL 발송)</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>
  </PageContents>
</template>
