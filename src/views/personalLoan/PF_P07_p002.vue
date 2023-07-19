<script>
// PF_P07_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import IframeContents from '@/components/ui/viewer/IframeContents.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    IframeContents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      BASE_URL,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
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
            text: '스탁론',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>상품안내</PageTitle>
    </PageHead>

    <IframeContents
      :url="`${BASE_URL}legacy/html/stock-detail.html`"
      id="stockDetailIframe"
    />
  </PageContents>
</template>
