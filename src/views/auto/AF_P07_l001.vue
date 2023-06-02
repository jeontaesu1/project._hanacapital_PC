<script>
// AF_P07_l001
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
          <PopupTitle>승계 유의사항을 확인해주세요</PopupTitle>
        </ModalPopupHead>
      </template>

      <ul class="reset-list">
        <li class="row-margin-contents">
          <h3 class="text-body-1 row-margin-item-group">비용정산</h3>
          <p class="text-body-3 color-gray-tertiary">
            승계 금액을 제외한 거래 정산(보증금/선납금)은 승계 당사자간
            정산해주세요.
          </p>
        </li>

        <li class="row-margin-contents">
          <h3 class="text-body-1 row-margin-item-group">
            차량상태 점검 및 확인
          </h3>
          <p class="text-body-3 color-gray-tertiary">
            사고 유무, 약정주행거리/실제주행거리, 차량 상태는 승계 당사자간
            확인해주세요. 차량상태 미확인으로 인한 책임은 이용자에게 있습니다.
          </p>
        </li>

        <li class="row-margin-contents">
          <h3 class="text-body-1 row-margin-item-group">비용정산</h3>
          <p class="text-body-3 color-gray-tertiary">
            승계 금액을 제외한 거래 정산(보증금/선납금)은 승계 당사자간
            정산해주세요.
          </p>
        </li>

        <li class="row-margin-contents">
          <h3 class="text-body-1 row-margin-item-group">
            승계 후 첫 도래 원리금
          </h3>
          <p class="text-body-3 color-gray-tertiary">
            승계 후 첫 도래 원리금(리스료/렌트료)은 일할 계산 금액이 아닌 원리금
            계산 전체 금액이 청구됩니다.
            <span class="color-green">
              차량 인도시점 원리금 일괄 정산은 당사자간 정산</span
            >해 주세요.
          </p>
        </li>

        <li class="row-margin-contents">
          <h3 class="text-body-1 row-margin-item-group">자동차세(오토리스)</h3>
          <p class="text-body-3 color-gray-tertiary">
            자동차세는 승계 시점 당사자간 정산 완료해주세요.
          </p>
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
            <BasicButton tagName="RouterLink" to="" size="regular">
              네, 모두 확인했습니다
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_l001.scss';
</style>
