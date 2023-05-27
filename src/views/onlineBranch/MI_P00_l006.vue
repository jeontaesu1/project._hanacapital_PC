<script>
// MI_P00_l006
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
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

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
    FormInvalidMessage,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      bankError: false,
      bankNumberError: false,
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
          <PopupTitle>자동이체 계좌 변경 신청</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              본인명의로 인증된 계좌만 등록이 가능합니다.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="예금주"
          :disabled="true"
          target="#MI_P00_l006_name"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="예금주"
                defaultValue="김하나"
                :disabled="true"
                id="MI_P00_l006_name"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <!-- Case : 개인 -->
        <FormListItem
          titleText="생년월일"
          :disabled="true"
          target="#MI_P00_l006_idNumber"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="생년월일"
                defaultValue="1995.02.06"
                :disabled="true"
                id="MI_P00_l006_idNumber"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 개인 -->

        <!-- Case : 법인 -->
        <FormListItem
          titleText="사업자등록번호"
          :disabled="true"
          target="#MI_P00_l006_businessNumberNumber"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업자등록번호"
                defaultValue="1995.02.06"
                :disabled="true"
                id="MI_P00_l006_businessNumberNumber"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 법인 -->

        <FormListItem
          titleText="은행명"
          target="#MI_P00_l006_bank"
          :selectOnly="true"
        >
          <FormInvalid :error="state.bankError">
            <InputBlock :error="state.bankError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '하나은행',
                    },
                  ]"
                  title="은행명"
                  inputId="MI_P00_l006_bank"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="계좌번호" target="#MI_P00_l006_bankNumber">
          <FormInvalid :error="state.bankNumberError">
            <InputBlock :error="state.bankNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput title="계좌번호" id="MI_P00_l006_bankNumber" />
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
            <BasicButton size="regular">계좌 변경 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
