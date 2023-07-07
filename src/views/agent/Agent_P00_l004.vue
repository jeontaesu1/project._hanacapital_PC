<script>
// Agent_P00_l004
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
          <PopupTitle>상담등록내역</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="search--container">
          <div class="search--container__box">
            <div class="search--container__list">
              <div class="search--container__list-title">상담일자</div>
              <div class="search--container__list-contents w30p">
                <input type="date" v-model="startDate" />
                <span>~</span>
                <input type="date" v-model="endDate" />
              </div>
              <div class="search--container__list-title">검색조건</div>
              <div class="search--container__list-contents w40p">
                <div class="select-container w60p">
                  <select>
                    <option>고객명</option>
                  </select>
                </div>
                <input type="text" />
              </div>
            </div>
            <div class="search--container__list">
              <div class="search--container__list-title">판매점</div>
              <div class="search--container__list-contents w25p">
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

        <div class="search-count">
          <span>
            합계 : <span class="cGreen">85</span>건 /
            <span class="cGreen">2,700,462,280</span>원
          </span>

          <div class="btn-container">
            <button class="btn btn-s02">
              <i class="ico ico-excel f-main-color"></i>엑셀변환
            </button>
          </div>
        </div>

        <div class="scroll-container over-h">
          <table class="table-type-04 bt">
            <colgroup>
              <col width="7%" />
              <col width="9%" />
              <col width="8%" />
              <col width="15%" />
              <col width="12%" />
              <col width="8%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="8%" />
            </colgroup>
            <thead>
              <tr>
                <th>상담일</th>
                <th>구분</th>
                <th>고객명</th>
                <th>주민/사업자번호</th>
                <th>신청금액</th>
                <th>상담결과</th>
                <th>AG손배조건부</th>
                <th>제휴점</th>
                <th>품목</th>
                <th>판매점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
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
@import '@/assets/scss/views/agent/Agent_P00_l004.scss';
</style>
