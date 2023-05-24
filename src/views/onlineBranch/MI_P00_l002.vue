<script>
// MI_P00_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IconLinkSmall from '@/assets/images/icon/link-small.svg?component';
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
    IconLinkSmall,
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
          <PopupTitle>당월 결제금액 내역</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <ul class="reset-list">
          <li class="row-margin-contents flex-box">
            <div class="flex-box__cell text-body-1 ellipsis flex-2">렌트카</div>
            <div class="flex-box__cell">대기영역</div>
          </li>
          <li class="row-margin-contents flex-box">
            <div class="flex-box__cell text-body-1 ellipsis flex-2">
              오토리스
            </div>
            <div class="flex-box__cell">대기영역</div>
          </li>
          <li class="row-margin-contents flex-box">
            <div class="flex-box__cell text-body-1 ellipsis flex-2">
              오토리스오토리스오토리스오토리스오토리스오토리스오토리스오토리스오토리스
            </div>
            <div class="flex-box__cell">대기영역</div>
          </li>
          <li class="row-margin-contents flex-box">
            <div class="flex-box__cell text-body-1 ellipsis flex-2">
              오토리스오토리스오토리스오토리스오토리스오토리스오토리스오토리스오토리스
            </div>
            <div class="flex-box__cell">대기영역</div>
          </li>
        </ul>
        <!-- 페이징 -->
        <div :class="[$style['pagination'], 'row-margin-contents']">
          <button
            disabled
            :class="[
              $style['pagination__function'],
              $style['pagination__function--prev'],
            ]"
          >
            <IconLinkSmall aria-labelledby="prevDesc" role="img" />
            <desc id="catDesc" class="for-a11y">이전</desc>
          </button>
          <span :class="$style['pagination__list']">
            <a
              :class="[
                $style['pagination__item'],
                $style['pagination__item--selected'],
              ]"
              href="#"
              >1</a
            >
            <a :class="$style['pagination__item']" href="#">2</a>
            <a :class="$style['pagination__item']" href="#">3</a>
            <a :class="$style['pagination__item']" href="#">4</a>
            <a :class="$style['pagination__item']" href="#">5</a>
          </span>

          <button
            :class="[
              $style['pagination__function'],
              $style['pagination__function--next'],
            ]"
          >
            <IconLinkSmall aria-labelledby="nextDesc" role="img" />
            <desc id="nextDesc" class="for-a11y">다음</desc>
          </button>
        </div>
        <!-- //페이징 -->
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
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_l002.scss';
</style>
