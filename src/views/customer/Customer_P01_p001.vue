<script>
// Customer_P01_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import LineTab from '@/components/ui/tab/LineTab.vue';
import LineTabButton from '@/components/ui/tab/LineTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    SearchButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    FilterTab,
    FilterTabButton,
    LineTab,
    LineTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicHr,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>FAQ</PageTitle>
    </PageHead>

    <div :class="$style['board-search-bar']">
      <InputBlock>
        <InputBlockCell>
          <BasicSelect
            :options="[
              {
                value: '1',
                label: '전체',
              },
              {
                value: '2',
                label: '제목',
              },
              {
                value: '3',
                label: '내용',
              },
            ]"
            title="검색 조건 선택"
            defaultValue="1"
            :classNames="{
              wrap: 'input-width-category',
            }"
          />
        </InputBlockCell>
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="게시물 검색어"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>
    </div>

    <!-- Case : 검색 결과 없을 경우 -->
    <div :class="[$style['empty'], $style['empty--secondary']]">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 경우 -->

    <!-- Case : 결과 있을 경우 -->
    <div class="row-margin-container-medium row-margin-top-none">
      <FilterTab
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FilterTabButton tagName="button" type="button" :active="true">
          전체
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">
          금융상품
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">
          고객서비스
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">
          홈페이지 이용
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">기타</FilterTabButton>
      </FilterTab>

      <!-- Case : 금융상품 탭 선택했을 경우 하위 탭 -->
      <LineTab>
        <LineTabButton tagName="button" type="button" :active="true">
          자동차금융
        </LineTabButton>
        <LineTabButton tagName="button" type="button">개인금융</LineTabButton>
        <LineTabButton tagName="button" type="button">기업금융</LineTabButton>
      </LineTab>
      <!-- //Case : 금융상품 탭 선택했을 경우 하위 탭 -->

      <!-- Case : 고객서비스 탭 선택했을 경우 하위 탭 -->
      <LineTab>
        <LineTabButton tagName="button" type="button" :active="true">
          결제/입금
        </LineTabButton>
        <LineTabButton tagName="button" type="button">승계/연장</LineTabButton>
        <LineTabButton tagName="button" type="button"
          >온라인 약정</LineTabButton
        >
        <LineTabButton tagName="button" type="button"
          >금리인하요구</LineTabButton
        >
      </LineTab>
      <!-- //Case : 고객서비스 탭 선택했을 경우 하위 탭 -->

      <!-- Case : 홈페이지 이용 탭 선택했을 경우 하위 탭 -->
      <LineTab>
        <LineTabButton tagName="button" type="button" :active="true">
          본인인증
        </LineTabButton>
        <LineTabButton tagName="button" type="button">서류발급</LineTabButton>
        <LineTabButton tagName="button" type="button">회원가입</LineTabButton>
        <LineTabButton tagName="button" type="button">아이핀</LineTabButton>
      </LineTab>
      <!-- //Case : 홈페이지 이용 탭 선택했을 경우 하위 탭 -->

      <!-- Case : 기타 탭 선택했을 경우 하위 탭 -->
      <LineTab>
        <LineTabButton tagName="button" type="button" :active="true">
          채용관련
        </LineTabButton>
      </LineTab>
      <!-- //Case : 기타 탭 선택했을 경우 하위 탭 -->
    </div>

    <BasicHr theme="quinary" />

    <div :class="$style['qna']">
      <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
        <UiAccordionItem
          v-for="i in 10"
          :key="i"
          :classNames="{ item: $style['qna__item'] }"
        >
          <div :class="$style['qna__head']">
            <div :class="$style['qna__symbol']">Q</div>
            <div :class="$style['qna__cell']">
              <h3 :class="$style['qna__title']">
                [신차할부(오토론)] 신차할부 오토론이란?
              </h3>
            </div>
            <div :class="$style['qna__right']">
              <UiAccordionOpener
                :classNames="{ button: $style['qna__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
            <div :class="$style['qna__contents']">
              <div
                :class="[$style['qna__symbol'], $style['qna__symbol--answer']]"
              >
                A
              </div>
              <div :class="$style['qna__cell']">
                <p :class="$style['qna__text']">
                  차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안
                  원금과 이자가 포함된 원리금을 매월 일정하게 납부하는 대출
                  상품입니다. 두 줄 이상일 경우 이런식으로 노출됩니다.
                </p>
              </div>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>
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
    <!-- // Case : 결과 있을 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P01_p001.scss';
</style>
