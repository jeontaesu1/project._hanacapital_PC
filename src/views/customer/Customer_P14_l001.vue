<script>
// Customer_P14_l001
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
          <PopupTitle>정보이용·제공 내역 출력</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <h3 class="text-title-1 row-margin-small">김하나 귀하</h3>

        <p class="text-body-1 font-weight-light color-gray-secondary">
          신용정보의 이용 및 보호에 관한 법률 제35조에 따라<br />
          당사는 2023년 07월 17일(조회기준일자)부터 최근 3년간 귀하의
          개인신용정보를 이용 · 제공한 내역을 아래와 같이 통지합니다.
        </p>

        <section class="row-margin-container-medium">
          <h4 class="text-body-1 row-margin-item-group">정보 이용 현황</h4>

          <!-- Case : 이용 현황 있는 경우 노출 -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col style="width: 80px" />
                <col style="width: 120px" />
                <col />
                <col />
                <col style="width: 144px" />
              </colgroup>
              <thead>
                <tr>
                  <th rowspan="2">동의일자</th>
                  <th rowspan="2">이용일자</th>
                  <th rowspan="2">이용주체</th>
                  <th colspan="2">동의내용</th>
                  <th rowspan="2">보유 및 이용기간</th>
                </tr>
                <tr>
                  <th :class="$style['basic-table__left-line']">이용목적</th>
                  <th>이용항목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2011.11.11</td>
                  <td>2011.11.11</td>
                  <td>CRM사업팀</td>
                  <td>마케팅 목적 TM 및 SMS 발송</td>
                  <td>성명, 금융거래내역, 핸드폰번호</td>
                  <td>금융거래 종료일 또는 마케팅 동의 철회일까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // Case : 이용 현황 있는 경우 노출 -->

          <!-- Case : 이용 현황 없는 경우 노출 -->
          <p :class="$style['not-table']">
            고객님의 정보로 이용된 내역이 없습니다
          </p>
          <!-- // Case : 이용 현황 없는 경우 노출 -->
        </section>

        <section class="row-margin-container-medium row-margin-bottom-none">
          <h4 class="text-body-1 row-margin-item-group">정보 제공 현황</h4>

          <p class="text-body-1">
            최근 3년간 고객님의 개인정보를 마케팅 목적으로 다른 회사에 제공할 수
            있도록 다음과 같이 동의 받은 사실이 있습니다.<br />
            당사의 마케팅을 원치 않는 경우 [정보이용·제공 동의 철회] 버튼을
            클릭하거나, 고객센터(1800-1110)를 통해 철회할 수 있습니다.
          </p>
          <p class="text-body-1 row-margin-item-medium">
            하나캐피탈은 마케팅목적으로 개인신용정보를 다른회사(제3자)에게
            제공하지 않습니다.
          </p>
        </section>

        <div class="row-margin-contents-small">
          <p
            class="text-body-1 color-gray-tertiary font-weight-light align-right"
          >
            2021년 09월 23일
          </p>

          <div :class="$style['sign']">
            <img
              src="@/assets/images/contents/img-sign-hanacapital.png"
              alt="하나캐피탈주식회사 대표이사 사인"
            />
          </div>
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
            <BasicButton>출력하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_l001.scss';
</style>
