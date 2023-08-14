<script>
// Agent_P02_p002
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
      store.ui.header.setActive(() => 'agent001');
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
      <table class="table-type-01 mb60">
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
            <td class="title">제휴점</td>
            <td>신한프라자</td>
            <td class="title">판매점</td>
            <td>
              <div class="flex-container">
                <input type="text" disabled />
                <button class="btn btn-primary">검색</button>
              </div>
            </td>
            <td class="title">상담일자</td>
            <td>2023.01.01</td>
          </tr>
        </tbody>
      </table>
      <div class="title">
        고객상담정보

        <div class="btn-container">
          <button class="btn btn-s03">사전동의SMS URL발송</button>
          <button class="btn btn-s03">상담등록내역</button>
          <button class="btn btn-s03">상환스케쥴시뮬레이션</button>
          <button class="btn btn-s02">
            <i class="ico ico-plus"></i>
            이미지등록
          </button>
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
            <td class="title required">성명(상호)</td>
            <td><input type="text" /></td>
            <td class="title">주민등록번호</td>
            <td>
              <div class="flex-container">
                <input type="text" />
                <button class="btn btn-s03">확인</button>
              </div>
            </td>
            <td class="title required">품목</td>
            <td>
              <div class="flex-container">
                <input type="text" disabled />
                <button class="btn btn-primary">검색</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="title">대표자명</td>
            <td><input type="text" /></td>
            <td class="title">사업자번호</td>
            <td>
              <div class="flex-container">
                <input type="text" disabled />
                <button class="btn btn-s04">확인</button>
              </div>
            </td>
            <td class="title">물품단가/수령</td>
            <td>
              <div class="flex-container">
                <input type="text" class="rt" value="840,000" />원
                <input type="text" class="rt" value="1" />개
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
            <td class="title">소득구분</td>
            <td>
              <div class="select-container">
                <select>
                  <option>선택</option>
                </select>
              </div>
            </td>
            <td class="title">물품구입금액</td>
            <td>
              <div class="flex-container">
                <input type="text" class="rt" disabled value="400,000" />원
              </div>
            </td>
          </tr>
          <tr>
            <td class="title required">거래구분/관계</td>
            <td>
              <div class="flex-container">
                <div class="select-container">
                  <select>
                    <option>이용자</option>
                  </select>
                </div>
                <div class="select-container">
                  <select disabled>
                    <option>본인</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="title required">신용정보조회동의</td>
            <td>
              <div class="flex-container">
                <input type="text" disabled />
                <button class="btn btn-s03">선택</button>
              </div>
            </td>
            <td class="title">상품코드</td>
            <td>
              <div class="select-container">
                <select>
                  <option>이용자</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="title">할부신청금액</td>
            <td>
              <div class="flex-container jcfs">
                <input type="text" class="rt" value="400,000" />원
              </div>
            </td>
            <td class="title">할부기간</td>
            <td>
              <div class="select-container">
                <select>
                  <option>선택</option>
                </select>
              </div>
            </td>
            <td class="title required">AG손배조건부취급</td>
            <td>
              <div class="flex-container jcfs">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="agYn" checked />
                    <span class="small"></span>
                    Y
                  </label>
                </div>
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="agYn" />
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
          <button class="btn btn-s02">
            <i class="ico ico-plus"></i>상담등록
          </button>
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
            <td class="txt-center">일반심사</td>
            <td class="txt-center">승인 [할부진행가능]</td>
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

      <div class="title">AG손배조건부</div>

      <table class="table-type-01 mb60">
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
            <td class="title">AG손배조건부한도액</td>
            <td class="txt-right">9,999,999원</td>
            <td class="title">이용한도(본건포함)</td>
            <td class="txt-right">9,999,999원</td>
            <td class="title">잔여한도</td>
            <td class="txt-right">9,999,999원</td>
          </tr>
        </tbody>
      </table>

      <div class="title">
        상담 · 심사의견 내역

        <div class="btn-container">
          <button class="btn btn-s05">부결</button>
          <button class="btn btn-s01">심사승인</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="10%" />
          <col width="7%" />
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
            <td class="h-150">
              <div class="scroll-container">
                조건부 승인 내역이 해당 영역에 노출될 예정입니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.
              </div>
            </td>
            <td rowSpan="2">
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
            <td class="h-150 bdr">
              <div class="scroll-container">
                조건부 승인 내역이 해당 영역에 노출될 예정입니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_p002.scss';
</style>
