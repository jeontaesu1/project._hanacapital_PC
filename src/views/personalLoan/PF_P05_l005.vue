<script>
// PF_P05_l005

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import AgreementBox from '@/components/ui/agreement/AgreementBox.vue';
import AgreementPaginationNav from '@/components/ui/agreement/AgreementPaginationNav.vue';
import AgreementPaginationNavArrow from '@/components/ui/agreement/AgreementPaginationNavArrow.vue';
import AgreementCurrentPageNumber from '@/components/ui/agreement/AgreementCurrentPageNumber.vue';
import AgreementTotalPageCount from '@/components/ui/agreement/AgreementTotalPageCount.vue';
import AgreementZoomArrow from '@/components/ui/agreement/AgreementZoomArrow.vue';
import AgreementZoomStatus from '@/components/ui/agreement/AgreementZoomStatus.vue';
import AgreementZoom from '@/components/ui/agreement/AgreementZoom.vue';
import AgreementFunction from '@/components/ui/agreement/AgreementFunction.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    AgreementBox,
    AgreementPaginationNav,
    AgreementPaginationNavArrow,
    AgreementCurrentPageNumber,
    AgreementTotalPageCount,
    AgreementZoom,
    AgreementZoomArrow,
    AgreementZoomStatus,
    AgreementFunction,
    BasicButton,
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
    <ModalPopup :agreement="true">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>온라인 약정 - 신용대출</PopupTitle>
        </ModalPopupHead>
      </template>
      <!-- 외부 프로그램 영역 == 주석내부 태그 삭제하고 사용해주세요.  -->
      <section
        v-bind:style="{
          background: 'rgba(255, 0, 0, 0.14)',
          display: 'flex',
          alignItems: 'center',
          height: '636px',
          justifyContent: 'center',
        }"
      >
        외부 프로그램 영역
      </section>
      <!-- //외부 프로그램 영역 -->
      <AgreementBox>
        <AgreementZoom>
          <AgreementZoomArrow type="reduction" />
          <AgreementZoomStatus>100%</AgreementZoomStatus>
          <AgreementZoomArrow type="enlargement" />
        </AgreementZoom>
        <AgreementPaginationNav>
          <AgreementPaginationNavArrow type="prev" :disabled="true" />
          <AgreementCurrentPageNumber>1</AgreementCurrentPageNumber>
          <span class="text-body-1 color-white">/</span>
          <AgreementTotalPageCount>10</AgreementTotalPageCount>
          <AgreementPaginationNavArrow type="next" />
        </AgreementPaginationNav>
        <AgreementFunction>
          <BasicButton size="small" :disabled="true">약정하기</BasicButton>
        </AgreementFunction>
      </AgreementBox>
    </ModalPopup>
  </UiLayer>
</template>
