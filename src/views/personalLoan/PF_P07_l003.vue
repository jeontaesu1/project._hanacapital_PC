<script>
// PF_P07_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>월 납입금 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-regular">월 납입액</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <UnitText rightUnit="원" align="right">300,000</UnitText>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>대출원금</KeyValueTitle>
            <KeyValueText>1,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>이자합계</KeyValueTitle>
            <KeyValueText>167 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>총 상환금액</KeyValueTitle>
            <KeyValueText>1,000,167 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">예상 상환 스케쥴</h3>

        <ul :class="$style['bill-list']">
          <li v-for="i in 4" :key="i" :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__title']">
                  <div class="flex-box">
                    <div class="flex-box__cell">{{ i }}회차</div>
                    <div class="flex-box__cell flex-box__cell--small">
                      <div class="text-body-4">(2022.1.1)</div>
                    </div>
                  </div>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_l003.scss';
</style>
