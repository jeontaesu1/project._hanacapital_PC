<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LM_P07_l002 from '@/views/lmBlogPersonal/LM_P07_l002.vue';
import LM_P07_l004 from '@/views/lmBlogPersonal/LM_P07_l004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LM_P07_l002,
    LM_P07_l004,
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
          개인정보 수집 및 이용동의 팝업<br />LM_P07_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          신청정보 입력<br />LM_P07_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LM_P07_l002 ref="layer001" />
    <LM_P07_l004 ref="layer002" />
  </PageContents>
</template>
