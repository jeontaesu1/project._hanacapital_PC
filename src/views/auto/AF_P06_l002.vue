<script>
// AF_P06_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
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
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    RoundTab,
    RoundTabButton,
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

      <UiTab>
        <NavTab type="popup" :useUiTab="true">
          <NavTabButton link="AF_P06_l002_Tab001">요약정보</NavTabButton>
          <NavTabButton link="AF_P06_l002_Tab002">상세정보</NavTabButton>
        </NavTab>

        <NoticeText
          :classNames="{
            wrap: 'row-margin-contents-group row-margin-top-none',
          }"
        >
          아래 정보는 고객님께서 조회하신 차량에 대한 조회일 현재(YYYY년 MM월 DD
          일) 보험 개발원의 실시간 정보입니다.
        </NoticeText>

        <!-- 요약정보 -->
        <UiTabPanel name="AF_P06_l002_Tab001">
          <div>
            <section class="row-margin-contents-small">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h3 class="text-title-2 font-weight-medium">일반사양</h3>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>

                <KeyValue>
                  <KeyValueItem>
                    <KeyValueTitle>차량번호</KeyValueTitle>
                    <KeyValueText>12나1234</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>제조회사</KeyValueTitle>
                    <KeyValueText>대우</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>자동차 명</KeyValueTitle>
                    <KeyValueText>크루즈1.8DOHC</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>연식</KeyValueTitle>
                    <KeyValueText>2013년식</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>사용연료</KeyValueTitle>
                    <KeyValueText>가솔린</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>배기량</KeyValueTitle>
                    <KeyValueText>1796cc</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>자체형상</KeyValueTitle>
                    <KeyValueText>4도어노치백세단</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>용도 및 차종</KeyValueTitle>
                    <KeyValueText>자가용</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>최초 보험 가입일</KeyValueTitle>
                    <KeyValueText>2012.07.16</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>

            <section class="row-margin-contents-small">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h3 class="text-title-2 font-weight-medium">
                      사고이력 요약
                    </h3>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>

                <KeyValue>
                  <KeyValueItem>
                    <KeyValueTitle>용도 변경</KeyValueTitle>
                    <KeyValueText>이력없음</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>번호/소유자 변경</KeyValueTitle>
                    <KeyValueText>0회 / 0회</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>전손/침수/도난</KeyValueTitle>
                    <KeyValueText>
                      전손 : 이력없음<br />
                      침수 : 이력없음<br />
                      도난 : 이력없음
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>내가 가해</KeyValueTitle>
                    <KeyValueText>2회 / 1,073,880원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>타차 피해</KeyValueTitle>
                    <KeyValueText>0회 / 0원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>
          </div>
        </UiTabPanel>
        <!-- // 요약정보 -->

        <!-- 상세정보 -->
        <UiTabPanel name="AF_P06_l002_Tab002">
          <div>
            <section class="row-margin-contents-small">
              <BasicBox>
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
            </section>

            <section class="row-margin-contents-small">
              <BasicBox>
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
            </section>

            <section class="row-margin-contents-small">
              <BasicBox>
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
            </section>
          </div>

          <section class="row-margin-block-small">
            <h3 class="text-title-1 row-margin-contents">보험처리 내역</h3>

            <RoundTab>
              <RoundTabButton tagName="button" type="button" :active="true">
                내차보험처리
              </RoundTabButton>
              <RoundTabButton tagName="button" type="button">
                타차보험처리
              </RoundTabButton>
              <RoundTabButton tagName="button" type="button">
                타차피해
              </RoundTabButton>
            </RoundTab>

            <UiAccordion>
              <UiAccordionItem
                v-for="i in 2"
                :key="i"
                :classNames="{ item: 'row-margin-contents-small' }"
              >
                <BasicBox>
                  <KeyValue>
                    <KeyValueItem :classNames="{ item: 'align-items-center' }">
                      <KeyValueTitle>2022.08.11</KeyValueTitle>
                      <KeyValueText>
                        <div class="flex-box">
                          <div class="flex-box__cell flex-1">
                            <UnitText rightUnit="원" align="right">
                              <span class="font-weight-medium">625,500</span>
                            </UnitText>
                          </div>
                          <div class="flex-box__cell">
                            <UiAccordionOpener
                              :classNames="{ button: $style['opener'] }"
                            />
                          </div>
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                  <UiAccordionLayer>
                    <div :class="$style['contents']">
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
        </UiTabPanel>
        <!-- // 상세정보 -->
      </UiTab>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_l002.scss';
</style>
