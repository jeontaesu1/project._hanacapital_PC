<script>
// Common_P00_l012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

import IconLogoMain from '@/assets/images/icon/logo_main.svg?component';

export default {
  components: {
    UiLayer,
    ModalPopup,
    IllustObject,
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
      <div :class="$style['connection-over']">
        <IllustObject :class="$style['connection-over__illust']" type="error" />
        <div>
          <p class="text-big-3 font-weight-bold">
            현재 접속량이 많아<br />서비스 이용이 어렵습니다
          </p>
          <p class="text-body-1 row-margin-item-group">
            잠시 후 다시 접속해 주세요.
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
@import '@/assets/scss/views/guide/Common_P00_l012.scss';
</style>
