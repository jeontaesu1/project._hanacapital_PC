<script>
// Agent_P03_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import SimpleSelect from "@/components/ui/form/SimpleSelect.vue";

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    SimpleSelect,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'agent002');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    function select(e) {
      if (
        e.target.parentNode.parentNode.parentNode.parentNode.classList.contains(
          'on'
        ) === false
      ) {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.add(
          'on'
        );
      } else {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
          'on'
        );
      }
    }

    return {
      select,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>상담등록</PageTitle>
    </PageHead>

    <div class="container">
      <div class="title">
        승계 전 고객상담정보

        <div class="btn-container">
          <button class="btn btn-s03">상담등록내역</button>
          <button class="btn btn-s02">승계전이용자조회</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">성명(상호)</td>
            <td>홍길동</td>
            <td class="title">품목</td>
            <td>이온수기 온누리헬스케어</td>
            <td class="title">판매점명</td>
            <td>㈜온누리헬스케어</td>
          </tr>
          <tr>
            <td class="title">형태구분</td>
            <td>개인</td>
            <td class="title">실행금액</td>
            <td>1,200,000원</td>
            <td class="title">월할부금</td>
            <td>60,000원</td>
          </tr>
          <tr>
            <td class="title">주민/사업자번호</td>
            <td>123456-1******</td>
            <td class="title">원금잔액</td>
            <td>780,000원</td>
            <td class="title">결제일자</td>
            <td>01</td>
          </tr>
          <tr>
            <td class="title">실행일자</td>
            <td>2023.01.01</td>
            <td class="title">잔여/총회차</td>
            <td>13/20</td>
            <td class="title">이자형태/적용금리</td>
            <td>무지아/0</td>
          </tr>
          <tr>
            <td class="title">승계수수료/인지대</td>
            <td>0/0</td>
            <td class="title">AG손배조건부</td>
            <td colSpan="3">N</td>
          </tr>
        </tbody>
      </table>

      <div class="title">승계 후 고객상담정보</div>

      <table class="table-type-01">
        <colgroup>
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title required">성명(상호)</td>
            <td>
              <input type="text" value="김아무" />
            </td>
            <td class="title required">주민등록번호</td>
            <td>
              <div class="flex-container">
                <input type="text" value="123456-1******" />
                <button class="btn btn-s03">확인</button>
              </div>
            </td>
            <td class="title required">품목</td>
            <td>
              <input type="text" value="이온수기 온누리헬스케어" disabled />
            </td>
          </tr>
          <tr>
            <td class="title">대표자명</td>
            <td>
              <input type="text" value="이온수기 온누리헬스케어" disabled />
            </td>
            <td class="title">사업자번호</td>
            <td>
              <div class="flex-container">
                <input type="text" value="" disabled />
                <button class="btn btn-s04">확인</button>
              </div>
            </td>
            <td class="title">물품단가/수령</td>
            <td>
              <div class="flex-container">
                <input type="text" class="rt" value="840,000" disabled />원
                <input type="text" class="rt" value="1" disabled />개
              </div>
            </td>
          </tr>
          <tr>
            <td class="title required">형태구분</td>
            <td>
              <div class="flex-container jcfs">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" checked />
                    <span class="small"></span>
                    개인
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span class="small"></span>
                    사업자
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span class="small"></span>
                    법인
                  </label>
                </div>
              </div>
            </td>
            <td class="title required">신용정보조회동의</td>
            <td>
              <div class="flex-container">
                <input type="text" value="온라인(SMS)" disabled />
                <button class="btn btn-s03">선택</button>
              </div>
            </td>
            <td class="title">물품구입금액</td>
            <td>
              <div class="flex-container">
                <input type="text" class="rt" value="840,000" disabled />원
              </div>
            </td>
          </tr>
          <tr>
            <td class="title required">거래구분/관계</td>
            <td>
              <div class="flex-container">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '이용자',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-regular' }"
                />
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '본인',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-regular' }"
                  :disabled="true"
                />
              </div>
            </td>
            <td class="title">할부신청금액</td>
            <td>
              <div class="flex-container">
                <input type="text" class="rt" value="840,000" disabled />원
              </div>
            </td>
            <td class="title">할부기간</td>
            <td>
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '7개월',
                  },
                ]"
                title="조회기간"
                defaultValue="1"
              />
            </td>
          </tr>
          <tr>
            <td class="title">AG손배조건부취급</td>
            <td colSpan="5">
              <div class="flex-container jcfs">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span class="small"></span>
                    Y
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" />
                    <span class="small"></span>
                    N
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="title">
        승인결과 내역

        <div class="btn-container">
          <button class="btn btn-s03">상담등록</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="15%" />
          <col width="85%" />
        </colgroup>
        <thead>
          <tr>
            <th>심사유형</th>
            <th>진행절차</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">시스템거절</td>
            <td>시스템거절 건으로 취급이 불가합니다.</td>
          </tr>
        </tbody>
      </table>

      <div class="title">
        이용자 · 연대보증인 내역

        <div class="btn-container">
          <button class="btn btn-s05">삭제</button>
          <button class="btn btn-s02">
            <i class="ico ico-plus"></i>고객추가등록
          </button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="5%" />
          <col width="15%" />
          <col width="15%" />
          <col />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th>선택</th>
            <th>거래구분</th>
            <th>관계</th>
            <th>고객명</th>
            <th>주민/사업자번호</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hoverBgGray">
            <td class="txt-center">
              <div class="check-container">
                <label class="flex-container">
                  <input type="checkbox" name="ok" />
                  <span @click="select($event)"></span>
                </label>
              </div>
            </td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">본인</td>
            <td class="txt-center">㈜고은푸드</td>
            <td class="txt-center">123-45-7****</td>
          </tr>
          <tr class="hoverBgGray">
            <td class="txt-center">
              <div class="check-container">
                <label class="flex-container">
                  <input type="checkbox" name="ok" />
                  <span></span>
                </label>
              </div>
            </td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">본인</td>
            <td class="txt-center">㈜고은푸드</td>
            <td class="txt-center">123-45-7****</td>
          </tr>
        </tbody>
      </table>

      <div class="title">
        상담 · 심사의견 내역

        <div class="btn-container">
          <button class="btn btn-s05">부결</button>
          <button class="btn btn-s02">심사승인</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="10%" />
          <col width="15%" />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>처리구분</th>
            <th>처리결과</th>
            <th>처리일자</th>
            <th>상담/심사의견</th>
            <th>조건부승인내역</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">상담의견</td>
            <td class="txt-center">심사요청</td>
            <td class="txt-center">2022.10.26 14:15:15</td>
            <td>
              <input type="text" value="승인" />
            </td>
            <td class="h-72" rowSpan="2">
              <div class="scroll-container">
                조건부 승인 내역이 해당 영역에 노출될 예정입니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">상담의견</td>
            <td class="txt-center">심사요청</td>
            <td class="txt-center">2022.10.26 14:15:15</td>
            <td class="bdr">일반심사건입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P03_p001.scss';
</style>
