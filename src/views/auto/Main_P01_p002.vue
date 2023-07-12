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
      <PageTitle>다이렉트 오토금융</PageTitle>
      <PageSubText>
        지금 바로 하나캐피탈이 제공하는 오토금융을 이용하시고,<br />
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
              저렴한 금리,<br />
              간편한 이용
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
              비용 NO! 보험 NO!<br />
              내차 OK!
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
              다양한 혜택,<br />
              편리한 내차 이용
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
              차별화된<br />
              중고차 구입 방법!
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
              차량 대금<br />
              분할 납부!
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
