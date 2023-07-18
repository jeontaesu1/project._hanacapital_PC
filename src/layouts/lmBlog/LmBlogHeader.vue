<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'lmBlog001',
        text: '빠른상담신청 내역',
        to: '/lm-blog/LM_P02_p001',
      },
      {
        name: 'lmBlog002',
        text: 'SMS상담요청 내역',
        to: '/lm-blog/LM_P03_p001',
      },
      {
        name: 'lmBlog003',
        text: '접속통계',
        to: '/lm-blog/LM_P04_p001',
      },
      {
        name: 'lmBlog004',
        text: '대출상담',
        to: '/lm-blog/LM_P01_p001',
      },
      {
        name: 'lmBlog005',
        text: '현황조회',
        to: '/lm-blog/LM_P05_p001',
      },
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <HeaderBase type="lmBlog" :nav="nav" />
</template>
