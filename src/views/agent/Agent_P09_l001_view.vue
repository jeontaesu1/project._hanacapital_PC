<script>
// Agent_P09_l001 상세보기
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
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
          <PopupTitle>SGI 가입정보</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="[$style['basic-table'], $style['basic-table--secondary']]">
        <table>
          <colgroup>
            <col style="width: 160px" />
            <col />
            <col style="width: 160px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="align-left">제휴사 주문번호</th>
              <td class="align-left">12345@678901</td>
              <th class="align-left">상담번호</th>
              <td class="align-left">C12345678901234</td>
            </tr>
            <tr>
              <th class="align-left">고객명</th>
              <td class="align-left">홍길동</td>
              <th class="align-left">가입금액</th>
              <td class="align-left">2,000,000 원</td>
            </tr>
            <tr>
              <th class="align-left">시작일</th>
              <td class="align-left">2023.01.01</td>
              <th class="align-left">종료일</th>
              <td class="align-left">2023.01.01</td>
            </tr>
            <tr>
              <th class="align-left">SGI담당지점</th>
              <td class="align-left">강남지점</td>
              <th class="align-left">SGI담당자명</th>
              <td class="align-left">김하나</td>
            </tr>
            <tr>
              <th class="align-left">SGI증권번호</th>
              <td class="align-left">123456789012345</td>
              <th class="align-left">SGI담당자번호</th>
              <td class="align-left">1234-5678-9012</td>
            </tr>
            <tr>
              <th class="align-left">사서함번호(전)</th>
              <td class="align-left">123456789012</td>
              <th class="align-left">사서함번호(후)</th>
              <td class="align-left">123456789012</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P09_l001_view.scss';
</style>
