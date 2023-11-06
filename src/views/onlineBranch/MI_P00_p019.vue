<script>
// MI_P00_p019
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconFixedDriver from '@/assets/images/icon/fixed-driver.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicBoxHeadRight,
    TextButton,
    IconAdd,
    IconFixedDriver,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '지정운전자 등록',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">지정운전자 등록</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">지정운전자 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <BasicBox className="row-margin-block-small">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-title-2 font-weight-medium">렌터카 159호5678</h3>
            <div :class="[$style['division-info'], 'row-margin-item-small']">
              <ul :class="$style['division-info__list']">
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    팰리세이드 디젤 2
                  </div>
                </li>
                <li :class="$style['division-info__item']">
                  <div class="text-body-3 color-gray-tertiary">
                    L99999999999999
                  </div>
                </li>
              </ul>
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>보험사</KeyValueTitle>
            <KeyValueText>탄톤칙김기매니</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>가입연령</KeyValueTitle>
            <KeyValueText>만 26세 이상</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>임직원특약</KeyValueTitle>
            <KeyValueText>미가입</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicHr type="contents" theme="tertiary" className="row-margin-block" />

      <section>
        <h3 class="text-title-1 row-margin-contents">지정운전자</h3>

        <ul class="reset-list">
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <p class="text-body-4 font-weight-light row-margin-small">
                    지정운전자 1
                  </p>
                  <h3 class="text-title-2 font-weight-medium">
                    김하나(친인척)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-box__cell--medium">
                      <TextButton
                        :underline="true"
                        :block="true"
                        :classNames="{
                          wrap: 'text-body-3 font-weight-medium color-gray-tertiary',
                        }"
                        >변경</TextButton
                      >
                    </div>
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>생년월일</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>전화번호</KeyValueTitle>
                  <KeyValueText>010-1234-5678</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>면허번호</KeyValueTitle>
                  <KeyValueText>01-23-456789-01</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>취득일자</KeyValueTitle>
                  <KeyValueText>2001.02.06</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>

          <!-- Case : 2인 등록일 경우 -->
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <p class="text-body-4 font-weight-light row-margin-small">
                    지정운전자 2
                  </p>
                  <h3 class="text-title-2 font-weight-medium">
                    김하나(친인척)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-box__cell--medium">
                      <TextButton
                        :underline="true"
                        :block="true"
                        :classNames="{
                          wrap: 'text-body-3 font-weight-medium color-gray-tertiary',
                        }"
                        >변경</TextButton
                      >
                    </div>
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>생년월일</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>전화번호</KeyValueTitle>
                  <KeyValueText>010-1234-5678</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>면허번호</KeyValueTitle>
                  <KeyValueText>01-23-456789-01</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>취득일자</KeyValueTitle>
                  <KeyValueText>2001.02.06</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
          <!-- // Case : 2인 등록일 경우 -->
        </ul>

        <!-- Case : 1인 등록 시 노출 -->
        <button
          type="button"
          :class="[$style['add-button'], 'row-margin-contents']"
        >
          <span :class="$style['add-button__inner']">
            <span :class="$style['add-button__img']">
              <IconFixedDriver />
            </span>
            <span :class="$style['add-button__text']">지정운전자 추가등록</span>
            <span :class="$style['add-button__icon']">
              <IconAdd />
            </span>
          </span>
        </button>
        <!-- //Case : 1인 등록 시 노출 -->
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p019.scss';
</style>
