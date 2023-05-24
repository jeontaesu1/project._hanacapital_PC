<script>
// Customer_P11_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
      nameError: false,
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
          <PopupTitle>인증서 가져오기</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              고객님의 인증서 가져오기를 시작합니다.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <div class="row-margin-contents">
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              처음 접속 하시는 고객님께서는 이용방법을 확인 후 이용하시기
              바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              다양한 브라우저(엣지, 크롬, 파이어폭스) 사용도 이용할 수 있도록
              웹표준 준수로 개선한 서비스를 제공하고 있습니다.
            </div>
          </li>
        </ul>
      </div>

      <FormList>
        <FormListItem titleText="인증번호" :forceFocus="true">
          <InputBlock>
            <InputBlockCell :flexible="true">1234</InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">5678</InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem titleText="인증번호" target="#Customer_P11_l002_number">
          <FormInvalid :error="state.numberError">
            <InputBlock :error="state.numberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="인증번호 앞 4자리"
                  id="Customer_P11_l002_number"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="인증번호 뒤 4자리"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">진행순서</h3>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  PC의 인증서 이동프로그램 또는 스마트폰의 인증서 이동 앱을 실행
                  후 화면에 표시된 인증번호 8자리를 입력하세요.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  인증서 가져오기 버튼을 누르면 인증서 가져오기가 완료됩니다.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">인증서 가져오기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P11_l002.scss';
</style>
