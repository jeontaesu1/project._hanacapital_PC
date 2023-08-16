<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Agent_P09_l001_view from '@/views/agent/Agent_P09_l001_view.vue';
import Agent_P09_l001_form from '@/views/agent/Agent_P09_l001_form.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Agent_P09_l001_view,
    Agent_P09_l001_form,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          법인 SGI 등록 및 조회 팝업 - 상세보기<br />Agent_P09_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          법인 SGI 등록 및 조회 팝업 - 수정화면<br />Agent_P09_l001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Agent_P09_l001_view ref="layer001" />
    <Agent_P09_l001_form ref="layer002" />
  </PageContents>
</template>
