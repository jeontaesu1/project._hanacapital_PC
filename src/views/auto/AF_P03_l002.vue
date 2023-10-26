<script>
//AF_P03_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
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
          <PopupTitle>오토리스/렌터카 견적조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['title-view']">
        카메라로 QR코드를 확인하시고<br />
        모바일로 간편하게 견적을 확인해보세요.
      </div>

      <div :class="$style['image-view']">
        <img src="@/assets/images/contents/qr-lease-rent.png" alt="QR Code" />
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P03_l002.scss';
</style>
