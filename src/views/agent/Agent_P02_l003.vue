<script>
// Agent_P02_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
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
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>상환스케줄</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <h3 class="text-title-1 row-margin-contents">계약내용</h3>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="align-left">이용자</th>
                <td class="align-left">김하나</td>
                <th class="align-left">계약번호</th>
                <td class="align-left">Data</td>
                <th class="align-left">할부원금</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">주민/사업번호</th>
                <td class="align-left">123-12-12345</td>
                <th class="align-left">실행일자</th>
                <td class="align-left">2023.01.01</td>
                <th class="align-left">취급수수료</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">상품종류</th>
                <td class="align-left">Data</td>
                <th class="align-left">할부기간</th>
                <td class="align-left">12개월</td>
                <th class="align-left">유예원금</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">품목명</th>
                <td colspan="5" class="align-left">Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="row-margin-block-small">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-1">상환스케쥴</h3>
          </div>
          <BasicButton inline="true" theme="quaternary" size="small">
            인쇄하기
          </BasicButton>
        </div>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 76px" />
              <col style="width: 114px" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>회차</th>
                <th>납부계획일</th>
                <th>원금</th>
                <th>이자</th>
                <th>① 매회납부금</th>
                <th>② 기타금액</th>
                <th>납부금액(①+②)</th>
                <th>미회수원금</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>3</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>4</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>5</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>6</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>7</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>8</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>9</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>10</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>11</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
              <tr>
                <td>12</td>
                <td>2022.03.04</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
                <td>999,999,999 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P02_l003.scss';
</style>
