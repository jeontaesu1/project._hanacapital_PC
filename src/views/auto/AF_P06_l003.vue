<script>
// AF_P06_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    NavTab,
    NavTabButton,
    NoticeText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    UnitText,
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
          <PopupTitle>사고이력조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <NavTab type="popup">
        <NavTabButton tagName="button" type="button">요약정보</NavTabButton>
        <NavTabButton tagName="button" type="button" :active="true">
          상세정보
        </NavTabButton>
      </NavTab>

      <NoticeText>
        아래 정보는 고객님께서 조회하신 차량에 대한 조회일 현재(YYYY년 MM월 DD
        일) 보험 개발원의 실시간 정보입니다.
      </NoticeText>

      <div class="row-margin-contents-group">
        <BasicBox className="row-margin-contents-small">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">발신자 정보</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>대여(렌터카)이력</KeyValueTitle>
              <KeyValueText>대여용이력없음</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>영업용이력</KeyValueTitle>
              <KeyValueText>영업용이력없음</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>관용이력</KeyValueTitle>
              <KeyValueText>관용이력없음</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox className="row-margin-contents-small">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">소유자 변경</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>20.02.02</KeyValueTitle>
              <KeyValueText>소유자 변경</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>20.02.02</KeyValueTitle>
              <KeyValueText>소유자 변경</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox className="row-margin-contents-small">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">특수사고</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle>전손</KeyValueTitle>
              <KeyValueText>이력없음</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>침수</KeyValueTitle>
              <KeyValueText>이력없음</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>도난</KeyValueTitle>
              <KeyValueText>이력없음</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <section class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-small">보험처리 내역</h3>
          //라운드 탭

          <UiAccordion :classNames="{ wrap: 'row-margin-contents' }">
            <UiAccordionItem
              :classNames="{ item: 'row-margin-contents-small' }"
            >
              <BasicBox :className="$style['application']">
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="text-body-1 font-weight-regular color-gray">
                      2022.08.11
                    </div>
                  </div>
                  <div class="flex-box__cell flex-1">
                    <UnitText rightUnit="원" align="right"> 625,500 </UnitText>
                  </div>
                  <div class="flex-box__cell">
                    <UiAccordionOpener />
                  </div>
                </div>
                <UiAccordionLayer>
                  <div :class="$style['application-contents']">
                    <KeyValue>
                      <KeyValueItem>
                        <KeyValueTitle>부품</KeyValueTitle>
                        <KeyValueText>240,360 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>공임</KeyValueTitle>
                        <KeyValueText>81,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>도장</KeyValueTitle>
                        <KeyValueText>244,940 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>보험비용</KeyValueTitle>
                        <KeyValueText>566,300 원</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </UiAccordionLayer>
              </BasicBox>
            </UiAccordionItem>

            <UiAccordionItem
              :initialOpen="true"
              :classNames="{ item: 'row-margin-contents-small' }"
            >
              <BasicBox :className="$style['application']">
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="text-body-1 font-weight-regular color-gray">
                      2022.10.05
                    </div>
                  </div>
                  <div class="flex-box__cell flex-1">
                    <UnitText rightUnit="원" align="right">566,360</UnitText>
                  </div>
                  <div class="flex-box__cell">
                    <UiAccordionOpener />
                  </div>
                </div>
                <UiAccordionLayer>
                  <div :class="$style['application-contents']">
                    <KeyValue>
                      <KeyValueItem>
                        <KeyValueTitle>부품</KeyValueTitle>
                        <KeyValueText>240,360 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>공임</KeyValueTitle>
                        <KeyValueText>81,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>도장</KeyValueTitle>
                        <KeyValueText>244,940 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>보험비용</KeyValueTitle>
                        <KeyValueText>566,300 원</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </UiAccordionLayer>
              </BasicBox>
            </UiAccordionItem>
          </UiAccordion>
        </section>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_l003.scss';
</style>
