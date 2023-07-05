<script>
// AF_P06_p008
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const state = reactive({
      nameError: false,
      phoneError: false,
    });

    return {
      store,
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '오토금융',
            to: '/',
          },
          {
            text: '중고차오토론',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>
        연락처를 남겨주시면<br />
        상담원이 친절하게 상담해 드리겠습니다
      </PageTitle>
    </PageHead>

    <FormList>
      <FormListItem titleText="이름" target="#AF_P06_p008_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="AF_P06_p008_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="연락처" target="#AF_P06_p008_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput pattern="\d*" title="연락처" id="AF_P06_p008_phone" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="약관동의" :forceFocus="true">
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="AF_P06_p008_phoneAgree001"
                  :classNames="{
                    wrap: $style['agree-list__depth-checkbox'],
                  }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>서비스 이용약관</CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="AF_P06_p008_phoneAgree001_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인정보 수집·이용 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </FormListItem>
    </FormList>

    <ButtonList align="full">
      <!-- Case : 기본 -->
      <ButtonListItem>
        <BasicButton>대출 신청하기</BasicButton>
      </ButtonListItem>
      <!-- // Case : 기본 -->

      <!-- Case : 시스템심사 & Fraud인 경우 -->
      <ButtonListItem>
        <BasicButton>상담예약신청</BasicButton>
      </ButtonListItem>
      <!-- // Case : 시스템심사 & Fraud인 경우 -->
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p008.scss';
</style>
