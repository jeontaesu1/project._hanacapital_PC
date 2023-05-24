<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Customer_P11_l002 from '@/views/customer/Customer_P11_l002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Customer_P11_l002,
  },
  setup() {
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer001,
      layer001Open,
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
          인증서 가져오기<br />Customer_P11_l002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Customer_P11_l002 ref="layer001" />
  </PageContents>
</template>
