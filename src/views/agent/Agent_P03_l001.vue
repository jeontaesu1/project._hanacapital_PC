<script>
// Agent_P03_l001
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
          <PopupTitle>승계 전 이용자 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="search--container">
          <div class="search--container__box">
            <div class="search--container__list">
              <div class="search--container__list-title">성명/상호</div>
              <div class="search--container__list-contents w20p">
                <input type="text" />
              </div>
              <div class="search--container__list-title">주민/사업자번호</div>
              <div class="search--container__list-contents w20p">
                <input type="text" />
              </div>
              <div class="search--container__list-title">연락처</div>
              <div class="search--container__list-contents w20p">
                <input type="text" />
              </div>
            </div>
          </div>

          <div class="btn-container">
            <button class="btn btn-primary btn-search-02">조회</button>
          </div>
        </div>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="scroll-container over-h">
          <table class="table-type-01">
            <colgroup>
              <col width="8%" />
              <col width="9%" />
              <col width="13%" />
              <col width="11%" />
              <col width="7%" />
              <col width="12%" />
              <col width="8%" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>채권상태</th>
                <th>성명/상호</th>
                <th>주민/사업번호</th>
                <th>실행일자</th>
                <th>실행금액</th>
                <th>원금잔액</th>
                <th>총회차</th>
                <th>품목</th>
                <th>판매점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">정상</td>
                <td class="txt-center">홍길동</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">20개월</td>
                <td class="txt-center">이온수기_온누리헬스케어_무</td>
                <td class="txt-center">㈜온누리헬스케어</td>
              </tr>
              <tr>
                <td class="txt-center">정상</td>
                <td class="txt-center">홍길동</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">20개월</td>
                <td class="txt-center">이온수기_온누리헬스케어_무</td>
                <td class="txt-center">㈜온누리헬스케어</td>
              </tr>
              <tr>
                <td class="txt-center">정상</td>
                <td class="txt-center">홍길동</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">20개월</td>
                <td class="txt-center">이온수기_온누리헬스케어_무</td>
                <td class="txt-center">㈜온누리헬스케어</td>
              </tr>
              <tr>
                <td class="txt-center">정상</td>
                <td class="txt-center">홍길동</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">20개월</td>
                <td class="txt-center">이온수기_온누리헬스케어_무</td>
                <td class="txt-center">㈜온누리헬스케어</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="paging">
          <li class="first">&lt;</li>
          <li class="on">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li class="dot"></li>
          <li>25</li>
          <li class="last">&gt;</li>
        </ul>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P03_l001.scss';
</style>
