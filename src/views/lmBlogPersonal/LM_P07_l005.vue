<script>
// LM_P07_l005
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

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
    FormList,
    BasicTextarea,
    FormInvalidMessage,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },
  setup() {
    const state = reactive({
      counselingError: false,
      nameError: false,
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
          <PopupTitle>SMS 상담</PopupTitle>
        </ModalPopupHead>
      </template>

      <FormList>
        <BasicTextarea
          :error="state.counselingError"
          titleText="상담내용"
          title="상담내용"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </template>
        </BasicTextarea>

        <FormListItem titleText="이름" target="#LM_P07_l005_name">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="LM_P07_l005_name" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#LM_P07_l005_phone">
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput title="휴대폰번호" id="LM_P07_l005_phone" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div :class="[$style['agree-list'], 'row-margin-contents-small']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__depth']">
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="LM_P07_l005_agreeAll"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                    </CheckBox>
                  </div>
                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="LM_P07_l005_agree001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인정보 수집 및 이용 동의</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="LM_P07_l005_agree002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인정보 제공 동의</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">상담신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_P07_l005.scss';
</style>
