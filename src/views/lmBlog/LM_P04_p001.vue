<script>
// LM_P04_p001

import { reactive } from 'vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      testError001: false,
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
      <PageTitle>접속통계</PageTitle>
    </PageHead>
    <FormList>
      <FormListItem
        titleText="통계년도"
        target="#testInput010"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '2023',
                  },
                  {
                    value: '2',
                    label: '2023',
                  },
                  {
                    value: '3',
                    label: '2023',
                  },
                  {
                    value: '4',
                    label: '2023',
                  },
                  {
                    value: '5',
                    label: '2023',
                  },
                  {
                    value: '6',
                    label: '2023',
                  },
                  {
                    value: '7',
                    label: '2023',
                  },
                  {
                    value: '8',
                    label: '2023',
                  },
                  {
                    value: '9',
                    label: '2023',
                  },
                  {
                    value: '10',
                    label: '2023',
                  },
                  {
                    value: '11',
                    label: '2023',
                  },
                  {
                    value: '12',
                    label: '2023',
                  },
                ]"
                title="통계년도"
                inputId="testInput010"
                :selectable="
                  (option) => {
                    switch (option.value) {
                      case '3':
                      case '4':
                        return false;
                      default:
                        return true;
                    }
                  }
                "
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>
    // contents
  </PageContents>
</template>
