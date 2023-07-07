<script>
// LM_P05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'lmBlog005');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>현황조회</PageTitle>
    </PageHead>

    <!-- Category -->
    <div :class="$style['status-inquiry']">
      <ul :class="$style['status-inquiry__list']">
        <li :class="$style['status-inquiry__item']">
          <button
            type="button"
            :class="[
              $style['status-inquiry__category'],
              $style['status-inquiry__category--active'],
            ]"
          >
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">전체</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">신용동의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">상담</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">계약</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">심사</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">송금</span>
          </button>
        </li>
      </ul>
    </div>
    <!-- // Category -->

    <div class="row-margin-block-small row-margin-top-none">
      // 조회 폼 추후 전달 예정
    </div>

    <!-- table -->
    <div :class="$style['basic-table']">
      <table>
        <colgroup>
          <col style="width: 113px" />
          <col style="width: 114px" />
          <col style="width: 122px" />
          <col />
          <col style="width: 114px" />
          <col style="width: 237px" />
          <col style="width: 237px" />
          <col style="width: 95px" />
          <col style="width: 95px" />
          <col style="width: 108px" />
        </colgroup>
        <thead>
          <tr>
            <th>성명</th>
            <th>등록일</th>
            <th>금액</th>
            <th>상품명</th>
            <th>신용동의</th>
            <th>상담</th>
            <th>품의(계약)</th>
            <th>심사</th>
            <th>정산결과</th>
            <th>서류등록</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-red">부결</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>반송</td>
            <td>미완료</td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>가승인</td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>미완료</td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>반송</td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr v-for="i in 4" :key="i">
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- // table -->

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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_P05_p001.scss';
</style>
