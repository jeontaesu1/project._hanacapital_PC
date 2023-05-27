<script>
// PF_P01_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';

import IconQR from '@/assets/images/icon/qr.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    PopupSubTitle,
    IconQR,
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
          <PopupTitle>하나은행 계좌가 없으시다면?</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              언제 어디서나 빠르고 간편하게<br />
              하나은행 비대면 계좌 개설 서비스
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <div class="inline-wrap align-center">
        <IconQR />
      </div>
    </ModalPopup>
  </UiLayer>
</template>
