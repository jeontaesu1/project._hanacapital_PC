<script>
// IF_P05_p001
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBoxHeadLeft,
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
      <PageTitle>
        서류를 등록할 상품을<br />
        선택해 주세요
      </PageTitle>
    </PageHead>

    <ul class="reset-list">
      <li class="row-margin-contents-small">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-title-2 font-weight-medium">
              주식회사알차이노베이션 (재고금융)
            </h3>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>

      <li class="row-margin-contents-small">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-title-2 font-weight-medium">
              주식회사알차이노베이션 (재고금융Ⅱ)
            </h3>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
    </ul>

    <BasicHr theme="quaternary" type="contents" className="row-margin-block" />

    <section class="row-margin-block-small row-margin-top-none">
      <h4 class="text-title-1 row-margin-contents">구비서류 추가등록</h4>

      <InputBlock>
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="차량번호 입력"
            placeholder="차량번호 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>
    </section>

    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
    >
      <ButtonListItem>
        <BasicButton line="true">조회</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <BasicHr theme="quaternary" type="contents" className="row-margin-block" />

    <section>
      <h4 class="text-title-1 row-margin-contents">계약내역</h4>

      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents-small">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-title-2 font-weight-medium">20고5678</div>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>10,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상담일자</KeyValueTitle>
                <KeyValueText>2022.11.25</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>등록여부</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
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
                <BasicButton size="regular">구비서류 추가등록</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>

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
        <PaginationNavNumber>25</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>

      <!-- Case : 조회결과 없을 시 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">상담 승인 건이 없습니다.</p>
      </div>
      <!-- // Case : 조회결과 없을 시 -->
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P05_p001.scss';
</style>
