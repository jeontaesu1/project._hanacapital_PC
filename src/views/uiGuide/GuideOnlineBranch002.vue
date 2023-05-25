<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import MI_P00_l004 from '@/views/onlineBranch/MI_P00_l004.vue';
import MI_P00_l005 from '@/views/onlineBranch/MI_P00_l005.vue';
import My_p06_p003 from '@/views/onlineBranch/My_p06_p003.vue';
import My_P08_l001 from '@/views/onlineBranch/My_P08_l001.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    MI_P00_l004,
    MI_P00_l005,
    My_p06_p003,
    My_P08_l001,
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
          자동이체 계좌 유의사항<br />MI_P00_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          가상 계좌 유의사항<br />MI_P00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          청약철회 신청 유의사항<br />My_p06_p003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          만기안내장<br />My_P08_l001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <MI_P00_l004 ref="layer001" />
    <MI_P00_l005 ref="layer002" />
    <My_p06_p003 ref="layer003" />
    <My_P08_l001 ref="layer004" />
  </PageContents>
</template>
