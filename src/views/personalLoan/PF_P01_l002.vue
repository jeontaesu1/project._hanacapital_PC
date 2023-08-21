<script>
// PF_P01_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PopupSubTitle,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
      certificateError: false,
      passwordError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>소득정보 자동제출</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              건강보험공단 및 국민연금공단, 국세청 로그인 후 아래의 소득관련
              서류를 자동으로 제출합니다.
            </PopupSubTitle>
            <PopupSubTitle :classNames="{ subTitle: 'row-margin-item' }">
              (자격득실확인서 및 보험료 납부확인서, 소득금액증명원)
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="이름"
          target="#PF_P01_l002_name"
          :disabled="true"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이름"
                defaultValue="김하나"
                :disabled="true"
                id="PF_P01_l002_name"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#PF_P01_l002_idNumber"
          :disabled="true"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="주민등록번호"
                defaultValue="951222-2******"
                :disabled="true"
                id="PF_P01_l002_idNumber"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem
          titleText="공동인증서"
          target="#PF_P01_l002_certificate"
          :selectOnly="true"
        >
          <FormInvalid :error="state.certificateError">
            <InputBlock :error="state.certificateError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '[2022-12-31]김하나()0004048100574819',
                    },
                  ]"
                  title="공동인증서"
                  inputId="PF_P01_l002_certificate"
                  defaultValue="1"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="비밀번호" target="#PF_P01_l002_password">
          <FormInvalid :error="state.passwordError">
            <InputBlock :error="state.passwordError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="비밀번호"
                  id="PF_P01_l002_password"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">제출하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
