<script>
// PF_P02_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicHr,
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
          <PopupTitle>아파트 검색</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <InputBlock type="search" :classNames="{ wrap: 'row-margin-contents' }">
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="아파트 검색어"
              placeholder="동(읍/면) 또는 아파트 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>

        <!-- Case : 검색 후 노출 -->

        <BasicHr
          className="row-margin-container-medium"
          theme="secondary"
          type="popup"
        />

        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 때 -->
        <ul :class="$style['search-list']">
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
        </ul>
        <!-- // Case : 결과 있을 때 -->

        <!-- // Case : 검색 후 노출 -->
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P02_l001.scss';
</style>
