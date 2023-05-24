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
  },
  setup() {
    const state = reactive({
      name001Error: false,
      idNumber001Error: false,
      bankNumber001Error: false,
      businessNumber001Error: false,
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
          target="#Common_MI_P00_l006_name001"
        >
          <InputBlock :disabled="true" :error="state.name001Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="예금주"
                defaultValue="김하나"
                :disabled="true"
                id="Common_MI_P00_l006_name001"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          :disabled="true"
          target="#Common_MI_P00_l006_idNumber001"
        >
          <InputBlock :disabled="true" :error="state.idNumber001Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="생년월일"
                defaultValue="1995.02.06"
                :disabled="true"
                id="Common_MI_P00_l006_idNumber001"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <!-- Case : 법인 -->
        <FormListItem
          titleText="사업자등록번호"
          :disabled="true"
          target="#Common_MI_P00_l006_businessNumberNumber001"
        >
          <InputBlock :disabled="true" :error="state.businessNumber001Error">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업자등록번호"
                defaultValue="1995.02.06"
                :disabled="true"
                id="Common_MI_P00_l006_businessNumberNumber001"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 법인 -->

        <FormListItem titleText="은행명">
          <InputBlock>
            <InputBlockCell :flexible="true">
              <BasicInput title="은행명" />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem
          titleText="계좌번호"
          target="#Common_MI_P00_l006_bankNumber001"
        >
          <FormInvalid :error="state.bankNumber001Error">
            <InputBlock :error="state.bankNumber001Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="계좌번호"
                  id="Common_MI_P00_l006_bankNumber001"
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
            <BasicButton size="regular">계좌 변경 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
