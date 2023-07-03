<script>
// Customer_P11_p001
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
import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
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
  <PageContents>
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
            text: '공동인증센터',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>공동인증센터</PageTitle>
    </PageHead>

    <IllustObject type="certification" />

    <ButtonList
      align="full"
      :classNames="{
        wrap: 'row-margin-top-none',
      }"
    >
      <ButtonListItem>
        <BasicButton>인증서 내보내기 [ PC > 스마트폰 ]</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>인증서 가져오기 [ 스마트폰 > PC ]</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div class="row-margin-block-small">
      <ul :class="[$style['basic-list'], $style['basic-list--regular-margin']]">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기기간 인증서 이동/복사는 내보내기 및 가져오기 기능으로 모바일 및 타
            브라우저, 타 PC로 인증서 이동/복사가 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            브라우저 인증서(HTML5)를 사용하는 경우에만 이용이 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            8자리 승인코드를 이용하여 손쉽고 간단하게 이동/복사를 수정할 수
            있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기기간 인증서 가져오기 기능은 ‘브라우저’ 또는 ‘하드디스크’
            저장매체에 인증서를 저장할 수 있습니다.
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P11_p001.scss';
</style>
