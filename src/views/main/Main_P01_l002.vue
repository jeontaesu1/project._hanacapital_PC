<script>
// Main_P01_l002
import { ref } from 'vue';

import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PopupTitle,
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
  <div :class="$style['popup']">
    <ModalPopup line="secondary">
      <template v-slot:head>
        <ModalPopupHead>
          <PopupTitle>금융사기 피해예방 안내문</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['image-view']">
        <img src="@/assets/images/_dummy/img-notice.png" alt="샘플 이미지" />
      </div>

      <template v-slot:bgBottom>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <TextButton
              :underline="true"
              :classNames="{
                wrap: 'text-body-3 color-white',
              }"
            >
              오늘 하루 보지 않기
            </TextButton>
          </div>
          <div class="flex-box__cell">
            <TextButton
              :underline="true"
              :classNames="{
                wrap: 'text-title-2 color-white',
              }"
            >
              닫기
            </TextButton>
          </div>
        </div>
      </template>
    </ModalPopup>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_P01_l002.scss';
</style>
