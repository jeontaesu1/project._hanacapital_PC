<script>
// AF_P01_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>리스/렌트 비교 정보</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th colspan="2">구분</th>
              <th>리스</th>
              <th>렌트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="2">관련법률</th>
              <td>
                여신전문금융업법<br />
                시설대업
              </td>
              <td>
                여객자동차운수사업법 상<br />
                자동차대여상업
              </td>
            </tr>
            <tr>
              <th colspan="2">등록명의</th>
              <td>리스회사</td>
              <td>렌트회사</td>
            </tr>
            <tr>
              <th colspan="2">번호판</th>
              <td>자가용</td>
              <td>영업용(하/허/호)용</td>
            </tr>
            <tr>
              <th colspan="2">차종</th>
              <td>제한 없음</td>
              <td>15인승 이하 승합,승용차</td>
            </tr>
            <tr>
              <th colspan="2">LPG차량</th>
              <td>불가</td>
              <td>가능</td>
            </tr>
            <tr>
              <th colspan="2">차량제한</th>
              <td>없음</td>
              <td>있음</td>
            </tr>
            <tr>
              <th colspan="2">최소 대여기간</th>
              <td>1년 이상</td>
              <td>1년 이상(장기렌트)</td>
            </tr>
            <tr>
              <th colspan="2">부가가치세</th>
              <td>면세</td>
              <td>과세(VAT 10% 포함)</td>
            </tr>
            <tr>
              <th colspan="2">보험요율</th>
              <td>고객 보험 요율(보험 경력 유지)</td>
              <td>렌터카사 보험 요율</td>
            </tr>
            <tr>
              <th rowspan="3">각종세금</th>
              <th>취득세</th>
              <td>공급가액의 7%</td>
              <td>공급가액의 4%</td>
            </tr>
            <tr>
              <th>공채매입률</th>
              <td>배기량에 따라 4% ~ 20%</td>
              <td>없음</td>
            </tr>
            <tr>
              <th>자동차세</th>
              <td>CC당 130~286원</td>
              <td>CC당 18~24원</td>
            </tr>
            <tr>
              <th colspan="2">주행제한거리</th>
              <td>주행거리 약정 (예 : 4만 km)</td>
              <td>3만 km ~ 무제한 약정가능</td>
            </tr>
            <tr>
              <th colspan="2">정비서비스</th>
              <td>미제공</td>
              <td>
                제공(단, 국산차 Self 상품 및<br />
                수입차렌트 제외)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P01_l002.scss';
</style>
