<script>
// Agent_P02_p003
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
      <PageTitle>상담등록내역</PageTitle>
    </PageHead>

    <div class="container">
      <SearchForm>
        <h3 class="for-a11y">상담일자</h3>

        <SearchFormList>
          <SearchFormItem>
            <template v-slot:key>상담일자</template>
            <div class="flex-box">
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
            <template v-slot:key>검색조건</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '고객명',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-regular' }"
                />
              </div>
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
            <template v-slot:key>사업자번호</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>상담결과</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RadioButton
                  name="P02_p003_01"
                  id="P02_p003_01"
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
                  name="P02_p003_01"
                  id="P02_p003_02"
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
                          >접수</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P02_p003_01"
                  id="P02_p003_03"
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
                          >심사중</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P02_p003_01"
                  id="P02_p003_04"
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
            <ButtonListItem>
              <BasicButton
                :classNames="{ wrap: 'btn btn-primary btn-search-02' }"
                >검색</BasicButton
              >
            </ButtonListItem>
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

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="7%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
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
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s01">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s01">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s01">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">심사중</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s01">SMS발송</button>
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
