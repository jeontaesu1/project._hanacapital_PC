<script>
// LM_P07_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
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
          <PopupTitle>개인정보 수집 및 이용동의</PopupTitle>
        </ModalPopupHead>
      </template>

      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-small">하나캐피탈㈜ 귀중</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          귀사와의 (금융)거래와 관련하여 귀사가 본인의 개인정보를
          수집.이용하고자 하는 경우에는 「개인정보 보호법」 제 15조, 제22조 및
          제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」제22조에
          따라 동의를 얻어야 합니다. 이에 귀사가 아래와 같이 본인의 개인정보를
          수집.이용하는데 동의합니다.
        </p>
      </section>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--quinary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                개인정보의 수집.이용목적
              </div>
            </div>
            <div
              :class="[$style['contents-list__depth-3'], 'row-margin-small']"
            >
              <p class="text-body-3 color-gray-secondary font-weight-light">
                신용대출 등 귀사 대출 상품에 대한 상담
              </p>
            </div>
          </li>

          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                수집.이용할 개인정보의 내용
              </div>
            </div>
            <div
              :class="[$style['contents-list__depth-3'], 'row-margin-small']"
            >
              <p class="text-body-3 color-gray-secondary font-weight-light">
                이름, 휴대폰번호
              </p>
            </div>
          </li>

          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                개인정보의 보유.이용 기간
              </div>
            </div>
            <div
              :class="[$style['contents-list__depth-3'], 'row-margin-small']"
            >
              <p class="text-body-3 color-gray-secondary font-weight-light">
                수집.이용 동의일로부터 개인정보의 수집.이용 목적을 달성할 때까지
              </p>
            </div>
          </li>
        </ol>
      </div>

      <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
        귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정
        또는 유지가 불가능할 수 있음을 알려드립니다.
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

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
