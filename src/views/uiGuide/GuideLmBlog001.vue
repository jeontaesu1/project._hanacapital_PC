<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LM_P01_l009 from '@/views/lmBlog/LM_P01_l009.vue';
import LM_P01_l008 from '@/views/lmBlog/LM_P01_l008.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LM_P01_l009,
    LM_P01_l008,
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
          아파트 시세 수기 입력 팝업<br />LM_P01_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          차량조회 팝업<br />LM_P01_l008
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LM_P01_l009 ref="layer001" />
    <LM_P01_l008 ref="layer002" />
  </PageContents>
</template>
