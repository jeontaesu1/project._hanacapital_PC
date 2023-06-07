<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import AF_P07_l001 from '@/views/auto/AF_P07_l001.vue';
import AF_P07_l003 from '@/views/auto/AF_P07_l003.vue';
import AF_P07_l004 from '@/views/auto/AF_P07_l004.vue';
import AF_P07_l005 from '@/views/auto/AF_P07_l005.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    AF_P07_l001,
    AF_P07_l003,
    AF_P07_l004,
    AF_P07_l005,
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
          승계유의사항 확인 팝업<br />AF_P07_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          승계 신청 URL 전송 팝업<br />AF_P07_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          리스 상세조건 팝업<br />AF_P07_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          렌트 상세조건 팝업<br />AF_P07_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <AF_P07_l001 ref="layer001" />
    <AF_P07_l003 ref="layer002" />
    <AF_P07_l004 ref="layer003" />
    <AF_P07_l005 ref="layer004" />
  </PageContents>
</template>
