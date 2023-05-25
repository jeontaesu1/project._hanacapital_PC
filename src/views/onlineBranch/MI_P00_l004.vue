<script>
// MI_P00_l004
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
          <PopupTitle>자동이체 계좌 유의사항</PopupTitle>
        </ModalPopupHead>
      </template>

      <section>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  매월 결제일자 전까지 고객님께서 신청하신 자동이체 결제계좌에
                  입금하시면 됩니다.
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  (자기앞수표는 결제일자 2일전까지 입금하셔야 결제가
                  가능합니다.)
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  결제하셔야 할 금액보다 결제계좌의 잔고가 부족하더라도 일부
                  금액이 출금됩니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  은행마감시간 이후 자동이체 결제계좌에 입금된 금액은 출금되지
                  않을 수 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  연체금액이나 결제대금을 결제일자 전 일자에 가상계좌 등으로
                  입금하신 경우에는 자동이체 결제계좌에서 추가로 출금될 수
                  있으므로 주의하여 주시기 바라며, 이 경우 추가 출금이 확인된
                  금액은 2영업일 이후에 환급하여 드립니다.
                </div>
              </div>
            </li>
          </ol>
        </div>
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
            <BasicButton size="regular" @click="layerSlotProps.close()"
              >확인</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_l004.scss';
</style>
