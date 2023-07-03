<script>
// PF_P01_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    IconCustomer,
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
      store.ui.header.setActive(() => 'personalLoan');
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
            text: '개인금융',
            to: '/',
          },
          {
            text: 'e하나신용대출',
          },
        ]"
      />
    </template>

    <div class="row-margin-container-medium">
      <IllustInfo>
        <IllustObject type="complete" />
        <IllustInfoTitle>김하나님의 대출이 신청 완료되었습니다</IllustInfoTitle>
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
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCustomer /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">고객센터 1800-1110</div>
              <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p010.scss';
</style>
