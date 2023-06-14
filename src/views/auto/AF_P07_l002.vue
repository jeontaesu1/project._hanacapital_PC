<script>
// AF_P07_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupText,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>
            <span class="color-green">111가1111</span> 차량에 대하여<br />
            승계를 신청하시겠습니까?
          </PopupTitle>
        </ModalPopupHead>
      </template>

      <PopupText>
        손님의 동의하에 승계 후 이용자 또는 승계 후 이용자로부터 위임을 받은
        신청인에게 승계 계약관련 차량/금융정보가 제공됩니다. 관련 정보 제공
        동의는 승계절차 완료 또는 계약종결시점 종료되며, 중도에 정보제공동의
        철회가 가능합니다.
      </PopupText>

      <PopupText>승계 계약관련 정보제공에 동의하십니까?</PopupText>

      <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
        정보제공 동의를 거부하실 수 있으나, 거부 시 승계진행이 불가할 수
        있습니다.
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
            <BasicButton size="regular">동의하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
