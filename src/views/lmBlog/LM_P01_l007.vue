<script>
// LM_P01_l007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
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
          <PopupTitle>사업자선택</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle
              >사업자를 클릭하면 사업자 정보가 자동 입력됩니다.</PopupSubTitle
            >
          </template>
        </ModalPopupHead>
      </template>

      <ul :class="[$style['address-list'], $style['address-list--select']]">
        <li :class="$style['address-list__item']">
          <ContentsButton>
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">하나캐피탈</div>
              <KeyValue align="left" margin="small" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>123-12-12345</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
                  <KeyValueTitle>설립일자</KeyValueTitle>
                  <KeyValueText>2021.09.11</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </ContentsButton>
        </li>
        <li :class="$style['address-list__item']">
          <ContentsButton>
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">하나캐피탈</div>
              <KeyValue align="left" margin="small" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>123-12-12345</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
                  <KeyValueTitle>설립일자</KeyValueTitle>
                  <KeyValueText>2021.09.11</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </ContentsButton>
        </li>
      </ul>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_P01_l007.scss';
</style>
