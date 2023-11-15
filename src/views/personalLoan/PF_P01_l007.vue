<script>
// PF_P01_l007
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      nameError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>사업자 대출 진행안내</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              고객님은 사업자대출을 신청하셨습니다.<br />
              아래 사항을 참고하시고 사업자대출로 진행을 원하실 경우 ‘동의’를
              눌러주세요.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <div :class="$style['list-wrap']">
        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'font-weight-regular',
              'color-red',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              사업자대출은 고객님 명의로 개인사업자를 운영하시고, 대출금을
              사업자 운영자금 목적으로 사용하시는 경우 가능합니다.<br />
              (대출금액 1억 이하 시 별도 자금용도 증빙은 하지 않습니다.)
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'font-weight-regular',
              'color-red',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              사업자대출 진행 시 사업자등록증 사본 등 추가 서류를 요청할 수
              있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'font-weight-regular',
              'color-red',
            ]"
          >
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              사업자대출 진행을 동의하지 않으시면 개인대출로 진행됩니다.
            </div>
          </li>
        </ol>
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
            <BasicButton :line="true" theme="quaternary" size="regular"
              >미동의</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">동의</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_l007.scss';
</style>
