<script>
// AF_P07_p006
import { reactive } from 'vue';

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
    CarThumb,
  },

  setup() {
    const state = reactive({
      carNumberError: false,
    });

    return {
      state,
    };
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

    <!-- Case : 검색 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- Case : 검색 결과 없을 때 -->

    <!-- Case : 검색 결과 없을 때 -->
    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">차량정보</h3>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="flex-box row-margin-mini">
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2020년식</p>
              </div>
            </div>
            <h3 class="text-title-2 font-weight-regular">운용리스 11가1111</h3>
            <p class="text-body-3 color-gray row-margin-item-small">
              올 뉴 아반떼(CN7) 가솔린 1.6
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>차대번호</KeyValueTitle>
            <KeyValueText>KMHEL00CPYA000001</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>
    <!-- //  Case : 검색 결과 없을 때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P02_l001.scss';
</style>
