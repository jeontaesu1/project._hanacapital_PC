<script>
// IF_P03_p001

import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicHr,
  },

  setup() {
    const state = reactive({
      name003Error: false,
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
        <PageTitle align="left">중도상환</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"
        >중도상환 신청을 원하시는 상품을 선택해주세요</PageMainText
      >
    </PageHead>

    <!-- case : 재고금융 2개 이상일경우 -->
    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="testNavTab001_001">재고금융</NavTabButton>
        <NavTabButton link="testNavTab001_002">재고금융Ⅱ</NavTabButton>
      </NavTab>

      <UiTabPanel name="testNavTab001_001">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                NH투자증권(유캔그린)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <div>대기영역</div>
        </BasicBox>
      </UiTabPanel>

      <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>
    </UiTab>
    <!-- //case : 재고금융 2개 이상일경우 -->

    <FormList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <FormListItem titleText="이름" target="#Common_P00_p003_name003">
        <FormInvalid :error="state.name003Error">
          <InputBlock :error="state.name003Error">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="Common_P00_p003_name003" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>공동인증서 인증</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/Common_P00_p003.scss';
</style>
