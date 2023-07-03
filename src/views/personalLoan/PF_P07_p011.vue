<script>
// PF_P07_p011
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    SecurityKeypadButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },

  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      idNumberError: false,
    });

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
      store.ui.header.setActive();
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '스탁론',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        실명 및 본인인증을 진행해 주세요
      </PageMainText>
    </PageHead>

    <FormList>
      <FormListItem titleText="이름" target="#PF_P07_p011_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="PF_P07_p011_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#PF_P07_p011_id">
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="PF_P07_p011_id"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, true, true, false, false, false, false]"
              />
            </InputBlockCell>
            <InputBlockCell>
              <SecurityKeypadButton />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <!-- Case : '확인' 선택시 노출 -->
    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <div :class="$style['agree-list__all-contents']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="PF_P07_p011_agree001"
                  :classNames="{
                    wrap: $style['agree-list__depth-checkbox'],
                  }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>
                    서비스 이용약관 전체동의
                  </CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p011_agree_001_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인(신용)정보 필수적 수집 · 이용동의
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
                    <ul
                      :class="[
                        $style['agree-list__list'],
                        $style['agree-list__list--secondary'],
                      ]"
                    >
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별번호 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p011_agree_001_002"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                        >
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
                    <ul
                      :class="[
                        $style['agree-list__list'],
                        $style['agree-list__list--secondary'],
                      ]"
                    >
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_002_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 필수적 조회</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_002_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >고유식별번호 필수적 조회</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p011_agree_001_003"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 제공 동의</CheckBoxLabelText
                        >
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
                    <ul
                      :class="[
                        $style['agree-list__list'],
                        $style['agree-list__list--secondary'],
                      ]"
                    >
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_003_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인(신용)정보 필수적 제공</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="PF_P07_p011_agree_001_003_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >고유식별번호 필수적 제공</CheckBoxLabelText
                            >
                          </CheckBox>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- // Case : '확인' 선택시 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p011.scss';
</style>
