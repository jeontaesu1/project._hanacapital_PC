<script>
// My_P08_p013
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
      store.ui.header.setActive(() => 'onlineBranch');
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
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '만기후처리',
          },
          {
            text: '연장 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <div class="row-margin-container-medium">
      <IllustInfo>
        <IllustObject type="complete" />
        <IllustInfoTitle>연장 신청이 완료되었습니다</IllustInfoTitle>
        <!-- Case : 렌트일 경우 노출 -->
        <IllustInfoText>
          재렌트 견적상담을 위해 상담원이 유선연락 드리겠습니다.
        </IllustInfoText>
        <!-- // Case : 렌트일 경우 노출 -->
        <!-- Case : 리스일 경우 노출 -->
        <IllustInfoText>
          심사결과는 등록하신 휴대폰 번호로 문자(LMS)안내 드리겠습니다.
        </IllustInfoText>
        <!-- // Case : 리스일 경우 노출 -->
      </IllustInfo>

      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <!-- Case : 렌트일 경우 노출 -->
    <BasicHr theme="tertiary" className="row-margin-container-medium" />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCustomer /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">
                재렌트 상담 1800-1110
              </div>
              <div :class="$style['icon-list__text']">
                (유)에이치서비스플랫폼
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- // Case : 렌트일 경우 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p013.scss';
</style>
