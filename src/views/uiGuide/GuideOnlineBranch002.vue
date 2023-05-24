<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import MI_P00_l006 from '@/views/onlineBranch/MI_P00_l006.vue';
import MI_P00_l007 from '@/views/onlineBranch/MI_P00_l007.vue';
import My_P08_l002 from '@/views/onlineBranch/My_P08_l002.vue';
import My_P08_l003 from '@/views/onlineBranch/My_P08_l003.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    MI_P00_l007,
    My_P08_l002,
    My_P08_l003,
    MI_P00_l006,
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
          자동이체 계좌 변경 신청 팝업<br />MI_P00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중도상환신청 확인 팝업<br />MI_P00_l007
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
    </ButtonList>

    <MI_P00_l006 ref="layer001" />
    <MI_P00_l007 ref="layer002" />
    <My_P08_l002 ref="layer003" />
    <My_P08_l003 ref="layer004" />
  </PageContents>
</template>
