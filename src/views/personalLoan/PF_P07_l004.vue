<script>
// PF_P07_l004
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
          <PopupTitle>
            스탁론 추가 약정서
            <p :class="$style['summary-text-ty1']">
              (스탁론 대출 최대만기일 변경 등에 대한 주식매입자금(주식담보)대출 추가약정용)
            </p>
          </PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <p :class="$style['agree-text-ty1']">
          본인은 하나캐피탈 주식회사 (이하 “하나캐피탈” 이라 한다) 와 체결한 YYYY년 MM월 DD일자 주식매입자금(주식담보)대출 (이하 “스탁론”이라 한다)에 관한 스탁론 약정서 (이하 “원약정” 이라 한다)에 대하여 아래와 같이 추가약정서 (이하 “본 약정” 이라 한다)를 체결합니다.
        </p>
        <h3 :class="[$style['agree-h3-ty1'], $style['mt-40']]">제1조 (목적)</h3>
        <p :class="[$style['agree-text-ty2'], $style['mt-6']]">
          본 약정서는 원 약정서에 따른 기존대출약정의 대출기한이 연장되는 범위를 변경함에 있어서 제반사항을 정하기 위하여 <br />체결되었습니다.
        </p>
        <h3 :class="[$style['agree-h3-ty1'], $style['mt-16']]">
          제2조 (대출 조건의 변경)
        </h3>
        <p :class="[$style['agree-text-ty2'], $style['mt-6']]">
          ① 원 약정서상 [특약사항]을 다음과 같이 변경합니다.
        </p>
        <section :class="$style['mt-16']">
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 140px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th :class="$style['basic-table__left-line']">특이사항</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>변경 전</td>
                  <td :class="$style['al-text-left']">
                    본 대출 실행 후 대출금의 기한 도래 시 회사의 상품운영기준에 따른 연장조건에 부합할 경우, 변경금리(연장시점의 금리) 확인 또는 안내 후 별도의 기한연장신청서를 작성하지 않고 증권계좌 최저담보비율에 만기해당월 이자를 현금으로 보유한 경우에 잔액 범위 내에서 최초 약정기간 포함하여 최장 5년 범위 내 12개월 단위로 기한연장 처리하고, 회사는 고객에게 연장완료 사실을 안내합니다.
                  </td>
                </tr>
                <tr>
                  <td>변경 후</td>
                  <td :class="$style['al-text-left']">
                    본 대출 실행 후 대출금의 기한 도래 시 회사의 상품운영기준에 따른 연장조건에 부합할 경우, 변경금리(연장시점의 금리) 확인 또는 안내 후 별도의 기한연장신청서를 작성하지 않고 증권계좌 최저담보비율에 만기해당월 이자를 현금으로 보유한 경우에 잔액 범위 내에서 최초 약정기간 포함하여 최장 10년 범위 내 12개월 단위로 기한연장 처리하고, 회사는 고객에게 연장완료 사실을 안내합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //  -->

          <!-- Case : 이용 현황 없는 경우 노출 -->
          <!--
          <p :class="$style['not-table']">
            고객님의 정보로 이용된 내역이 없습니다
          </p>-->
          <!-- // Case : 이용 현황 없는 경우 노출 -->
        </section>
        <p :class="[$style['agree-text-ty2'], $style['mt-16']]">
          ② 제1항에 따라 원 약정서에 따른 기존대출약정의 대출 만기일의 최장 연장기한이 10년으로 변경됩니다. 즉, 본 약정에 따라 변경되는 내용은 아래와 같습니다.
        </p>
        <h3 :class="[$style['agree-h3-ty1'], $style['mt-16']]">
          제3조 (계약기간)
        </h3>
        <p :class="[$style['agree-text-ty2'], $style['mt-6']]">
          본 약정은 기존대출약정의 계약기간이 만료될 경우 그 효력을 상실합니다.
        </p>
        <!--
        <section class="row-margin-container-medium row-margin-bottom-none">
          <h4 class="text-body-1 row-margin-item-group"></h4>
          <p class="text-body-1">
          </p>
          <p class="text-body-1 row-margin-item-medium">
          </p>
        </section>
        -->
        <div class="row-margin-contents-small">
          <p class="text-body-1 font-weight-light align-right">
            YYYY년 MM월DD일
          </p>
          <p
            class="text-body-1 font-weight-light align-right mt-8"
            style="margin-top: 8px"
          >
            본인(대출받는자) 성명 : 홍길동 (인)
          </p>
          <p
            class="text-body-1 font-weight-light align-right mt-8"
            style="margin-top: 8px"
          >
            증권계좌번호 : OOOOOOOOOO
          </p>
          <!--
          <div :class="$style['sign']">
            <img
              src="@/assets/images/contents/img-sign-hanacapital.png"
              alt="하나캐피탈주식회사 대표이사 사인"
            />
          </div>
          -->
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          :col="3"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_l004_agreement.scss';
</style>
