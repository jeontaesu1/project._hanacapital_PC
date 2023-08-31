<script>
// Common_P00_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IframeContents from '@/components/ui/viewer/IframeContents.vue';

const BASE_URL = import.meta.env.BASE_URL;

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
    <ModalPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle :classNames="{ title: 'ellipsis' }"
            >약관 타이틀</PopupTitle
          >
        </ModalPopupHead>
      </template>

      <IframeContents
        :url="`${BASE_URL}legacy/html/clause-detail.html`"
        id="clauseDetailframe"
      />

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" :line="true" theme="quaternary"
              >Button 1</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
