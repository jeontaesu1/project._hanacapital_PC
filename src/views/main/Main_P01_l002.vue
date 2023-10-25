<script>
// Main_P01_l002
import { ref } from 'vue';

import UiLayerMain from '@/components/ui/layer/UiLayerMain.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayerMain,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    TextButton,
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
  <UiLayerMain ref="layer" v-slot="layerSlotProps">
    <ModalPopup line="secondary">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>금융사기 피해예방 안내문</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['image-view']">
        <img src="@/assets/images/_dummy/img-notice.png" alt="샘플 이미지" />
      </div>

      <template v-slot:bgBottom>
        <TextButton
          :underline="true"
          :classNames="{
            wrap: 'text-body-3 color-white',
          }"
        >
          오늘 하루 보지 않기
        </TextButton>
      </template>
    </ModalPopup>
  </UiLayerMain>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_P01_l002.scss';
</style>
