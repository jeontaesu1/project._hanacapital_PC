<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Customer_P20_l001 from '@/views/customer/Customer_P20_l001.vue';
import Customer_P20_l002 from '@/views/customer/Customer_P20_l002.vue';
import Customer_P20_l003 from '@/views/customer/Customer_P20_l003.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Customer_P20_l001,
    Customer_P20_l002,
    Customer_P20_l003,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
          하나캐피탈 임직원 조회<br />Customer_P20_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          대출모집법인소속 임직원 조회<br />Customer_P20_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          하나캐피탈 전화권유 판매원 조회<br />Customer_P20_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Customer_P20_l001 ref="layer001" />
    <Customer_P20_l002 ref="layer002" />
    <Customer_P20_l003 ref="layer003" />
  </PageContents>
</template>
