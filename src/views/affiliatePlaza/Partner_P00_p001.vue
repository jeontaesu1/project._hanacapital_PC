<script>
// Partner_P00_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconCarGreen from '@/assets/images/icon/car-green.svg?component';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconCompany from '@/assets/images/icon/company.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    TextButton,
    IconCarGreen,
    IconCustomer,
    IconCompany,
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
            text: '제휴광장',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>제휴광장</PageTitle>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-3']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCarGreen />
            </div>
            <h3 :class="$style['product-list__title']">재고금융</h3>
            <p :class="$style['product-list__text']">
              하나캐피탈 재고금융 협약한<br />
              매매상사전용 페이지입니다.
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
                자세히보기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCustomer />
            </div>
            <h3 :class="$style['product-list__title']">대출상담사</h3>
            <p :class="$style['product-list__text']">
              하나캐피탈 대출상담사<br />
              전용 페이지로 이동합니다.
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
                자세히보기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCompany />
            </div>
            <h3 :class="$style['product-list__title']">에이전트</h3>
            <p :class="$style['product-list__text']">
              AG 및 판매점<br />
              전용 페이지로 이동합니다.
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
                자세히보기
              </TextButton>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/affiliatePlaza/Partner_P00_p001.scss';
</style>
