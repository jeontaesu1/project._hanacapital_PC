<script>
// Main_P01_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconCarGreen from '@/assets/images/icon/car-green.svg?component';
import IconCarRent from '@/assets/images/icon/car-rent.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';
import IconCarUsed from '@/assets/images/icon/car-used.svg?component';
import IconCarPay from '@/assets/images/icon/car-pay.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageSubText,
    PageTitle,
    TextButton,
    IconCarGreen,
    IconCarRent,
    IconCarSecurity,
    IconCarUsed,
    IconCarPay,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
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
            text: '오토금융',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>다이렉트 자동차</PageTitle>
      <PageSubText>
        지금 바로 하나캐피탈이 제공하는 자동차 대출상품을 이용하시고,<br />
        최고의 만족을 누리세요.
      </PageSubText>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-5']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCarGreen />
            </div>
            <h3 :class="$style['product-list__title']">오토론</h3>
            <p :class="$style['product-list__text']">
              차량 대금은 금융사에서<br />
              금액은 분할 납부로
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
              <IconCarRent />
            </div>
            <h3 :class="$style['product-list__title']">
              다이렉트<br />
              장기렌터카
            </h3>
            <p :class="$style['product-list__text']">
              로켓출고! 하나캐피탈<br />
              장기렌터카
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
            <h3 :class="$style['product-list__title']">
              다이렉트<br />
              오토리스
            </h3>
            <p :class="$style['product-list__text']">
              빠른견적!<br />
              저렴한 견적!
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
              <IconCarUsed />
            </div>
            <h3 :class="$style['product-list__title']">중고차 오토론</h3>
            <p :class="$style['product-list__text']">
              스마트한 중고차<br />
              구입자금 대출
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
              <IconCarPay />
            </div>
            <h3 :class="$style['product-list__title']">오토할부</h3>
            <p :class="$style['product-list__text']">
              판매사와 제휴,<br />
              합리적인 할부
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
@import '@/assets/scss/views/auto/Main_P01_p002.scss';
</style>
