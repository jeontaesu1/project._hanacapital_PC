<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import MI_P00_l004 from '@/views/onlineBranch/MI_P00_l004.vue';
import MI_P00_l005 from '@/views/onlineBranch/MI_P00_l005.vue';
import MI_P00_l006 from '@/views/onlineBranch/MI_P00_l006.vue';
import MI_P00_l007 from '@/views/onlineBranch/MI_P00_l007.vue';
import My_p06_p003 from '@/views/onlineBranch/My_p06_p003.vue';
import My_P08_l001 from '@/views/onlineBranch/My_P08_l001.vue';
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
    MI_P00_l004,
    MI_P00_l005,
    MI_P00_l006,
    MI_P00_l007,
    My_p06_p003,
    My_P08_l001,
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
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);

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
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer010,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
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
          자동이체 계좌 변경 신청 팝업<br />MI_P00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중도상환신청 확인 팝업<br />MI_P00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          청약철회 신청 유의사항<br />My_p06_p003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          만기안내장<br />My_P08_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          만기후처리 변경 방법선택_렌트<br />My_P08_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          만기후처리 변경 방법선택_리스<br />My_P08_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          반환 신청 확인<br />My_P08_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          구매 신청 확인<br />My_P08_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <MI_P00_l004 ref="layer001" />
    <MI_P00_l005 ref="layer002" />
    <MI_P00_l006 ref="layer003" />
    <MI_P00_l007 ref="layer004" />
    <My_p06_p003 ref="layer005" />
    <My_P08_l001 ref="layer006" />
    <My_P08_l002 ref="layer007" />
    <My_P08_l003 ref="layer008" />
    <My_P08_l004 ref="layer009" />
    <My_P08_l005 ref="layer010" />
  </PageContents>
</template>
