<script>
// Agent_P00_l011
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
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>품목 선택</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="flex-container aifs no-gap fw bdrbt">
          <table class="table-type-04 w100p bt">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>품목 중분류</th>
                <th>품목 소분류</th>
                <th>품목 상세분류</th>
                <th>품목명</th>
              </tr>
            </thead>
          </table>
          <div class="scroll-container mxh-770 w25p bdrrt">
            <table class="table-type-04 body w100p">
              <tbody>
                <tr class="on">
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-770 w25p bdrlf">
            <table class="table-type-04 body w100p">
              <tbody class="scroll-container mxh-678">
                <tr class="on">
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-770 w25p bdrlf bdrrt">
            <table class="table-type-04 body w100p">
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr class="on">
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-770 w25p bdrlf">
            <table class="table-type-04 body w100p">
              <tbody>
                <tr class="on">
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l011.scss';
</style>
