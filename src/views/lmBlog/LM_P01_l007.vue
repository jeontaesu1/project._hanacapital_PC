<script>
// LM_P01_l007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
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
          <PopupTitle>차량조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <KeyValue>
        <KeyValueItem>
          <KeyValueTitle>차량등록번호</KeyValueTitle>
          <KeyValueText>12321421312312</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>차량명</KeyValueTitle>
          <KeyValueText>쏘나타</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>모델 연식</KeyValueTitle>
          <KeyValueText>2021년</KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
        해당 차량은 선순위 설정내역이 확인되어 선순위 설정을 하나캐피탈로
        대환하는 조건으로 진행이 가능합니다.
      </NoticeText>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
