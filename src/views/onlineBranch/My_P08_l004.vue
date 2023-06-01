<script>
// My_P08_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

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
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
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
          <PopupTitle>만기후 반환 신청 확인</PopupTitle>
        </ModalPopupHead>
      </template>

      <CheckBox id="My_P08_l004_agree001" theme="tertiary">
        <CheckBoxObject />
        <CheckBoxLabelText>
          이용기간 중 발생된 범칙금/과태료, 기타비용 등에 대해서는 본인의
          책임하에 부담할 것을 확약합니다.
        </CheckBoxLabelText>
      </CheckBox>
      <CheckBox
        id="My_P08_l004_agree002"
        theme="tertiary"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <CheckBoxObject />
        <CheckBoxLabelText>
          신청인(본인)은 반환 유의사항에 대해 충분한 설명을 듣고 잘 이해한 후
          본인의 의사에 따라 반환을 신청합니다.
        </CheckBoxLabelText>
      </CheckBox>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">만기후 반환 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
