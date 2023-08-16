<script>
// PF_P01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';

import PF_P01_p001_contents from '@/views/personalLoan/PF_P01_p001_contents.vue';

export default {
  components: {
    PageContents,
    LocationBar,

    PF_P01_p001_contents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
      store.ui.header.setDepthActive(() => 'personalLoan001');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });
  },
};
</script>

<template>
  <PageContents size="full">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '개인금융',
            to: '/',
          },
          {
            text: 'e하나신용대출',
            to: '/',
          },
        ]"
      />
    </template>

    <PF_P01_p001_contents />
  </PageContents>
</template>
