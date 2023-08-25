<script>
// Main_P01_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    TextButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconPig,
    IconBuilding,
    IconCarSecurity,
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
            text: '온라인지점',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>김하나님 대출이 필요하신가요?</PageTitle>
    </PageHead>

    <!-- Case : 종료계약만 보유 -->
    <ButtonList
      :wrap="true"
      :col="4"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <ButtonListItem>
        <BasicButton>종료된 계약 확인하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 종료계약만 보유 -->

    <div :class="[$style['product-list'], $style['product-list--col-3']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconBuilding />
            </div>
            <h3 :class="$style['product-list__title']">행복아파트론</h3>
            <p :class="$style['product-list__text']">
              아파트를 소유자를<br />
              대상으로 하는 신용대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCarSecurity />
            </div>
            <h3 :class="$style['product-list__title']">원큐자동차담보대출</h3>
            <p :class="$style['product-list__text']">
              소유하고 있는 차량으로<br />
              담보 대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconPig />
            </div>
            <h3 :class="$style['product-list__title']">e하나신용대출</h3>
            <p :class="$style['product-list__text']">
              빠르고 간편한<br />
              인터넷 전용대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p001_empty.scss';
</style>
