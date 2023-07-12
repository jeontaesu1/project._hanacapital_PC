<script>
// Agent_P02_p003
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
      <PageTitle>상담등록내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">상담일자</div>
            <div class="search--container__list-contents w25p">
              <input type="date" v-model="startDate" />
              <span>~</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w30p">
              <div class="select-container w50p">
                <select>
                  <option>고객명</option>
                </select>
              </div>
              <input type="text" />
            </div>
            <div class="search--container__list-title">판매점</div>
            <div class="search--container__list-contents w15p">
              <input type="text" />
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">사업자번호</div>
            <div class="search--container__list-contents w18p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">상담결과</div>
            <div class="search--container__list-contents">
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" checked />
                  <span class="small"></span>
                  전체
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  접수
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  심사중
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  승인
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <div class="search-count">
        <span>
          합계 : <span class="cGreen">85</span>건 /
          <span class="cGreen">2,700,462,280</span>원
        </span>

        <div class="btn-container">
          <button class="btn btn-s02">
            <i class="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="7%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="6%" />
          <col width="7%" />
          <col width="6%" />
          <col width="5%" />
          <col width="10%" />
          <col width="10%" />
          <col width="8%" />
        </colgroup>
        <thead>
          <tr>
            <th>상담일</th>
            <th>구분</th>
            <th>상담채널</th>
            <th>고객명</th>
            <th>주민/사업자번호</th>
            <th>판정결과</th>
            <th>신청금액</th>
            <th>상담결과</th>
            <th>AG손배</th>
            <th>품목</th>
            <th>판매점</th>
            <th>온라인약정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-success">정상</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-success">정상</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-bad">거절</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-warning">유의</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">심사중</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
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
@import '@/assets/scss/views/agent/Agent_P02_p003.scss';
</style>
