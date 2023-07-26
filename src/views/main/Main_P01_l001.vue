<script>
// Main_P01_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayer,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup :classNames="{ bodyInner: $style['body-inner'] }">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </ModalPopupHead>
      </template>

      <div :class="$style['image-view']">
        <img
          src="@/assets/images/_dummy/box-detail-3.png"
          :alt="'이미지 설명 넣어주세요'"
        />
      </div>

      <template v-slot:outerBottom>
        <div class="inline-wrap align-right">
          <TextButton
            textSize="regular"
            :underline="true"
            :classNames="{ wrap: 'color-white' }"
          >
            오늘 하루 보지 않기
          </TextButton>
        </div>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_P01_l001.scss';
</style>
