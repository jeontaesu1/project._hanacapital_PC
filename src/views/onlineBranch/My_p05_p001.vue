<script>
// My_p05_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle>
          금리인하요구권 신청 가능한 상품은 총
          <span class="color-green">42</span>건
        </PageTitle>
        <PageMainText
          align="center"
          :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
        >
          금리인하 대상상품만 조회됩니다.
        </PageMainText>
      </PageHeadRow>
    </PageHead>

    <!-- Case : 금리인하요구권 신청 가능한 상품이 있는 경우 -->
    <ul class="reset-list">
      <li v-for="i in 5" :key="i" class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">오토할부 20고5678</h3>
              <p class="text-body-3 color-gray-tertiary row-margin-item-small">
                벤츠 S-Class 세단 가솔린 3.0 S350 Long 자동
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>현재금리</KeyValueTitle>
              <KeyValueText>4.50%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>월 납입금</KeyValueTitle>
              <KeyValueText>324,440 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>4,820,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <ButtonList
            :wrap="true"
            align="center"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <ButtonListItem>
              <BasicButton size="regular">신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </li>
    </ul>
    <!-- //Case : 금리인하요구권 신청 가능한 상품이 있는 경우 -->

    <!-- Case : 금리인하요구권 신청가능 상품이 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        현재 금리인하가 가능한 상품이 없습니다.
      </p>
    </div>
    <!-- //Case : 금리인하요구권 신청가능 상품이 없을 경우 -->

    <!-- Case : 보유상품이 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">현재 보유하고 계신 상품이 없습니다.</p>
    </div>
    <!-- //Case : 보유상품이 없는 경우 -->

    <PaginationNav
      :classNames="{
        wrap: 'row-margin-container-medium row-margin-bottom-none',
      }"
    >
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

    <UiAccordion :classNames="{ wrap: 'row-margin-block' }">
      <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
        <BasicBox :class="$style['application']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">유의사항</h3>
            </div>
            <div class="flex-box__cell">
              <UiAccordionOpener />
            </div>
          </div>
          <UiAccordionLayer>
            <div :class="$style['application-contents']">
              <ul class="reset-list">
                <li class="row-margin-item-medium">
                  <NoticeText>
                    금리인하요구권 심사를 위해서는 개인신용정보조회동의가
                    필요합니다.
                  </NoticeText>
                </li>
                <li class="row-margin-item-medium">
                  <NoticeText>
                    심사결과에 따라 금리인하요구 수용이 불가능할 수 있습니다.
                  </NoticeText>
                </li>
                <li class="row-margin-item-medium">
                  <NoticeText>
                    다음의 경우 금리인하요구 수용이 불가능합니다. 신청 시 참고해
                    주세요.
                  </NoticeText>

                  <ul :class="[$style['basic-list'], 'row-margin-item-medium']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        최저금리적용
                      </div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        금리인하 비대상 상품
                      </div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        신용상태 개선 미비
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
    </UiAccordion>
    <!-- //Case : 중도상환신청이 가능한 계약 리스트가 있는 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p05_p001.scss';
</style>
