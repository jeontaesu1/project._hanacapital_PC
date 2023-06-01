<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import MI_P00_l001 from '@/views/onlineBranch/MI_P00_l001.vue';
import MI_P00_l002 from '@/views/onlineBranch/MI_P00_l002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    MI_P00_l001,
    MI_P00_l002,
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
          전자금융거래 약관 동의<br />MI_P00_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          예상 결제금액 내역보기 팝업<br />MI_P00_l002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <MI_P00_l001 ref="layer001" />
    <MI_P00_l002 ref="layer002" />
  </PageContents>
</template>
