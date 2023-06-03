<script>
// AF_P06_l002
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
        <NavTabButton
          tagName="AF_P06_l002_nabTab01"
          type="button"
          :active="true"
        >
          요약정보
        </NavTabButton>
        <NavTabButton tagName="AF_P06_l002_nabTab02" type="button">
          상세정보
        </NavTabButton>
      </NavTab>

      <div>
        <NoticeText
          :classNames="{
            wrap: 'row-margin-contents-group',
          }"
        >
          아래 정보는 고객님께서 조회하신 차량에 대한 조회일 현재(YYYY년 MM월 DD
          일) 보험 개발원의 실시간 정보입니다.
        </NoticeText>

        <div>
          <section class="row-margin-contents-small">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-title-2 font-weight-medium">일반사양</h3>
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>차량번호</KeyValueTitle>
                  <KeyValueText>12나1234</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>제조회사</KeyValueTitle>
                  <KeyValueText>대우</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>자동차 명</KeyValueTitle>
                  <KeyValueText>크루즈1.8DOHC</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>연식</KeyValueTitle>
                  <KeyValueText>2013년식</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>사용연료</KeyValueTitle>
                  <KeyValueText>가솔린</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>배기량</KeyValueTitle>
                  <KeyValueText>1796cc</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>자체형상</KeyValueTitle>
                  <KeyValueText>4도어노치백세단</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>용도 및 차종</KeyValueTitle>
                  <KeyValueText>자가용</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
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
                  <h3 class="text-title-2 font-weight-medium">사고이력 요약</h3>
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>용도 변경</KeyValueTitle>
                  <KeyValueText>이력없음</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>번호/소유자 변경</KeyValueTitle>
                  <KeyValueText>0회 / 0회</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>전손/침수/도난</KeyValueTitle>
                  <KeyValueText>
                    전손 : 이력없음<br />
                    침수 : 이력없음<br />
                    도난 : 이력없음
                  </KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>내가 가해</KeyValueTitle>
                  <KeyValueText>2회 / 1,073,880원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-1',
                  }"
                >
                  <KeyValueTitle>타차 피해</KeyValueTitle>
                  <KeyValueText>0회 / 0원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </section>
        </div>
      </div>
    </ModalPopup>
  </UiLayer>
</template>
