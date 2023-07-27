<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import My_P08_l001_001 from '@/views/onlineBranch/My_P08_l001_001.vue';
import My_P08_l001_002 from '@/views/onlineBranch/My_P08_l001_002.vue';
import My_P08_l002 from '@/views/onlineBranch/My_P08_l002.vue';
import My_P08_l003 from '@/views/onlineBranch/My_P08_l003.vue';
import My_P08_l004 from '@/views/onlineBranch/My_P08_l004.vue';
import My_P08_l005 from '@/views/onlineBranch/My_P08_l005.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    My_P08_l001_001,
    My_P08_l001_002,
    My_P08_l002,
    My_P08_l003,
    My_P08_l004,
    My_P08_l005,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          만기안내장 - 렌트<br />My_P08_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          만기안내장 - 리스<br />My_P08_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          만기후처리 변경 방법선택_렌트<br />My_P08_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          만기후처리 변경 방법선택_리스<br />My_P08_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          반환 신청 확인<br />My_P08_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          구매 신청 확인<br />My_P08_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <My_P08_l001_001 ref="layer001" />
    <My_P08_l001_002 ref="layer002" />
    <My_P08_l002 ref="layer003" />
    <My_P08_l003 ref="layer004" />
    <My_P08_l004 ref="layer005" />
    <My_P08_l005 ref="layer006" />
  </PageContents>
</template>
