<script>
// MI_P00_l007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

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
    PopupSubTitle,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <!-- Case : 즉시출금 -->
          <PopupTitle>중도상환 즉시출금 신청</PopupTitle>
          <!-- // Case : 즉시출금 -->
          <!-- Case : 가상계좌 -->
          <PopupTitle>중도상환 입금예약 신청</PopupTitle>
          <!-- // Case : 가상계좌 -->
          <template v-slot:sub>
            <!-- Case : 즉시출금 -->
            <PopupSubTitle>
              즉시출금으로 중도상환신청을 하시겠어요?
            </PopupSubTitle>
            <!-- // Case : 즉시출금 -->
            <!-- Case : 가상계좌 -->
            <PopupSubTitle>
              입금예약으로 중도상환신청을 하시겠어요?
            </PopupSubTitle>
            <!-- // Case : 가상계좌 -->
          </template>
        </ModalPopupHead>
      </template>

      <KeyValue>
        <KeyValueItem>
          <KeyValueTitle>상품명</KeyValueTitle>
          <KeyValueText>스탁론 (L99999999999)</KeyValueText>
        </KeyValueItem>

        <!-- Case : 즉시출금 -->
        <KeyValueItem>
          <KeyValueTitle>즉시출금일자</KeyValueTitle>
          <KeyValueText>2022.06.12</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>즉시출금금액</KeyValueTitle>
          <KeyValueText>999,999,999 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>즉시출금계좌</KeyValueTitle>
          <KeyValueText>하나은행 123-456-789012</KeyValueText>
        </KeyValueItem>
        <!-- // Case : 즉시출금 -->

        <!-- Case : 가상계좌 -->
        <KeyValueItem>
          <KeyValueTitle>입금예약일자</KeyValueTitle>
          <KeyValueText>2022.06.12</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>입금예정금액</KeyValueTitle>
          <KeyValueText>999,999,999 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>입금가상계좌</KeyValueTitle>
          <KeyValueText>
            하나은행 123-12345-1234 / 예금주 : 하나캐피탈㈜<br />
            농협 123-345-123456 / 예금주 : 하나캐피탈㈜
          </KeyValueText>
        </KeyValueItem>
        <!-- // Case : 가상계좌 -->
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
            <BasicButton size="regular" :line="true" theme="quaternary">
              취소
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
