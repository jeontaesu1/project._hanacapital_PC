<script>
// Common_P00_l005
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
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
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

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
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const state = reactive({
      phoneError: false,
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
          <PopupTitle>
            연락처를 남겨주시면<br />
            전화상담을 도와드릴게요
          </PopupTitle>
        </ModalPopupHead>
      </template>

      <FormList>
        <FormListItem titleText="휴대폰번호" target="#Common_P00_l005_phone">
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="휴대폰번호"
                  id="Common_P00_l005_phone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <UiAccordion :classNames="{ wrap: 'row-margin-contents-small' }">
        <UiAccordionItem>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <CheckBox id="Common_P00_l005_agree" theme="tertiary">
                <CheckBoxObject />
                <CheckBoxLabelText
                  >개인정보 수집·이용 제공 동의</CheckBoxLabelText
                >
              </CheckBox>
            </div>
            <div class="flex-box__cell">
              <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['contents']">
              1.개인정보 수집 및 이용 목적 - 고객상담 접수 및 회신<br />
              2.수집하는 개인정보 항목 - 연락처<br />
              3.보유 및 이용기간 - 수집·이용 동의일로부터 개인(신용)정보의
              수집·이용 목적을 달성할 때까지<br />
              ※ 단, 수집이용 목적 달성 이후에는 금융사고 조사, 분쟁해결,
              민원처리, 법령상 의무이행 및 당사의 리스크관리(통계)업무만을
              위하여 보유 및 이용됩니다.
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_l005.scss';
</style>
