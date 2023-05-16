<script>
import { onMounted } from 'vue';

import { useUiLoadingStore } from '@/stores/ui/loading';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    PageContents,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
      },
    };

    onMounted(() => {
      store.ui.loading.show();

      setTimeout(() => {
        store.ui.loading.hide();
      }, 1000);
    });
  },
};
</script>

<template>
  <PageContents>
    <div style="height: 1500px; border: 10px dotted #666">
      스크롤 생기게 하기 위한 더미
    </div>
  </PageContents>
</template>
