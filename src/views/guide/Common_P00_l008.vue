<script>
// Common_P00_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
          <PopupTitle>자동으로 본인인증 종료 예정입니다</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['timeout']">
        <div :class="$style['timeout__title']">본인인증 종료까지 남은 시간</div>
        <div :class="$style['timeout__time']">02:00</div>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-container']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            안전한 이용을 위하여 10분 동안 거래가 없으실 경우 자동으로 본인인증
            상태가 종료됩니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            본인인증 시간을 연장하시려면
            <strong class="color-green font-weight-medium">시간 연장</strong>
            버튼을 선택해 주세요.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :line="true" theme="quaternary"
              >종료</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">시간 연장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_l008.scss';
</style>
