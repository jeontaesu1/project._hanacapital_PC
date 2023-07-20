<script>
// Common_P00_l011
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';

import IconLogoMain from '@/assets/images/icon/logo_main.svg?component';

export default {
  components: {
    UiLayer,
    ModalPopup,
    IconLogoMain,
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
  <UiLayer ref="layer">
    <ModalPopup>
      <div :class="$style['connection']">
        <div :class="$style['loading-spinner']">
          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="row-margin-contents row-margin-bottom-none">
          <p class="row-margin-none text-body-1 color-gray-tertiary">
            대기인원
          </p>
          <div class="flex-box justify-conten-center">
            <div class="flex-box__cell color-green text-big-1 font-weight-bold">
              222
            </div>
            <div
              :class="[
                $style['population'],
                'flex-box__cell',
                'flex-box__cell--small',
                'row-margin-item',
              ]"
            >
              <span class="text-body-1 color-gray-tertiary">명</span>
            </div>
          </div>
        </div>
        <div class="row-margin-contents-group row-margin-bottom-none">
          <p class="text-big-3 font-weight-bold">
            서비스 접속 <span class="color-green">대기중</span> 입니다
          </p>
          <p class="text-body-1 row-margin-item-group">
            잠시만 기다리시면 서비스로 자동 접속됩니다.
          </p>
        </div>
        <div
          :class="[
            $style['connection-over__logo'],
            'row-margin-container-medium',
          ]"
        >
          <IconLogoMain />
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_l011.scss';
</style>
