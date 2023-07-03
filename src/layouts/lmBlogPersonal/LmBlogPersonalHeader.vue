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
    type="lmBlogPersonal"
    :nav="[
      {
        name: 'lmBlogPersonal001',
        text: '홈',
        to: '/lm-blog-personal/LM_P07_p001',
      },
      {
        name: 'lmBlogPersonal002',
        text: '찾아오시는 길',
        to: '/lm-blog-personal/LM_P07_p002',
      },
    ]"
  />
</template>
