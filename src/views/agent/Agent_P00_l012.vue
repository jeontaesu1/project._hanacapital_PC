<script>
// Agent_P00_l012
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
          <PopupTitle>판매대리점 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="search-container">
          <table class="table-type-search">
            <colgroup>
              <col width="10%" />
              <col width="90%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="title">국가명</td>
                <td>
                  <div class="flex-container">
                    <input type="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="btn-container">
            <button class="btn btn-primary btn-search">검색</button>
          </div>
        </div>

        <div class="scroll-container">
          <div class="scroll-container">
            <div class="flex-container">
              <table class="table-type-04 bt none-bottom">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>국가코드</th>
                    <th>국가명</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="scroll-container">
            <div class="flex-container">
              <table class="table-type-04 body">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P00_l012.scss';
</style>
