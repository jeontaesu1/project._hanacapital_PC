<script>
// Customer_P05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconMap from '@/assets/images/icon/map.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    TextButton,
    IconMap,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
      store.ui.header.setActive();
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '지점안내',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>지점안내</PageTitle>
    </PageHead>

    <div :class="$style['board-search-bar']">
      <InputBlock>
        <InputBlockCell :flexible="true">
          <BasicSelect
            :options="[
              {
                value: '1',
                label: '전체',
              },
              {
                value: '2',
                label: '서울',
              },
              {
                value: '3',
                label: '경기',
              },
              {
                value: '4',
                label: '강원',
              },
              {
                value: '5',
                label: '충청',
              },
              {
                value: '6',
                label: '경상',
              },
              {
                value: '7',
                label: '전라',
              },
              {
                value: '8',
                label: '제주',
              },
            ]"
            title="지역 선택"
            defaultValue="1"
          />
        </InputBlockCell>
      </InputBlock>
    </div>

    <div>
      <div :class="$style['maps']">
        <UiAccordion :classNames="{ wrap: $style['maps__list'] }">
          <UiAccordionItem
            v-for="i in 5"
            :key="i"
            :classNames="{ item: $style['maps__item'] }"
            v-slot="accordionItemSlotProps"
          >
            <div :class="$style['maps__head']">
              <div
                :class="[
                  $style['maps__head-cell'],
                  $style['maps__head-cell--branch'],
                ]"
              >
                본사
              </div>
              <div
                :class="[
                  $style['maps__head-cell'],
                  $style['maps__head-cell--title'],
                ]"
              >
                <div :class="$style['maps__title']">
                  서울 강남구 테헤란로 127 하나금융그룹 (역삼동, 강남사옥)
                </div>
              </div>
              <div
                :class="[
                  $style['maps__head-cell'],
                  $style['maps__head-cell--opener'],
                ]"
              >
                <TextButton
                  iconSize="large"
                  textSize="regular"
                  @click="accordionItemSlotProps.toggle"
                  :title="accordionItemSlotProps.opened ? '닫기' : '열기'"
                  :classNames="{ wrap: $style['maps__opener'] }"
                >
                  <template v-slot:leftIcon>
                    <IconMap :class="$style['maps__opener-icon']" />
                  </template>
                  지도보기
                </TextButton>
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['maps__area']">
                <div style="height: 100%; background-color: #f7f7f7">
                  // 지도 영역
                </div>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <!-- Case : 첫번째 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P05_p001.scss';
</style>
