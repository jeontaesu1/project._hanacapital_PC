<script>
// LM_P03_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
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
      store.ui.header.setActive(() => 'lmBlog002');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const startDate = '2022-01-01';
    const endDate = '2022-01-01';

    return {
      startDate,
      endDate,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>SMS상담요청 내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="5%" />
            <col width="15%" />
            <col width="5%" />
            <col width="15%" />
            <col width="7%" />
            <col width="35%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">상담일자</td>
              <td>
                <div class="flex-container">
                  <input type="date" v-model="startDate" />
                  <span>-</span>
                  <input type="date" v-model="endDate" />
                </div>
              </td>
              <td class="title">신청자명</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn-container">
          <button class="btn btn-primary btn-search btn-middle">검색</button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>등록된 상담이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01">
        <colgroup>
          <col width="5%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>구분</th>
            <th>신청자명</th>
            <th>연락처</th>
            <th>내용</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">빠른 대출을 원해요</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
        </tbody>
      </table>

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

<style lang="scss" scoped>
@import '@/assets/scss/views/lmBlog/LM_P03_p001.scss';
</style>
