<script>
// Agent_P02_p008
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
      store.ui.header.setActive(() => 'agent001');
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
      <PageTitle>판매/품목내역</PageTitle>
    </PageHead>

    <div className="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">사업자번호</div>
            <div class="search--container__list-contents w15p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">품목</div>
            <div class="search--container__list-contents w45p">
              <input type="text" />
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-s03 btn-search-02">
            신규판매점 신용정보 SMS발송
          </button>
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table className="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <div className="scroll-container over-h">
        <table className="table-type-04 bt">
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>판매점명</th>
              <th>물품분류명</th>
              <th>물품명</th>
              <th>판매점코드</th>
              <th>적용금리</th>
              <th>등록일자</th>
              <th>적용일자</th>
              <th>적용종료일자</th>
              <th>이자부과여부</th>
              <th>담당자명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="txt-center">제우스이엔지</td>
              <td className="txt-center">보일러/태양광</td>
              <td className="txt-center">태양광(가정용-장기)</td>
              <td className="txt-center">1234512</td>
              <td className="txt-center">99%</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">이자부과</td>
              <td className="txt-center">김하나</td>
            </tr>
          </tbody>
        </table>
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

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_p008.scss';
</style>
