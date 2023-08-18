<script>
// Agent_P02_p001
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
      <PageTitle>사전동의리스트</PageTitle>
    </PageHead>

    <div class="container">
      <SearchForm>
        <h3 class="for-a11y">상담일자</h3>

        <SearchFormList>
          <SearchFormItem>
            <template v-slot:key>신청일자</template>
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
            <template v-slot:key>동의방법</template>
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
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>제휴점</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-wide' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>휴대폰번호</template>
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
                  name="P02_p001_01"
                  id="P02_p001_01"
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
                  name="P02_p001_01"
                  id="P02_p001_02"
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
                        >동의</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
              <div class="flex-box__cell">
                <RadioButton
                  name="P02_p001_01"
                  id="P02_p001_03"
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
                        >미동의</span
                        >
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>고객명</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key>생년월일</template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-regular' }" />
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
            >검색</BasicButton
            >
          </ButtonList>
        </template>
      </SearchForm>

      <div class="explan">
        <i class="ico ico-explan"></i>
        모바일 웹 ARS : 1800-9559, ARS : 1800-9550
      </div>

      <div class="flex-container jcfe title">
        <div class="btn-container">
          <button class="btn btn-s03">사전동의SMS URL발송</button>
          <button class="btn btn-s03">할부신청SMS URL발송</button>
        </div>
      </div>
      <div class="scroll-container over-h">
        <table class="table-type-01">
          <colgroup>
            <col width="7%" />
            <col width="25%" />
            <col width="7%" />
            <col width="10%" />
            <col width="7%" />
            <col width="8%" />
            <col width="8%" />
          </colgroup>
          <thead>
            <tr>
              <th>동의요청일자</th>
              <th>제휴점</th>
              <th>고객명</th>
              <th>고객생년월일</th>
              <th>동의방법</th>
              <th>휴대폰번호</th>
              <th>동의일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">다우씨엔디㈜</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">SMS</td>
              <td class="txt-center">010-1234-5678</td>
              <td class="txt-center">2023.01.01</td>
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
@import '@/assets/scss/views/agent/Agent_P02_p001.scss';
</style>
