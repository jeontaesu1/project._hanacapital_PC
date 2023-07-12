<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
};
</script>

<template>
  <HeaderBase
    :nav="[
      {
        name: 'auto',
        text: '오토금융',
        to: '/auto/Main_P01_p002',
      },
      {
        name: 'personalLoan',
        text: '개인금융',
        to: '/personal-loan/Main_P01_p003',
      },
      {
        name: 'business',
        text: '기업금융',
        to: '/business/BF_P00_main',
      },
      {
        name: 'onlineBranch',
        text: '온라인지점',
        to: '/online-branch/MI_P00_p001',
      },
      {
        name: 'customer',
        text: '고객센터',
        to: '/customer/Customer_P00_p001',
      },
    ]"
  />
</template>
