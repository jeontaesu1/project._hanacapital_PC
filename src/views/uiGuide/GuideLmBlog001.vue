<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LM_P01_l009 from '@/views/lmBlog/LM_P01_l009.vue';
import LM_P01_l002 from '@/views/lmBlog/LM_P01_l002.vue';
import LM_P01_l003 from '@/views/lmBlog/LM_P01_l003.vue';
import LM_P01_l006 from '@/views/lmBlog/LM_P01_l006.vue';
import LM_P01_l007 from '@/views/lmBlog/LM_P01_l007.vue';
import LM_P01_l008 from '@/views/lmBlog/LM_P01_l008.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LM_P01_l009,
    LM_P01_l002,
    LM_P01_l003,
    LM_P01_l006,
    LM_P01_l007,
    LM_P01_l008,
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
          아파트 시세 수기 입력 팝업<br />LM_P01_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          아파트 검색 팝업<br />LM_P01_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          등기부등본 조회 팝업<br />LM_P01_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          등기부등본 확인 팝업<br />LM_P01_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          사업자 선택 팝업<br />LM_P01_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          차량조회 팝업<br />LM_P01_l008
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LM_P01_l009 ref="layer001" />
    <LM_P01_l002 ref="layer002" />
    <LM_P01_l003 ref="layer003" />
    <LM_P01_l006 ref="layer004" />
    <LM_P01_l007 ref="layer005" />
    <LM_P01_l008 ref="layer006" />
  </PageContents>
</template>
