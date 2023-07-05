<script>
// AF_P06_p004 시스템심사 & Fraud인 경우
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
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
    IllustInfoText,
    BasicHr,
    IconCustomer,
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '중고차오토론',
          },
        ]"
      />
    </template>

    <div class="row-margin-container-medium">
      <IllustInfo>
        <IllustObject type="error" />
        <IllustInfoTitle>지점문의 부탁드립니다</IllustInfoTitle>
        <IllustInfoText>
          자세한 사항은 담당자 또는 하나캐피탈 고객센터로 문의주시기 바랍니다.
        </IllustInfoText>
      </IllustInfo>

      <ButtonList :wrap="true">
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">확인</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>상담요청</BasicButton>
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
    <!-- // Case : 한도조회결과 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p004_004.scss';
</style>
