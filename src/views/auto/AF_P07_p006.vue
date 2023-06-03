<script>
// AF_P07_p006
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CarThumb,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">오토승계</PageTitle>
        <template v-slot:right>
          <StepProgress :total="6" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">승계 대상 차량을 조회해 주세요</PageMainText>
    </PageHead>

    <InputBlock>
      <InputBlockCell :flexible="true">
        <BasicInput
          type="search"
          title="차량번호 검색어"
          placeholder="차량번호"
        />
      </InputBlockCell>
      <InputBlockCell type="search">
        <SearchButton />
      </InputBlockCell>
    </InputBlock>

    <!-- Case : 조회 후 노출 -->
    <section class="contents-wrap row-margin-block row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">차량정보</h3>

      <!-- Case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          승계 가능한 차량이 없습니다.<br />
          양도인에게 승계 동의를 요청해주세요.
        </p>
      </div>
      <!-- Case : 검색 결과 없을 때 -->

      <!-- Case : 검색 결과 있을 때 -->
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <p class="text-body-4 font-weight-light row-margin-mini">
              2020년식
            </p>
            <h3 class="text-title-2 font-weight-regular">운용리스 11가1111</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              올 뉴 아반떼(CN7) 가솔린 1.6
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem>
            <KeyValueTitle>차대번호</KeyValueTitle>
            <KeyValueText>KMHEL00CPYA000001</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <!-- // Case : 검색 결과 있을 때 -->
    </section>
    <!-- // Case : 조회 후 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p006.scss';
</style>
