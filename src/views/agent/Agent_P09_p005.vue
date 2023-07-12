<script>
// Agent_P09_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
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
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>채권상태확인</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w75p">
              <div class="select-container w30p">
                <select>
                  <option value="1">제휴사주문번호</option>
                </select>
              </div>
              <input type="text" />
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="23%" />
          <col width="10%" />
          <col width="23%" />
          <col width="10%" />
          <col width="23%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">채권번호</td>
            <td>D1234567890</td>
            <td class="title">할인율</td>
            <td>1.23</td>
            <td class="title">실행일자</td>
            <td>2023.01.01</td>
          </tr>
          <tr>
            <td class="title">매입취소금액</td>
            <td>1,234,567</td>
            <td class="title">제휴사주문번호</td>
            <td>12345@678901</td>
            <td class="title">할인금액</td>
            <td>1,234,567</td>
          </tr>
          <tr>
            <td class="title">결제일자</td>
            <td>01</td>
            <td class="title">중도반환금액</td>
            <td>1,234,567</td>
            <td class="title">채권상태</td>
            <td>채권상태</td>
          </tr>
          <tr>
            <td class="title">매회납부금액</td>
            <td>123,456</td>
            <td class="title">초회납부일자</td>
            <td>2023.01.01</td>
            <td class="title">중도상환금액</td>
            <td>1,234,567</td>
          </tr>
          <tr>
            <td class="title">신청금액</td>
            <td>1,234,567</td>
            <td class="title">연체회차</td>
            <td>01</td>
            <td class="title">원금잔액</td>
            <td>1,234,567</td>
          </tr>
          <tr>
            <td class="title">가상계좌번호</td>
            <td>01234567890123</td>
            <td class="title">잔여/신청개월수</td>
            <td>01/12</td>
            <td class="title">연체금액</td>
            <td>1,234,567</td>
          </tr>
          <tr>
            <td class="title">대금지급일</td>
            <td>2023.01.01</td>
            <td class="title">선수금액</td>
            <td colspan="3">1,234,567</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P09_p005.scss';
</style>
