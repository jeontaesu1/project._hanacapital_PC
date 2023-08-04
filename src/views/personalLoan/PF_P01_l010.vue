<script>
// PF_P01_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconDownload from '@/assets/images/common/download.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    PopupText,
    NoticeText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconDownload,
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
          <PopupTitle>소득정보 자동제출</PopupTitle>
        </ModalPopupHead>
      </template>

      <PopupText :classNames="{ text: 'row-margin-item-group' }">
        해당 업무를 진행하기 위해 아래의 순서대로 ‘iSAS Service 모듈’을 설치하여
        주시기 바랍니다.(약 1~3분 소요)<br />
        스크래핑 모듈 설치를 위해서는 JAVA JRE 프로그램이 반드시 설치되어야
        합니다.
      </PopupText>

      <NoticeText>
        지원OS : Windows, Mac 환경에서만 설치 하실 수 있습니다.
      </NoticeText>

      <section class="row-margin-contents">
        <h3 class="text-body-1 row-margin-item-group">
          ‘iSAS Service 모듈’ 설치방법
        </h3>

        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  [다운로드] 버튼 클릭
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  iSAS Service 모듈(iSASService_v2.3.2.exe) [저장] 버튼 클릭
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  iSAS Service 모듈(iSASService_v2.3.2.exe) [실행] 버튼 클릭
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton
              size="regular"
              tagName="a"
              href="/foo/bar.pdf"
              download
            >
              <template v-slot:leftIcon>
                <IconDownload />
              </template>
              다운로드
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_l010.scss';
</style>
