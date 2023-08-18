<script>
// Agent_P10_p005
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
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import UiScroller from '@/components/ui/common/UiScroller.vue';

import IconDownload from '@/assets/images/icon/download.svg?component';

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
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    UiScroller,

    IconDownload,
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
      store.ui.header.setActive(() => 'agent004');
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
      <PageTitle>사전동의내역</PageTitle>
    </PageHead>

    <!-- 조회 조건 -->
    <SearchForm>
      <h3 class="for-a11y">조회 조건</h3>

      <SearchFormList>
        <SearchFormItem>
          <template v-slot:key>동의일자</template>
          <div class="flex-box">
            <div class="flex-box__cell">
              <SimpleDatepicker
                title="동의일자 시작 날짜"
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
                title="동의일자 종료 날짜"
                :classNames="{ wrap: 'input-width-regular' }"
                :min="state.searchMinDate"
                v-model="state.searchMaxDate"
              />
            </div>
          </div>
        </SearchFormItem>

        <SearchFormItem>
          <template v-slot:key>동의여부</template>
          <div class="flex-box">
            <div class="flex-box__cell flex-box__cell--medium">
              <RadioButton
                name="Agent_P10_p005_agree"
                id="Agent_P10_p005_agree_001"
                theme="tertiary"
                :defaultChecked="true"
              >
                <RadioButtonObject />
                <RadioButtonLabelText>Y</RadioButtonLabelText>
              </RadioButton>
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <RadioButton
                name="Agent_P10_p005_agree"
                id="Agent_P10_p005_agree_002"
                theme="tertiary"
              >
                <RadioButtonObject />
                <RadioButtonLabelText>N</RadioButtonLabelText>
              </RadioButton>
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
                  {
                    value: '2',
                    label: '생년월일',
                  },
                ]"
                title="검색범위"
                defaultValue="1"
                :classNames="{ wrap: 'input-width-regular' }"
              />
            </div>
            <div class="flex-box__cell">
              <SimpleInput
                title="검색어"
                :classNames="{ wrap: 'input-width-large' }"
              />
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
            <BasicButton size="regular" theme="tertiary">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </SearchForm>
    <!-- // 조회 조건 -->

    <!-- 집계 -->
    <div :class="$style['basic-table']">
      <table>
        <colgroup>
          <col style="width: 120px" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>동의</th>
            <th>미동의</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>건수</th>
            <td>368</td>
            <td>368</td>
            <td>368</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- // 집계 -->

    <div class="row-margin-block-small row-margin-bottom-none">
      <ButtonList align="right" :classNames="{ wrap: 'row-margin-contents' }">
        <ButtonListItem>
          <BasicButton size="small" :line="true">
            <template v-slot:leftIcon>
              <IconDownload />
            </template>
            엑셀변환
          </BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 조회 결과 없을 경우 -->
      <div :class="[$style['empty'], $style['empty--secondary']]">
        <p :class="$style['empty__text']">조회내역이 없습니다.</p>
      </div>
      <!-- // Case : 조회 결과 없을 경우 -->

      <!-- Case : 결과 있을 경우 -->
      <UiScroller>
        <div :class="$style['scroll-table-wrap']">
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 80px" />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>순번</th>
                  <th>동의일자</th>
                  <th>동의여부</th>
                  <th>고객명</th>
                  <th>생년월일</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 10" :key="i">
                  <td>{{ i }}</td>
                  <td>2023.01.01</td>
                  <td>N</td>
                  <td>한송이</td>
                  <td>2011.01.01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiScroller>
      <!-- // Case : 결과 있을 경우 -->
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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P10_p005.scss';
</style>
