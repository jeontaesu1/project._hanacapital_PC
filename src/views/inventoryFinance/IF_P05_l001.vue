<script>
// IF_P05_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconImg from '@/assets/images/icon/img.svg?component';
import IconImgColor from '@/assets/images/icon/img-color.svg?component';

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
    IconImg,
    IconImgColor,
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
          <PopupTitle>구비서류 추가등록</PopupTitle>
        </ModalPopupHead>
      </template>

      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="IF_P05_l001_upload001"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="IF_P05_l001_upload001"
                :class="$style['upload-button__label']"
                >자동차등록증</label
              >
            </div>
          </div>

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['upload-file--child'],
            ]"
          >
            <ul :class="$style['upload-file__list']">
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton :line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.png</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton :line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.gif</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton :line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton :line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
          <!-- //Case : 파일 첨부 후 -->
        </li>
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="IF_P05_l001_upload002"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="IF_P05_l001_upload002"
                :class="$style['upload-button__label']"
                >기타서류</label
              >
            </div>
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">서류등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P05_l001.scss';
</style>
