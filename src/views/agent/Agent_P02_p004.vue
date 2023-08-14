<script>
// Agent_P02_p004
import { onMounted, onUnmounted, ref } from 'vue';

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

    const isTab = ref(1);

    return {
      isTab,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>계약등록</PageTitle>
    </PageHead>

    <div class="container">
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
            <td class="title">계약등록일자</td>
            <td>2022.01.01</td>
            <td class="title">계약번호</td>
            <td>D1111-12345-1234</td>
            <td class="title">진행상태</td>
            <td>작성중</td>
          </tr>
          <tr>
            <td class="warning nbrl" colspan="6">
              <div class="flex-container jcfs fs14">
                <i class="ico ico-warning"></i> 표기된 정보는 KCB 상세내역으로,
                확인 후 저장해 주시기 바랍니다.
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex-container jcfe tab">
        <div class="flex-container jcfs w50p">
          <div :class="{ on: isTab === 1 }" @click="isTab = 1">이용자</div>
          <div class="bar"></div>
          <div :class="{ on: isTab === 2 }" @click="isTab = 2">연대보증인</div>
        </div>

        <div class="flex-container jcfe">
          <div class="btn-container">
            <button class="btn btn-s03">물품수령확인SMS발송</button>
            <button class="btn btn-s03">스케쥴조회</button>
            <button class="btn btn-s02">
              <i class="ico ico-plus"></i> 이미지등록
            </button>
            <button class="btn btn-s02">
              <i class="ico ico-plus"></i> 고객등록
            </button>
          </div>
        </div>
      </div>

      <div class="container" v-if="isTab === 1">
        <table class="table-type-01">
          <colgroup>
            <col width="11%" />
            <col width="22%" />
            <col width="11%" />
            <col width="22%" />
            <col width="5.5%" />
            <col width="5.5%" />
            <col width="22%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title required">성명(상호)</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td class="title">주민등록번호</td>
              <td>123456-1******</td>
              <td class="title" rowspan="2">대표</td>
              <td class="title">성명</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td class="title required">형태구분</td>
              <td>개인</td>
              <td class="title">사업자번호</td>
              <td>123-12-12345</td>
              <td class="title">주민<br />번호</td>
              <td>123456-1******</td>
            </tr>
            <tr>
              <td class="title">공동대표</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="type" checked />
                      <span class="small"></span>
                      Y
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="type" />
                      <span class="small"></span>
                      N
                    </label>
                  </div>
                  <div class="select-container">
                    <select disabled>
                      <option>각자</option>
                    </select>
                  </div>
                </div>
              </td>
              <td class="title">법인등록번호</td>
              <td>1234567891234</td>
              <td class="title" colspan="2">외국인여부/국적</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="select-container">
                    <select>
                      <option>내국인</option>
                    </select>
                  </div>
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">등본지</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w70p" disabled />
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">실거주지</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w60p" disabled />
                  <div class="check-container w10p">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="ok" />
                      <span></span>
                      상동
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">직장/작업장</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w60p" disabled />
                  <div class="check-container w10p">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="ok" />
                      <span></span>
                      상동
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">휴대전화</td>
              <td colspan="7">
                <div class="flex-container jcfs">
                  <div class="check-container">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="me" />
                      <span></span>
                      본인명의
                    </label>
                  </div>
                  <div class="flex-container jcfs w25p">
                    <input type="tel" />
                    <span>-</span>
                    <input type="tel" />
                    <span>-</span>
                    <input type="tel" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">자택전화</td>
              <td colspan="5">
                <div class="flex-container jcfs w35p">
                  <input type="tel" />
                  <span>-</span>
                  <input type="tel" />
                  <span>-</span>
                  <input type="tel" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">이메일</td>
              <td colspan="6">
                <div class="flex-container jcfs">
                  <input type="text" class="w15p" /> @
                  <div class="select-container w15p">
                    <select>
                      <option>직접입력</option>
                    </select>
                  </div>
                  <input type="text" class="w15p" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table-type-01">
          <colgroup>
            <col width="8%" />
            <col width="10%" />
            <col width="11%" />
            <col width="13%" />
            <col width="10%" />
            <col width="9%" />
            <col width="16%" />
            <col width="10%" />
            <col width="7.2%" />
          </colgroup>
          <thead>
            <tr>
              <th>거래계좌정보</th>
              <th>예금주관계</th>
              <th>동의방법</th>
              <th>개설은행</th>
              <th>계좌번호</th>
              <th>예금주명</th>
              <th>구분</th>
              <th>생년월일/사업번호</th>
              <th>실명확인</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="btn btn-s05">
                  <i class="ico ico-reset"></i>
                  초기화
                </button>
              </td>
              <td>
                <div class="select-container">
                  <select>
                    <option>본인</option>
                  </select>
                </div>
              </td>
              <td>
                <div class="select-container">
                  <select>
                    <option>휴대폰인증</option>
                  </select>
                </div>
              </td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a6" checked />
                      <span class="small"></span>
                      사업자번호
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a6" />
                      <span class="small"></span>
                      생년월일
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <div class="flex-container">
                  <button class="btn btn-s03">본인확인</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="bg-gary" colspan="9">
                <div class="flex-container jcfe">
                  <button class="btn btn-s01">고객등록</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">물건정보</div>

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
              <td class="title">품목구분</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td class="title">제조사</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td class="title">물건가격</td>
              <td>
                <div class="flex-container">
                  <input type="text" class="rt" />
                  원
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">계약금</td>
              <td>0원</td>
              <td class="title">세부품목</td>
              <td>이온수기 온누리헬스케어</td>
              <td class="title">납부방법</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a4" checked />
                      <span class="small"></span>
                      신품
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a4" />
                      <span></span>
                      중고
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">수량</td>
              <td>1개</td>
              <td class="title">약정서류 발급방법</td>
              <td colspan="3">
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a5" checked />
                      <span class="small"></span>
                      내구재 온라인 약정서
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a5" />
                      <span class="small"></span>
                      내구재 오프라인 약정서
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">모델명</td>
              <td>이온수기 온누리헬스케어</td>
              <td class="title">판매점</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td class="title">총구입금액</td>
              <td>840,000원</td>
            </tr>
            <tr>
              <td class="title">수령/설치일자</td>
              <td colspan="5">
                <input type="date" class="w15p" />
              </td>
            </tr>
            <tr>
              <td class="title">수령/설치 주소</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w45p" disabled />
                  <input type="text" class="w45p" disabled />
                  <div class="select-container w20p">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">금융정보</div>

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
              <td class="title">상품코드/종류</td>
              <td>
                <div class="select-container">
                  <select>
                    <option>선택</option>
                  </select>
                </div>
              </td>
              <td class="title">품목금리</td>
              <td>14.00%</td>
              <td class="title">신품여부</td>
              <td>
                <div class="flex-container">
                  <div class="select-container w45p">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="before" checked />
                      <span class="small"></span>
                      선취
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="before" />
                      <span class="small"></span>
                      후취
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">대출금액</td>
              <td>
                <div class="flex-container">
                  <input type="text" class="rt" />원
                </div>
              </td>
              <td class="title">고객금리</td>
              <td colspan="3">
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="hold" checked />
                      <span class="small"></span>
                      고정
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="hold" />
                      <span class="small"></span>
                      변동
                    </label>
                  </div>
                  <input type="text" class="w15p" disabled />%
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">상환방법</td>
              <td colspan="3">
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="return" checked />
                      <span class="small"></span>
                      원리금균등분할상환
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="return" />
                      <span class="small"></span>
                      원금균등분할상환
                    </label>
                  </div>
                </div>
              </td>
              <td class="title">변동기준/주기</td>
              <td>
                <div class="flex-container">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="date" checked />
                      <span class="small"></span>
                      회차
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="date" />
                      <span class="small"></span>
                      기간
                    </label>
                  </div>
                  <div class="select-container w45p">
                    <select>
                      <option>3개월</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">기준/가산/조정금리</td>
              <td>0.00% / 0.00% / 0.00%</td>
              <td class="title">유예기간/금리</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>6개월</option>
                    </select>
                  </div>
                  <input type="text" disabled /> %
                </div>
              </td>
              <td class="title">선수율 · 금액</td>
              <td>0.00% · 0원</td>
            </tr>
            <tr>
              <td class="title">이자형태/무이자횟수</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>무이자</option>
                    </select>
                  </div>
                  <input type="text" disabled /> 회
                </div>
              </td>
              <td class="title">연체이자율</td>
              <td>9.00%</td>
              <td class="title">대출기간</td>
              <td>
                <div class="select-container">
                  <select>
                    <option>36개월</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">선취수수료</td>
              <td>0.00% · 0원</td>
              <td class="title">중도상환수수료</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>무이자</option>
                    </select>
                  </div>
                  <input type="text" disabled /> %
                </div>
              </td>
              <td class="title">취급수수료</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled /> %
                  <input type="text" class="w50p" disabled /> 원
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">매회납부금/<br />1회차납부금</td>
              <td>60,000원 / 60,000원</td>
              <td class="title">결제일/1회차납부일</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>1일</option>
                    </select>
                  </div>
                  <input type="text" disabled /> %
                </div>
              </td>
              <td class="title">AG손배조건부</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="agyn" checked />
                      <span class="small"></span>
                      Y
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="agyn" />
                      <span class="small"></span>
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">총납부금액/<br />이자금액</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>1일</option>
                    </select>
                  </div>
                  <input type="text" disabled /> %
                </div>
              </td>
              <td class="title">청구방법/청구지</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>미발송</option>
                    </select>
                  </div>
                  <div class="select-container">
                    <select>
                      <option>사업장</option>
                    </select>
                  </div>
                </div>
              </td>
              <td class="title">실행통지서</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" checked />
                      <span class="small"></span>
                      등본지
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" />
                      <span class="small"></span>
                      직장
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" />
                      <span class="small"></span>
                      실거주지
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">인지대</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="select-container">
                    <select disabled>
                      <option>실거주지</option>
                    </select>
                  </div>
                  <input type="text" disabled /> %
                </div>
              </td>
              <td class="title">인지대납부방법</td>
              <td>
                <div class="select-container">
                  <select disabled>
                    <option>대체입금</option>
                  </select>
                </div>
              </td>
              <td class="title">Agent/영업사원</td>
              <td>
                <div class="flex-container">
                  <input type="text" value="신한프라자" disabled />
                  <div class="select-container">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">AG손배조건부</div>

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
              <td class="title">AG손배조건부한도액</td>
              <td>999,999,999원</td>
              <td class="title">이용한도(본건포함)</td>
              <td>999,999,999원</td>
              <td class="title">잔여한도</td>
              <td>999,999,999원</td>
            </tr>
          </tbody>
        </table>

        <div class="title">
          취급의견

          <div class="btn-container">
            <button class="btn btn-s03">온라인약정 SMS발송</button>
            <button class="btn btn-s02">
              <i class="ico ico-plus"></i>
              AG/영업사원등록
            </button>
            <button class="btn btn-s02">
              <i class="ico ico-plus"></i>
              계약등록
            </button>
          </div>
        </div>

        <table class="table-type-01">
          <colgroup>
            <col width="11%" />
            <col width="89%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">내용</td>
              <td>
                <textarea class="textarea"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container" v-if="isTab === 2">
        <table class="table-type-01">
          <colgroup>
            <col width="11%" />
            <col width="22%" />
            <col width="11%" />
            <col width="22%" />
            <col width="5.5%" />
            <col width="5.5%" />
            <col width="22%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title required">성명(상호)</td>
              <td>
                <div class="flex-container">
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
              <td class="title">주민등록번호</td>
              <td>123456-1******</td>
              <td class="title" rowspan="2">대표</td>
              <td class="title">성명</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td class="title required">형태구분</td>
              <td>개인</td>
              <td class="title">사업자번호</td>
              <td>123-12-12345</td>
              <td class="title">주민<br />번호</td>
              <td>123456-1******</td>
            </tr>
            <tr>
              <td class="title">공동대표</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a7" checked />
                      <span class="small"></span>
                      Y
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a7" />
                      <span class="small"></span>
                      N
                    </label>
                  </div>
                  <div class="select-container">
                    <select disabled>
                      <option>각자</option>
                    </select>
                  </div>
                </div>
              </td>
              <td class="title">법인등록번호</td>
              <td>1234567891234</td>
              <td class="title" colspan="2">외국인여부/국적</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="select-container">
                    <select>
                      <option>내국인</option>
                    </select>
                  </div>
                  <input type="text" disabled />
                  <button class="btn btn-primary">검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">설립일자</td>
              <td>2022.11.01</td>
              <td class="title">대표업태</td>
              <td>음식점</td>
              <td class="title">대포업종</td>
              <td>한식</td>
            </tr>
            <tr>
              <td class="title required">등본지</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w70p" disabled />
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">실거주지</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w60p" disabled />
                  <div class="check-container w10p">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="ok" />
                      <span></span>
                      상동
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">직장/작업장</td>
              <td>
                <div class="flex-container jcfs">
                  <input type="text" class="w60p" disabled />
                  <button class="btn btn-primary">우편번호 검색</button>
                </div>
              </td>
              <td colspan="5">
                <div class="flex-container jcfs">
                  <input type="text" class="w30p" disabled />
                  <input type="text" class="w60p" disabled />
                  <div class="check-container w10p">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="ok" />
                      <span></span>
                      상동
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">휴대전화</td>
              <td colspan="7">
                <div class="flex-container jcfs">
                  <div class="check-container">
                    <label class="flex-container jcfs">
                      <input type="checkbox" name="me" />
                      <span></span>
                      본인명의
                    </label>
                  </div>
                  <div class="flex-container jcfs w25p">
                    <input type="tel" />
                    <span>-</span>
                    <input type="tel" />
                    <span>-</span>
                    <input type="tel" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title required">자택전화</td>
              <td colspan="5">
                <div class="flex-container jcfs w35p">
                  <input type="tel" />
                  <span>-</span>
                  <input type="tel" />
                  <span>-</span>
                  <input type="tel" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">이메일</td>
              <td colspan="6">
                <div class="flex-container jcfs">
                  <input type="text" class="w15p" /> @
                  <div class="select-container w15p">
                    <select>
                      <option>직접입력</option>
                    </select>
                  </div>
                  <input type="text" class="w15p" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">연대보증인 내역</div>

        <table class="table-type-01 none-search-small">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <table class="table-type-01">
          <colgroup>
            <col width="5%" />
            <col width="10%" />
            <col width="10%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>등록여부</th>
              <th>형태</th>
              <th>성명/상호</th>
              <th>주민/사업자번호</th>
              <th>관계</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">1</td>
              <td class="txt-center">연대보증인</td>
              <td class="txt-center">개인</td>
              <td class="txt-center">홍길동</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">대표자</td>
            </tr>
            <tr>
              <td class="bg-gary" colspan="6">
                <div class="flex-container jcfe">
                  <button class="btn btn-s01">고객등록</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P02_p004.scss';
</style>
