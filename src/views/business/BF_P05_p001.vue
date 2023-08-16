<script>
// BF_P05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';

import BF_P05_p001_contents from '@/views/business/BF_P05_p001_contents.vue';

export default {
  components: {
    PageContents,
    LocationBar,

    BF_P05_p001_contents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'business');
      store.ui.header.setDepthActive(() => 'business001');
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
            text: '의료기·설비',
            to: '/',
          },
          {
            text: '일반리스',
            to: '/',
          },
        ]"
      />
    </template>

    <BF_P05_p001_contents />
  </PageContents>
</template>
