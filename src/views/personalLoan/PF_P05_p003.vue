<script>
// PF_P05_p003
import { reactive } from 'vue';

import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
  },
  setup() {
    const state = reactive({
      name001Error: false,
      idNumber001Error: false,
      bankNumber001Error: false,
      businessNumber001Error: false,
      workplaceNameError001: false,
      dayError001: false,
      incomeError: false,
      workplaceNameError002: false,
      businessNumberError: false,
      dayError002: false,
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
        <PageTitle align="left">우수고객추가대출</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">고객정보를 입력해 주세요</PageMainText>
      <PageSubText align="left">
        실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
      </PageSubText>
    </PageHead>

    <FormList class="row-margin-contents">
      <FormListItem
        titleText="이름"
        :disabled="true"
        target="#PF_P01_p003_name001"
      >
        <InputBlock :disabled="true" :error="state.name001Error">
          <InputBlockCell :flexible="true">
            <BasicInput
              title="이름"
              defaultValue="김하나"
              :disabled="true"
              id="PF_P05_p003_name001"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>
  </PageContents>
</template>
