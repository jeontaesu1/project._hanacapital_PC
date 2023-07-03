<script>
// Customer_P03_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconDownloadSmall,
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
      store.ui.header.setActive(() => 'customer');
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
            to: '/customer/Customer_P00_p001',
          },
          {
            text: '공지사항',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>공지사항</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div
          :class="[
            $style['board-detail__head-cell'],
            $style['board-detail__head-cell--title'],
          ]"
        >
          <h3 :class="$style['board-detail__title']">게시물 제목</h3>
        </div>
        <div :class="$style['board-detail__head-cell']">2022.08.30</div>
      </div>

      <section :class="$style['board-detail__contents']">
        // 게시물 내용 노출
      </section>

      <!-- Case : 첨부 파일 없을시 비노출 -->
      <div :class="$style['board-detail__foot']">
        <div :class="$style['download-list']">
          <ul :class="$style['download-list__list']">
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 첨부 파일 없을시 비노출 -->
    </div>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P03_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P03_p002.scss';
</style>
