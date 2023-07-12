<script>
// PF_P01_p007
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    IconPig,
    IconBuilding,
    IconCar,
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
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '개인금융',
            to: '/',
          },
          {
            text: 'e하나신용대출',
            to: '/',
          },
        ]"
      />
    </template>

    <div class="row-margin-container-medium">
      <IllustInfo>
        <IllustObject type="fail" />
        <IllustInfoTitle>
          김하나님, 신청하신 상품은<br />
          대출진행이 어렵습니다
        </IllustInfoTitle>
      </IllustInfo>

      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="tertiary" className="row-margin-container-medium" />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconBuilding /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">
                아파트 소유자를 위한 무담보 아파트 신용대출
              </span>
              <span :class="[$style['icon-list__title'], 'row-margin-small']">
                행복아파트론
              </span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCar /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">
                내 차만 있다면 특별한도와 금리혜택까지
              </span>
              <span :class="[$style['icon-list__title'], 'row-margin-small']">
                원큐자동차담보대출
              </span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconPig /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">
                소득이 있다면 쉽고 빠른 신용대출
              </span>
              <span :class="[$style['icon-list__title'], 'row-margin-small']">
                e하나신용대출
              </span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p007.scss';
</style>
