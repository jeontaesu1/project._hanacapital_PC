<script>
// BF_P00_main
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconMedical from '@/assets/images/icon/medical.svg?component';
import IconDentistGray from '@/assets/images/icon/dentist-gray.svg?component';
import IconGoodsLoan from '@/assets/images/icon/goods-loan.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    TextButton,
    IconMedical,
    IconDentistGray,
    IconGoodsLoan,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'business');
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
            text: '기업금융',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle>의료기 · 설비를 위한 최적의 자금 대출!</PageTitle>
        <PageMainText
          align="center"
          :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
        >
          하나캐피탈 의료기 · 설비 대출이 여러분의 성공비즈니스를
          지원해드립니다.
        </PageMainText>
      </PageHeadRow>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-3']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconMedical />
            </div>
            <h3 :class="$style['product-list__title']">일반리스</h3>
            <p :class="$style['product-list__text']">
              물건 장기대여 금융 상품!
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
              <IconDentistGray />
            </div>
            <h3 :class="$style['product-list__title']">일반할부</h3>
            <p :class="$style['product-list__text']">
              의료장비, 의료소모품, 설비 구입 지원
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
              <IconGoodsLoan />
            </div>
            <h3 :class="$style['product-list__title']">내구재할부</h3>
            <p :class="$style['product-list__text']">
              생활에 꼭 필요한 소비재도 이젠 할부로!
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
@import '@/assets/scss/views/business/BF_P00_main.scss';
</style>
