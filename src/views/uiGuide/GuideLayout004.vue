<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageMainText,
    PageSubText,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'business');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
      store.ui.header.setActive();
    });

    return {
      store,
    };
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
            text: '1 뎁스 링크가 없는 경우',
          },
          {
            text: '2 뎁스',
            to: '/',
          },
          {
            text: '3 뎁스',
            to: '/',
          },
          {
            text: '4 뎁스',
            to: '/',
          },
          {
            text: '5 뎁스',
            to: '/',
          },
          {
            text: '6 뎁스',
            to: '/',
          },
        ]"
      />
    </template>

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
