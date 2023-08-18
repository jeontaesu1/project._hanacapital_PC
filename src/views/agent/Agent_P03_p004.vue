<script>
// Agent_P03_p004
import {onMounted, onUnmounted, reactive} from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import SearchForm from "@/components/ui/form/SearchForm.vue";
import SearchFormList from "@/components/ui/form/SearchFormList.vue";
import SearchFormItem from "@/components/ui/form/SearchFormItem.vue";
import SimpleInput from "@/components/ui/form/SimpleInput.vue";
import SimpleSelect from "@/components/ui/form/SimpleSelect.vue";
import SimpleDatepicker from "@/components/ui/form/SimpleDatepicker.vue";
import RadioButtonLabelText from "@/components/ui/form/RadioButtonLabelText.vue";
import RadioButtonObject from "@/components/ui/form/RadioButtonObject.vue";
import RadioButton from "@/components/ui/form/RadioButton.vue";
import BasicButton from "@/components/ui/button/BasicButton.vue";
import ButtonList from "@/components/ui/button/ButtonList.vue";
import ButtonListItem from "@/components/ui/button/ButtonListItem.vue";

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    SearchForm,
    SearchFormList,
    SearchFormItem,
    SimpleInput,
    SimpleSelect,
    SimpleDatepicker,
    RadioButtonLabelText,
    RadioButtonObject,
    RadioButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
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

    const state = reactive({
      searchMinDate: '2023.04.21',
      searchMaxDate: '2023.04.21',
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <PageHead>
      <PageTitle>계약등록내역</PageTitle>
    </PageHead>

    <div class="container">
      <SearchForm>
        <h3 class="for-a11y">상담일자</h3>

        <SearchFormList>
          <SearchFormItem>
            <template v-slot:key>일자선택</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_01"
                  id="P03_p004_01"
                  theme="tertiary"
                  align="center"
                  default-checked
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >품의일자</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_01"
                  id="P03_p004_02"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >실행일자</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <SimpleDatepicker
                  title="조회기간 시작 날짜"
                  :classNames="{ wrap: 'input-width-regular' }"
                  :max="state.searchMaxDate"
                  v-model="state.searchMinDate"
                />
              </div>
              <div class="flex-box__cell">
                <div class="text-body-3">~</div>
              </div>
              <div class="flex-box__cell">
                <SimpleDatepicker
                  title="조회기간 종료 날짜"
                  :classNames="{ wrap: 'input-width-regular' }"
                  :min="state.searchMinDate"
                  v-model="state.searchMaxDate"
                />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>고객구분</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '선택',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-regular' }"
                />
              </div>
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-wide' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>품목</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>판매점</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>결제상태</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_02"
                  id="P03_p004_11"
                  theme="tertiary"
                  align="center"
                  default-checked
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >전체</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_02"
                  id="P03_p004_12"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >완료</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_02"
                  id="P03_p004_13"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >미완료</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>결제상태</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_03"
                  id="P03_p004_21"
                  theme="tertiary"
                  align="center"
                  default-checked
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >전체</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_03"
                  id="P03_p004_22"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >작성중</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_03"
                  id="P03_p004_23"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >미실행취소</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P03_p004_03"
                  id="P03_p004_24"
                  theme="tertiary"
                  align="center"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span
                        class="flex-box__cell flex-box__cell--regular flex-1"
                      >
                        <span class="text-title-5 font-weight-normal"
                        >승인</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
            </div>
          </SearchFormItem>
        </SearchFormList>

        <template v-slot:bottom>
          <ButtonList
            :wrap="true"
            :col="5"
            align="center"
            :classNames="{ wrap: 'row-margin-none' }"
          >
            <BasicButton
              :classNames="{ wrap: 'btn btn-primary btn-search-02' }"
            >조회</BasicButton
            >
          </ButtonList>
        </template>
      </SearchForm>

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

      <div class="scroll-container over-h">
        <table class="table-type-04 bt">
          <colgroup>
            <col width="114px" />
            <col width="114px" />
            <col width="186px" />
            <col width="80px" />
            <col width="80px" />
            <col width="66px" />
            <col width="66px" />
            <col width="80px" />
            <col width="92px" />
            <col width="80px" />
            <col width="106px" />
            <col width="134px" />
            <col width="122px" />
            <col width="200px" />
            <col width="90px" />
            <col width="76px" />
            <col width="200px" />
            <col width="90px" />
            <col width="80px" />
            <col width="90px" />
            <col width="80px" />
          </colgroup>
          <thead>
            <tr>
              <th>품의일</th>
              <th>실행일자</th>
              <th>품의번호</th>
              <th>진행상태</th>
              <th>해피콜</th>
              <th>콜배정</th>
              <th>이미지등록</th>
              <th>서류수신</th>
              <th>대금지급상태</th>
              <th>약정서류진행상태</th>
              <th>이용자명</th>
              <th>주민/사업자번호</th>
              <th>대출금액</th>
              <th>품목</th>
              <th>할부기간</th>
              <th>심사자</th>
              <th>판매점</th>
              <th>전 이용자</th>
              <th>약정완료</th>
              <th>후 이용자</th>
              <th>약정완료</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">D12345-12345-1234</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">진행중</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">오프라인</td>
              <td class="txt-center">O</td>
              <td class="txt-center">오프라인</td>
              <td class="txt-center">O</td>
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
@import '@/assets/scss/views/agent/Agent_P03_p004.scss';
</style>
