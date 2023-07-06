<script>
// Agent_P10_p004
import { onMounted, onUnmounted, ref } from 'vue';

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
      store.ui.header.setActive(() => 'agent004');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const startDate = '2022-01-01';
    const endDate = '2022-01-01';
    const isType = ref('1');

    return {
      startDate,
      endDate,
      isType,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>한도현황</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">수신일자</div>
            <div class="search--container__list-contents w25p">
              <input type="date" v-model="startDate" />
              <span>-</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w45p">
              <div class="select-container w35p">
                <select v-model="isType">
                  <option value="1">고객명</option>
                  <option value="2">채널명</option>
                </select>
              </div>
              <input
                type="text"
                :class="{ on: isType === '1', off: isType !== '1' }"
              />
              <div
                class="select-container"
                :class="{ on: isType === '2', off: isType !== '2' }"
              >
                <select>
                  <option>선택</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="30%" />
          <col width="30%" />
          <col width="30%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>한도금액</th>
            <th>한도잔액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">금액</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
          </tr>
        </tbody>
      </table>

      <div class="search-count">
        <span></span>
        <div class="btn-container">
          <button class="btn btn-s02">
            <i class="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-04">
        <colgroup>
          <col width="4%" />
          <col width="8%" />
          <col width="12%" />
          <col width="12%" />
          <col width="12%" />
          <col width="12%" />
          <col width="12%" />
          <col width="12%" />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>고객명</th>
            <th>한도금액</th>
            <th>한도잔액</th>
            <th>한도발생일자</th>
            <th>한도만기일자</th>
            <th>사업자번호</th>
            <th>가상계좌번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">471860200</td>
            <td class="txt-center">하나 1234567890</td>
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
@import '@/assets/scss/views/agent/Agent_P10_p004.scss';
</style>
