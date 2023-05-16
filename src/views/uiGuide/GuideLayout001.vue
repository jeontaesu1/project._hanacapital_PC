<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StickyBar,
    NavTab,
    NavTabButton,
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
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <NavTab :head="true" :scroll="true" :auto="true">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 2</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 3</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 4</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 7</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 8</NavTabButton>
        </NavTab>
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        <strong>계산결과를</strong><br />
        알려드릴게요
      </PageMainText>
      <PageSubText>
        대출금액과 기간으로 계산한 결과예요.<br />
        실제 대출 결과와 다를 수 있어요.
      </PageSubText>
    </PageTextGroup>

    // contents

    <button type="button" @click="store.ui.common.setApp(true)">
      APP 모드 ON
    </button>
    <button type="button" @click="store.ui.common.setApp(false)">
      APP 모드 OFF
    </button>

    <div style="height: 1500px; border: 10px dotted #666">
      스크롤 생기게 하기 위한 더미
    </div>

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
