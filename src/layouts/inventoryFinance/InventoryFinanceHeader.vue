<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'inventoryFinance001',
        text: '한도조회',
        to: '/inventory-finance/IF_P08_p001',
      },
      {
        name: 'inventoryFinance002',
        text: '대출신청',
        to: '/inventory-finance/IF_P02_p001',
      },
      {
        name: 'inventoryFinance003',
        text: '중도상환',
        to: '/inventory-finance/IF_P03_p001',
      },
      {
        name: 'inventoryFinance004',
        text: '만기연장',
        to: '/inventory-finance/IF_P04_p001',
      },
      {
        name: 'inventoryFinance005',
        text: '구비서류 추가등록',
        to: '/inventory-finance/IF_P05_p001',
      },
      {
        name: 'inventoryFinance006',
        text: '종료건 확인',
        to: '/inventory-finance/IF_P06_p001',
      },
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <HeaderBase type="inventoryFinance" :nav="nav" />
</template>
