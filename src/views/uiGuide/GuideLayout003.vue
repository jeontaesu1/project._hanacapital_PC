<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
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

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '타이틀');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'close',
          onClick: () => alert('닫기 클릭'),
        },
      ]);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>contents head</template>

    // contents

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>Button 2</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
