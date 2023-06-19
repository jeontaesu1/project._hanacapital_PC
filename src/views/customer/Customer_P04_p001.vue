<script>
// Customer_P04_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    EventBanner,
    RoundStatus,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>이벤트</PageTitle>
    </PageHead>

    <div :class="$style['board-search-bar']">
      <InputBlock>
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
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 경우 -->

    <!-- Case : 결과 있을 경우 -->
    <div>
      <div :class="$style['event-list']">
        <ul :class="$style['event-list__list']">
          <li v-for="i in 8" :key="i" :class="$style['event-list__item']">
            <!-- Case : 진행중 -->
            <EventBanner
              thumb="/images/_dummy/img-area.png"
              :thumbFit="true"
              tagName="RouterLink"
              to="/customer/Customer_P04_p002"
            >
              <div class="inline-wrap row-margin-item-medium">
                <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
              </div>
              <h3 class="text-title-1 font-weight-medium ellipsis">
                타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
              </h3>
              <p
                class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
              >
                설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명
                노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
              </p>
              <p
                class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
              >
                2022.12.01 ~ 2022.12.31
              </p>
            </EventBanner>
            <!-- // Case : 진행중 -->
          </li>
          <li v-for="i in 4" :key="i" :class="$style['event-list__item']">
            <!-- Case : 종료 -->
            <EventBanner
              thumb="/images/_dummy/img-area.png"
              :thumbFit="true"
              tagName="RouterLink"
              to="/customer/Customer_P04_p002"
              :disabledStyle="true"
            >
              <div class="inline-wrap row-margin-item-medium">
                <RoundStatus size="small" theme="duodenary">종료</RoundStatus>
              </div>
              <h3 class="text-title-1 font-weight-medium ellipsis">
                타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
              </h3>
              <p
                class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
              >
                설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명
                노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
              </p>
              <p
                class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
              >
                2022.12.01 ~ 2022.12.31
              </p>
            </EventBanner>
            <!-- // Case : 종료 -->
          </li>
        </ul>
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
    <!-- // Case : 결과 있을 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P04_p001.scss';
</style>
