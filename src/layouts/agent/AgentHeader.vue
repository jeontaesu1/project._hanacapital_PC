<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'agent001',
        text: '내구재할부',
        to: '/agent/Agent_P02_p001',
      },
      {
        name: 'agent002',
        text: '할부승계',
        to: '/agent/Agent_P03_p002',
      },
      {
        name: 'agent003',
        text: '채권양수도',
        to: '/agent/Agent_P09_p001',
      },
      {
        name: 'agent004',
        text: '선정산',
        to: '/agent/Agent_P10_p001',
      },
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <HeaderBase type="agent" :nav="nav" />
</template>
