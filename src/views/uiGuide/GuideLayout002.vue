<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageMainText,
    PageSubText,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>contents head</template>

    <PageHead>
      <PageTitle>타이틀</PageTitle>
      <PageMainText>
        메인 텍스트 메인 텍스트 메인 텍스트 메인 텍스트
      </PageMainText>
      <PageSubText>
        서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트
        서브 텍스트 서브 텍스트
      </PageSubText>
    </PageHead>

    <div style="height: 1500px; border: 10px dotted #666">
      스크롤 생기게 하기 위한 더미
    </div>

    <template v-slot:foot>contents foot</template>
  </PageContents>
</template>
