<script>
// AF_P07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';

import AF_P07_p001_contents from '@/views/auto/AF_P07_p001_contents.vue';

export default {
  components: {
    PageContents,
    LocationBar,

    AF_P07_p001_contents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
      store.ui.header.setDepthActive(() => 'auto006');
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '오토승계',
            to: '/',
          },
        ]"
      />
    </template>

    <AF_P07_p001_contents />
  </PageContents>
</template>
