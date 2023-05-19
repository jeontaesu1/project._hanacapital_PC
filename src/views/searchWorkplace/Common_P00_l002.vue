<script>
// Common_P00_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

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
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
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
    <UiTab type="popup" v-slot="tabSlotProps">
      <ModalPopup
        :classNames="{
          foot:
            tabSlotProps.activeName !== 'layerSearchWorkplaceTab003'
              ? 'display-none'
              : '',
          bodyInner:
            tabSlotProps.activeName !== 'layerSearchWorkplaceTab003'
              ? $style['only-body']
              : '',
        }"
      >
        <template v-slot:head>
          <ModalPopupHead>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
            <PopupTitle>직장 검색</PopupTitle>
          </ModalPopupHead>
          <NavTab :useUiTab="true" type="popup-head">
            <NavTabButton link="layerSearchWorkplaceTab001"
              >직장명</NavTabButton
            >
            <NavTabButton link="layerSearchWorkplaceTab002"
              >사업자번호</NavTabButton
            >
            <NavTabButton link="layerSearchWorkplaceTab003"
              >직접입력</NavTabButton
            >
          </NavTab>
        </template>

        <div :class="$style['top']">
          <UiTabPanel name="layerSearchWorkplaceTab001">
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="search"
                  title="직장명 검색어"
                  placeholder="직장명 검색"
                />
              </InputBlockCell>
              <InputBlockCell type="search">
                <SearchButton />
              </InputBlockCell>
            </InputBlock>

            <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
              실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수 있어요.
            </NoticeText>
          </UiTabPanel>

          <UiTabPanel name="layerSearchWorkplaceTab002">
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="search"
                  title="사업자번호 검색어"
                  placeholder="사업자번호 입력"
                />
              </InputBlockCell>
              <InputBlockCell type="search">
                <SearchButton />
              </InputBlockCell>
            </InputBlock>

            <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
              실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수 있어요.
            </NoticeText>
          </UiTabPanel>

          <UiTabPanel name="layerSearchWorkplaceTab003">
            <FormList>
              <FormListItem
                titleText="직장명"
                target="#layerSearchWorkplaceName"
              >
                <FormInvalid :error="state.nameError">
                  <InputBlock :error="state.nameError">
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="직장명"
                        id="layerSearchWorkplaceName"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>
            </FormList>

            <NoticeText :classNames="{ wrap: 'row-margin-contents-small' }">
              직접 입력하는 경우 검색결과와 상관없이 입력한 값이 저장됩니다.
            </NoticeText>
          </UiTabPanel>
        </div>

        <!-- DD : 검색 후 노출 -->
        <BasicHr
          theme="secondary"
          type="popup"
          className="row-margin-container-medium"
          v-if="tabSlotProps.activeName !== 'layerSearchWorkplaceTab003'"
        />

        <div
          class="contents-wrap"
          v-if="tabSlotProps.activeName !== 'layerSearchWorkplaceTab003'"
        >
          <div class="row-margin-container">
            <p class="text-body-3 color-gray">
              <strong class="font-weight-medium color-green">999</strong> 건
            </p>
            <BasicHr theme="quaternary" className="row-margin-item-medium" />
          </div>

          <!-- Case : 결과 없을 때 -->
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
          </div>
          <!-- // Case : 결과 없을 때 -->

          <!-- Case : 결과 있을 때 -->
          <UiAccordion>
            <UiAccordionItem
              v-for="i in 3"
              :key="i"
              :classNames="{ item: 'row-margin-container' }"
            >
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <h4 class="text-title-2 font-weight-medium">하나캐피탈</h4>
                  <div :class="[$style['division-info'], 'row-margin-small']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 font-weight-light">홍길동</div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 font-weight-light">
                          210-91-12345
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>
              <UiAccordionLayer>
                <div :class="$style['contents']">
                  <BasicBox>
                    <KeyValue>
                      <KeyValueItem>
                        <KeyValueTitle>법인번호</KeyValueTitle>
                        <KeyValueText>123-45-678910</KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>대표번호</KeyValueTitle>
                        <KeyValueText>1599-1234</KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>주소</KeyValueTitle>
                        <KeyValueText>서울 중구 을지로 35</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </BasicBox>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
          <!-- // Case : 결과 있을 때 -->
        </div>
        <!-- // DD : 검색 후 노출 -->

        <template v-slot:foot>
          <ButtonList
            :wrap="true"
            align="center"
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton size="regular">입력</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </template>
      </ModalPopup>
    </UiTab>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/searchWorkplace/Common_P00_l002.scss';
</style>
