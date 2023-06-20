<script>
// AF_P01_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    PopupTitle,
    PopupSubTitle,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    ModalPopup,
    ModalPopupHead,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicBox,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>모바일로 상담을 진행하시겠어요 ?</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              입력하신 연락처로 모바일 상담 가능한 URL을 전송해 드립니다.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <FormList>
        <FormListItem titleText="휴대전화" target="#AF_P01_l001_phone">
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="휴대전화"
                  pattern="\d*"
                  id="AF_P01_l001_phone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BasicBox className="row-margin-contents">
        <div :class="$style['agree-list']">
          <ul
            :class="[
              $style['agree-list__list'],
              $style['agree-list__list--secondary'],
              $style['agree-list__list--secondary-no-padding'],
            ]"
          >
            <li :class="$style['agree-list__item']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="PF_P07_p001_agree001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>
                    개인정보 수집·이용 동의
                  </CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
                    <span :class="$style['agree-list__link-text']">
                      상세보기
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">전송하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P01_l001.scss';
</style>
