<script>
// IF_P02_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconPdfColor from '@/assets/images/icon/pdf-color.svg?component';

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
    IconPdfColor,
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
          <PopupTitle>서류등록</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="[$style['upload-file']]">
        <ul :class="$style['upload-file__list']">
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconPdfColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">서류명</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton
                :line="true"
                theme="quaternary"
                size="small"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                다운로드
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconPdfColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">서류명</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton
                :line="true"
                theme="quaternary"
                size="small"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                다운로드
              </BasicButton>
            </div>
          </li>
        </ul>
      </div>

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

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P02_l004.scss';
</style>
