<script>
// MI_P01_p000
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    RouterLink,
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
    IllustObject,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
      store.ui.header.setDepthActive(() => 'onlineBranch003');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '내정보관리',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>내정보관리</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        관리하실 정보를 선택하세요.
      </PageSubText>
    </PageHead>

    <IllustObject type="document" />

    <div :class="$style['logs-wrap']">
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--secondary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-1']">
                  비밀번호 변경
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink
                  to="/company/Company_P01_p002"
                  :class="$style['logs__link']"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--secondary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-1']">
                  주소지/연락처 변경
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink
                  to="/company/Company_P01_p004"
                  :class="$style['logs__link']"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="inline-wrap align-center row-margin-contents-group">
      <TextButton
        :underline="true"
        :classNames="{ text: 'text-body-4 color-gray' }"
      >
        회원탈퇴
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P01_p000.scss';
</style>
