<script>
// AF_P03_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconPlayStore from '@/assets/images/icon/playstore.svg?component';
import IconAppStore from '@/assets/images/icon/appstore.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicHr,
    IconPlayStore,
    IconAppStore,
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
          <PopupTitle>하나캐피탈 앱을 설치해 보세요!</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="row-margin-container">
        하나캐피탈 앱을 설치하면
        <span class="color-green">
          대출 이어하기, 대출 관리 등 하나캐피탈의 모든 서비스를 이용</span
        >하실 수 있어요.
      </div>

      <div :class="$style['image-view']">
        <img src="@/assets/images/contents/qr.png" alt="QR Code" />
      </div>

      <BasicHr theme="quaternary" className="row-margin-container-medium" />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <!-- Case : Android -->
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconPlayStore /></span>
              <span :class="$style['icon-list__content']">
                <span
                  :class="[$style['icon-list__text'], 'color-gray-tertiary']"
                  >아직 앱이 없으시다면</span
                >
                <span :class="$style['icon-list__title']"
                  >Google Play로 이동</span
                >
              </span>
            </button>
          </li>
          <!-- // Case : Android -->

          <!-- Case : IOS -->
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconAppStore /></span>
              <span :class="$style['icon-list__content']">
                <span
                  :class="[$style['icon-list__text'], 'color-gray-tertiary']"
                  >아직 앱이 없으시다면</span
                >
                <span :class="$style['icon-list__title']"
                  >App Store로 이동</span
                >
              </span>
            </button>
          </li>
          <!-- // Case : IOS -->
        </ul>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P03_l001.scss';
</style>
