<script>
// LM_P05_p001
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
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

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
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      searchMinDate: '2023.04.21',
      searchMaxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'lmBlog005');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
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
      <PageTitle>현황조회</PageTitle>
    </PageHead>

    <!-- Category -->
    <div :class="$style['status-inquiry']">
      <ul :class="$style['status-inquiry__list']">
        <li :class="$style['status-inquiry__item']">
          <button
            type="button"
            :class="[
              $style['status-inquiry__category'],
              $style['status-inquiry__category--active'],
            ]"
          >
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">전체</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">신용동의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">상담</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">품의(계약)</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">심사</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">정산</span>
          </button>
        </li>
      </ul>
    </div>
    <!-- // Category -->

    <!-- 조회 조건 -->
    <SearchForm>
      <h3 class="for-a11y">조회 조건</h3>

      <SearchFormList>
        <SearchFormItem>
          <template v-slot:key>조회기간</template>
          <div class="flex-box">
            <div class="flex-box__cell">
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '직접입력',
                  },
                  {
                    value: '2',
                    label: '1주',
                  },
                  {
                    value: '3',
                    label: '2주',
                  },
                ]"
                title="조회기간"
                defaultValue="1"
                :classNames="{ wrap: 'input-width-small' }"
              />
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
          <template v-slot:key>이름</template>
          <SimpleInput
            title="이름"
            :classNames="{ wrap: 'input-width-large' }"
          />
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
            <BasicButton size="regular" theme="tertiary">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </SearchForm>
    <!-- // 조회 조건 -->

    <!-- Case : 조회 결과 없을 경우 -->
    <div :class="[$style['empty'], $style['empty--secondary']]">
      <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 조회 결과 없을 경우 -->

    <!-- Case : 결과 있을 경우 -->
    <div :class="$style['basic-table']">
      <table>
        <colgroup>
          <col style="width: 113px" />
          <col style="width: 114px" />
          <col style="width: 122px" />
          <col />
          <col style="width: 114px" />
          <col style="width: 237px" />
          <col style="width: 237px" />
          <col style="width: 95px" />
          <col style="width: 95px" />
          <col style="width: 108px" />
        </colgroup>
        <thead>
          <tr>
            <th>성명</th>
            <th>등록일</th>
            <th>금액</th>
            <th>상품명</th>
            <th>신용동의</th>
            <th>상담</th>
            <th>품의(계약)</th>
            <th>심사</th>
            <th>정산결과</th>
            <th>서류등록</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-red">부결</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>반송</td>
            <td>미완료</td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>가승인</td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>미완료</td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr>
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>반송</td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
          <tr v-for="i in 4" :key="i">
            <td>김하나</td>
            <td>2023.01.01</td>
            <td>999,999,999</td>
            <td>행복아파트론</td>
            <td>2023.01.01</td>
            <td>C42302010014400</td>
            <td>D42302010014400</td>
            <td>
              <span class="color-green">승인</span>
            </td>
            <td>
              <span class="color-green">완료</span>
            </td>
            <td>
              <BasicButton size="small" theme="quaternary" :line="true">
                서류등록
              </BasicButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- // Case : 결과 있을 경우 -->

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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_P05_p001.scss';
</style>
