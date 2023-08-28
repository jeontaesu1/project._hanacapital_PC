<script>
// PF_P07_l301
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IframeContents from '@/components/ui/viewer/IframeContents.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    UiLayer,
    ModalPopup,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IframeContents,
  },
  setup() {
    const layer = ref(null);

    return {
      BASE_URL,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup
      v-if="layerSlotProps.display !== 'none'"
      size="regular"
      :classNames="{ bodyInner: $style['body'] }"
    >
      <IframeContents
        :url="`${BASE_URL}legacy/html/stock-loan-check-point.html`"
        id="stockLoanCheckPointframe"
      />

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :col="3"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton
              size="regular"
              theme="quaternary"
              @click="layerSlotProps.close()"
              >취소</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_l301.scss';
</style>
