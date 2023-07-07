<script>
// Agent_P00_l007
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
          <PopupTitle>개설은행 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="search--container">
          <div class="search--container__box">
            <div class="search--container__list">
              <div class="search--container__list-title">조회조건</div>
              <div class="search--container__list-contents w80p">
                <div class="select-container w80p">
                  <select>
                    <option>은행명</option>
                  </select>
                </div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div class="btn-container">
            <button class="btn btn-primary btn-search-02">검색</button>
          </div>
        </div>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="scroll-container">
          <div class="scroll-container mxh-378">
            <div class="flex-container">
              <table class="table-type-04 bt none-bottom">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>은행코드</th>
                    <th>은행명</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="scroll-container mxh-378">
            <div class="flex-container">
              <table class="table-type-04 body">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
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
@import '@/assets/scss/views/agent/Agent_P00_l007.scss';
</style>
