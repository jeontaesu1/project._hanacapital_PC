<script>
// AF_P07_l004
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
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    BasicHr,
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
          <PopupTitle>리스 상세조건</PopupTitle>
        </ModalPopupHead>
      </template>

      <KeyValue>
        <KeyValueItem>
          <KeyValueTitle>리스료 합계</KeyValueTitle>
          <KeyValueText>
            <h3 class="text-body-1 font-weight-regular">0 원</h3>
            <p class="text-body-3 color-gray row-margin-mini">자동차세 포함</p>
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>만기 인수 시 납부금액</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>만기 반환 시 환급금액</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>승계수수료 (인지대 포함)</KeyValueTitle>
          <KeyValueText>5,000,000 원</KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-contents"
      />

      <KeyValue>
        <KeyValueItem>
          <KeyValueTitle>상품명</KeyValueTitle>
          <KeyValueText>운용리스</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>미회수원금 (취득원가)</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>보증금</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>잔여선납금</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>잔존가치</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>월 리스료</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>리스기간</KeyValueTitle>
          <KeyValueText>00개월</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>계약주행거리</KeyValueTitle>
          <KeyValueText>100,000 Km</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>종료 후 처리</KeyValueTitle>
          <KeyValueText>-</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>2023.04.01</KeyValueText>
        </KeyValueItem>
      </KeyValue>

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
