<script>
// AF_P06_p007
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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

    return {
      store,
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
      <PageHeadRow>
        <PageTitle align="left">중고차오토론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="3" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        실명인증 및 본인인증을 진행해 주세요
      </PageMainText>
    </PageHead>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="AF_P06_p007_agreeAll"
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
                      id="AF_P06_p007_agree_001"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                          id="AF_P06_p007_agree_001_001"
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
                          id="AF_P06_p007_agree_001_002"
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
                      id="AF_P06_p007_agree_002"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                          id="AF_P06_p007_agree_002_001"
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
                          id="AF_P06_p007_agree_002_002"
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
                      id="AF_P06_p007_agree_003"
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
                      <button type="button" :class="$style['agree-list__link']">
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
                          id="AF_P06_p007_agree_003_001"
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
                          id="AF_P06_p007_agree_003_002"
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
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>한도조회</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p007.scss';
</style>
