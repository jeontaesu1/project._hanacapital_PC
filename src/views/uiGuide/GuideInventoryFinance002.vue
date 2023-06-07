<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IF_P03_l001 from '@/views/inventoryFinance/IF_P03_l001.vue';
import IF_P03_l003 from '@/views/inventoryFinance/IF_P03_l003.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IF_P03_l001,
    IF_P03_l003,
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
          중도상환 입금 예약신청 팝업(오늘 즉시 출금)<br />IF_P03_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중도상환 입금 예약신청<br />IF_P03_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <IF_P03_l001 ref="layer001" />
    <IF_P03_l003 ref="layer002" />
  </PageContents>
</template>
