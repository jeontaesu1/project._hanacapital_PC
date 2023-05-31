<script>
// IF_P02_l001
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
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>재고금융 확약서</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">확약서</h3>

        <p class="text-body-4 font-weight-light">
          본인은 귀사에서 제공하는 중고차 구입자금 대출(이하 ‘중고차
          재고금융‘이라고 함)을 이용함에 있어 다음과 같이 확약합니다.
        </p>
        <h3 class="text-body-2 row-margin-item-medium">-아래-</h3>

        <p class="text-body-4 font-weight-light">
          본인은 귀사에 중고차 재고금융 운영기준에 규정된 아래의취급 불가 차량을
          대상으로 대출을 신청하여 위 대출을 신청하여 위 대출이 신청된 경우,
          귀사가 대출 취소 등 불이익을 적용하는 것에 대하여 이의를 제기하지
          않겠습니다.
        </p>

        <div :class="[$style['basic-table'], 'row-margin-item-group']">
          <table>
            <colgroup>
              <col style="width: 102px" />
              <col style="width: 219px" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-body-5 color-gray">취급 불가 차량</td>
                <td class="align-left">
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--normal-margin'],
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        위탁 판매 차량
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        상사 이전 1개월 초과 차량
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        병행 수입(Gray)차량
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        상사건 거래 및 도매업자 매입 차량
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="row-margin-contents">
        <h3 class="text-body-2 row-margin-item-medium">근저당권 추가 설정</h3>
        <p class="text-body-4 font-weight-light">
          신청자주의 신용/재무상태 악화, 부도, 연체 등 경영상태 악화 시
          재고금융이용차량에 대한 담보력 증가 위해 최초 차량 근저당권 설정에
          더하여 근저당권 추가 설정 가능하며 그러한 경우, 귀사의 근저당권 추가
          설정에 대해 이의를 제기하지 않겠습니다.
        </p>
      </section>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P02_l001.scss';
</style>
