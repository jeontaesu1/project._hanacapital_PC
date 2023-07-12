<script>
// Agent_P02_p001
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
      <PageTitle>사전동의리스트</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">조회조건</div>
            <div class="search--container__list-contents w25p">
              <input type="date" v-model="startDate" />
              <span>-</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">동의방법</div>
            <div class="search--container__list-contents w10p">
              <div class="select-container">
                <select>
                  <option>선택</option>
                </select>
              </div>
            </div>
            <div class="search--container__list-title">제휴점</div>
            <div class="search--container__list-contents w30p">
              <input type="text" />
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">휴대폰번호</div>
            <div class="search--container__list-contents w18p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">상태</div>
            <div class="search--container__list-contents">
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="type" checked />
                  <span class="small"></span>
                  전체
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="type" />
                  <span class="small"></span>
                  동의
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="type" />
                  <span class="small"></span>
                  미동의
                </label>
              </div>
            </div>
            <div class="search--container__list-title">고객명</div>
            <div class="search--container__list-contents w18p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">생년월일</div>
            <div class="search--container__list-contents w10p">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="explan">
          <i class="ico ico-explan"></i>
          모바일 웹 ARS : 1800-9559, ARS : 1800-9550
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">검색</button>
        </div>
      </div>

      <div class="flex-container jcfe title">
        <div class="btn-container">
          <button class="btn btn-s03">사전동의SMS URL발송</button>
          <button class="btn btn-s03">할부신청SMS URL발송</button>
        </div>
      </div>
      <div class="scroll-container over-h">
        <table class="table-type-01">
          <colgroup>
            <col width="7%" />
            <col width="25%" />
            <col width="7%" />
            <col width="10%" />
            <col width="7%" />
            <col width="8%" />
            <col width="8%" />
          </colgroup>
          <thead>
            <tr>
              <th>동의요청일자</th>
              <th>제휴점</th>
              <th>고객명</th>
              <th>고객생년월일</th>
              <th>동의방법</th>
              <th>휴대폰번호</th>
              <th>동의일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
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
@import '@/assets/scss/views/agent/Agent_P02_p001.scss';
</style>
