<script>
// Customer_P04_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
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
            text: '고객센터',
            to: '/',
          },
          {
            text: '이벤트',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>이벤트</PageTitle>
    </PageHead>

    <div>
      <div :class="$style['image-view']">
        <img
          src="@/assets/images/_dummy/box-detail-large.png"
          alt="샘플 이미지"
        />
      </div>

      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton>응모하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block-small" />

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-none',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P04_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P04_p002.scss';
</style>
