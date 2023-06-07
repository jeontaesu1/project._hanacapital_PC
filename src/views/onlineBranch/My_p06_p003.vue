<script>
// My_p06_p003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

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
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const layer = ref(null);

    return {
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
          <PopupTitle>청약철회 신청 유의사항</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              유의사항 확인을 체크해야 신청이 가능합니다.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

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
                청약철회 상환금액은 당일 기준으로
                <span class="color-green font-weight-medium">17시 이내</span>로
                입금해주셔야 합니다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                당일
                <span class="color-green font-weight-medium">17시 이내</span>로
                입금하지 않을시 청약철회가 불가능하거나 추가 경과이자 발생할 수
                있으며 입금 금액을 재조회하셔야 합니다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                청약철회처리가능일은 대출계약 후 14일 이내입니다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">
                청약철회 신청 이후 청약철회 기간(대출 계약 후 14일)이 경과하거나
                결제일이 도래한 경우 청약철회가 불가합니다.
              </div>
            </div>
          </li>
        </ol>
      </div>

      <CheckBox
        id="My_p06_p003_agree01"
        theme="tertiary"
        :classNames="{ wrap: 'row-margin-contents' }"
      >
        <CheckBoxObject />
        <CheckBoxLabelText>유의사항을 확인했습니다.</CheckBoxLabelText>
      </CheckBox>

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
@import '@/assets/scss/views/onlineBranch/My_p06_p003.scss';
</style>
