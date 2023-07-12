<script>
// Agent_P09_p001
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
      store.ui.header.setActive(() => 'agent003');
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
      <PageTitle>매입진행내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">매입요청일자</div>
            <div class="search--container__list-contents">
              <input type="date" v-model="startDate" />
              <span>~</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">진행상태</div>
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
                  정상
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  오류
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  보류
                </label>
              </div>
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w35p">
              <div class="select-container">
                <select>
                  <option value="1">제휴사주문번호</option>
                </select>
              </div>
              <input type="text" />
            </div>
            <div class="search--container__list-title">고객구분</div>
            <div class="search--container__list-contents">
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" checked />
                  <span class="small"></span>
                  전체
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" />
                  <span class="small"></span>
                  개인
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" />
                  <span class="small"></span>
                  개인사업자
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" />
                  <span class="small"></span>
                  법인
                </label>
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
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>오류</th>
            <th>보류</th>
            <th>정상</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center"></td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">금액</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center"></td>
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

      <div class="scroll-container over-h">
        <table class="table-type-04">
          <colgroup>
            <col width="80px" />
            <col width="120px" />
            <col width="150px" />
            <col width="80px" />
            <col width="72px" />
            <col width="80px" />
            <col width="200px" />
            <col width="355px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="110px" />
            <col width="100px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>매입요청일자</th>
              <th>제휴사주문번호</th>
              <th>상담번호</th>
              <th>고객명</th>
              <th>진행상태</th>
              <th>오류사유</th>
              <th>메모</th>
              <th>고객구분</th>
              <th>심사요청일자</th>
              <th>신청금액</th>
              <th>신청개월수</th>
              <th>할인율(%)</th>
              <th>할인금액</th>
              <th>보증금</th>
              <th>정산금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">1</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">1234567891234</td>
              <td class="txt-center">12345</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center cRed">오류</td>
              <td class="txt-center">-</td>
              <td class="txt-center">
                하나캐피탈 직원이 작성한 메모 내용이 표시됩니다.
              </td>
              <td class="txt-center">개인</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">4</td>
              <td class="txt-center">20%</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
            </tr>
            <tr>
              <td class="txt-center">2</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">1234567891234</td>
              <td class="txt-center">12345</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center cGreen">정상</td>
              <td class="txt-center">-</td>
              <td class="txt-center">
                하나캐피탈 직원이 작성한 메모 내용이 표시됩니다.
              </td>
              <td class="txt-center">개인</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">4</td>
              <td class="txt-center">20%</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
            </tr>
            <tr>
              <td class="txt-center">3</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">1234567891234</td>
              <td class="txt-center">12345</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">보류</td>
              <td class="txt-center">-</td>
              <td class="txt-center">
                하나캐피탈 직원이 작성한 메모 내용이 표시됩니다.
              </td>
              <td class="txt-center">개인</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">4</td>
              <td class="txt-center">20%</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
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
@import '@/assets/scss/views/agent/Agent_P09_p001.scss';
</style>
