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

import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

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
    PaginationNav,
    PaginationNavArrow,
    PaginationNavNumber,
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
        <PaginationNav class="row-margin-contents">
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
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
