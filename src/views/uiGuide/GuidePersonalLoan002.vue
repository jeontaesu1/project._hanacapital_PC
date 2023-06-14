<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import PF_P02_l001 from '@/views/personalLoan/PF_P02_l001.vue';
import PF_P02_l002 from '@/views/personalLoan/PF_P02_l002.vue';
import PF_P02_l003 from '@/views/personalLoan/PF_P02_l003.vue';
import PF_P02_l004 from '@/views/personalLoan/PF_P02_l004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PF_P02_l001,
    PF_P02_l003,
    PF_P02_l004,
    PF_P02_l002,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
          아파트 검색 팝업<br />PF_P02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          등기부등본 조회 팝업<br />PF_P02_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          등기부등본 확인 팝업<br />PF_P02_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          온라인 약정<br />PF_P02_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <PF_P02_l001 ref="layer001" />
    <PF_P02_l002 ref="layer002" />
    <PF_P02_l003 ref="layer003" />
    <PF_P02_l004 ref="layer004" />
  </PageContents>
</template>
