<script>
// Agent_P02_l002
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
          <PopupTitle>상환스케줄 시뮬레이터</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <div class="search--container">
          <div class="search--container__box">
            <div class="title">상환정보입력</div>
            <div class="search--container__list">
              <div class="search--container__list-title">할부원금</div>
              <div class="search--container__list-contents">
                <input type="text" class="rt" />원
              </div>
              <div class="search--container__list-title">대출일자</div>
              <div class="search--container__list-contents">
                <input type="date" />
              </div>
              <div class="search--container__list-title">초회납입일자</div>
              <div class="search--container__list-contents">
                <input type="date" />
              </div>
            </div>
            <div class="search--container__list">
              <div class="search--container__list-title">상환기간/금리</div>
              <div class="search--container__list-contents w30p">
                <input type="text" class="rt w40p" />개월
                <input type="text" class="rt w35p" />%
              </div>
              <div class="search--container__list-title">
                내구재이자부과구분
              </div>
              <div class="search--container__list-contents">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" checked />
                    <span class="small"></span>
                    이자부과
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span class="small"></span>
                    부분이자
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span class="small"></span>
                    무이자
                  </label>
                </div>
              </div>
            </div>
            <div class="search--container__list mb40">
              <div class="search--container__list-title">
                내구재물품기본금리
              </div>
              <div class="search--container__list-contents w15p">
                <input type="text" class="rt" />%
              </div>
              <div class="search--container__list-title">결제일자</div>
              <div class="search--container__list-contents w10p">
                <div class="select-container">
                  <select>
                    <option>선택</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="title">선취수수료</div>
            <div class="search--container__list">
              <div class="search--container__list-title">
                내구재선취수수료율
              </div>
              <div class="search--container__list-contents w15p">
                <input type="text" class="rt" disabled />%
              </div>
              <div class="search--container__list-title">내구재선취수수료</div>
              <div class="search--container__list-contents w15p">
                <input type="text" class="rt" disabled />원
              </div>
            </div>
          </div>

          <div class="btn-container">
            <button class="btn btn-primary btn-search-02">산출</button>
          </div>
        </div>

        <div class="title">
          상한스케줄
          <div class="btn-container">
            <button class="btn btn-s03">
              <i class="ico ico-print"></i>
              인쇄하기
            </button>
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
              <col width="6%" />
              <col width="9%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
              <col width="13%" />
            </colgroup>
            <thead>
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
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">1</td>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center">999,999,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_l002.scss';
</style>
