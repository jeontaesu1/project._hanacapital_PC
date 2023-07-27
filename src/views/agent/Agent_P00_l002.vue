<script>
// Agent_P00_l002
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
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>서류등록</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="row-margin-block-small">
        <!-- Case : 내용 없을 경우 -->
        <div :class="[$style['empty'], $style['empty--secondary']]">
          <p :class="$style['empty__text']">조회된 내용이 없습니다.</p>
        </div>
        <!-- // Case : 내용 없을 경우 -->

        <!-- Case : 내용 있을 경우 -->
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>등록일시</th>
                <th>실제파일명</th>
                <th>고객명</th>
                <th>서류유효절차</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>2023.01.01</td>
                <td>첨부파일명.jpg</td>
                <td>김하나</td>
                <td>유효성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // Case : 내용 있을 경우 -->
      </div>

      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="Agent_P00_l002_upload"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="Agent_P00_l002_upload"
                :class="$style['upload-button__label']"
              >
                파일첨부
              </label>
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
                    첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
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
      </ul>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular-margin'],
          'row-margin-contents',
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록 파일은 이미지 파일만 가능합니다.(jpg, jpge, png, gif, tif,
            pdf 파일)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록 파일은 최대 5개까지 등록 가능합니다.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          :col="5"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P00_l002.scss';
</style>
