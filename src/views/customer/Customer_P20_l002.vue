<script>
// Customer_P20_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconStar from '@/assets/images/icon/star-badge.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    IconStar,
  },
  setup() {
    const state = reactive({
      nameError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>대출모집법인소속 임직원 조회</PopupTitle>
          <template v-slot:sub>
            <PopupSubTitle>
              하나캐피탈과 위탁계약을 체결한 모집법인의 직원만 조회됩니다.
            </PopupSubTitle>
          </template>
        </ModalPopupHead>
      </template>

      <div :class="$style['contents-wrap']">
        <FormList>
          <FormListItem titleText="이름" target="#Customer_P20_l002_name">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="Customer_P20_l002_name" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>

      <!-- Case : 조회 후 노출 -->
      <div :class="$style['contents-wrap']">
        <h3 class="text-title-1 row-margin-contents">조회결과</h3>

        <!-- Case : 조회 성공 시 노출 -->
        <ul class="reset-list">
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="text-title-2 font-weight-medium">홍길동</div>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue verticalAlign="center">
                <KeyValueItem>
                  <KeyValueTitle>소속</KeyValueTitle>
                  <KeyValueText>제휴마케팅팀</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>모집법인</KeyValueTitle>
                  <KeyValueText>F&U신용정보</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>협회등록번호</KeyValueTitle>
                  <KeyValueText>135311-0003300</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>연락처</KeyValueTitle>
                  <KeyValueText>2037-1978</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <div :class="$style['icon-box']">
                <div :class="$style['icon-box__icon']">
                  <IconStar />
                </div>
                <div :class="$style['icon-box__content']">
                  <p class="text-title-2">
                    조회하신 직원은 하나캐피탈과 위탁계약을 체결한<br />
                    <span class="color-green font-weight-bold"
                      >OOO 모집법인</span
                    >에 소속된 <br />방문/전화권유
                    <span class="font-weight-bold">판매원으로 등록</span>되어
                    있습니다.
                  </p>
                </div>
              </div>
            </BasicBox>
          </li>
        </ul>
        <!-- // Case : 조회 성공 시 노출 -->

        <!-- Case : 조회 실패 시 노출 -->
        <div>
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">
              조회하신 직원은 검색되지 않습니다.<br />
              성명을 다시 확인해 주시기 바랍니다.
            </p>
          </div>

          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
            문의사항이 있는 경우 당사 손님상담센터(1800-1110)에 문의하시기
            바랍니다.
          </NoticeText>
          <!-- // Case : 조회 실패 시 노출 -->
        </div>
      </div>
      <!-- // Case : 조회 후 노출 -->

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">조회</BasicButton>
          </ButtonListItem>
          <!-- Case : 조회 후 노출 -->
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
          <!-- // Case : 조회 후 노출 -->
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P20_l002.scss';
</style>
