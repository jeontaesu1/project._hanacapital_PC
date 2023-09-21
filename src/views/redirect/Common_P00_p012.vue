<script>
// Common_P00_p012
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

import IconAppStore from '@/assets/images/icon/appstore.svg?component';
import IconGooglePlay from '@/assets/images/icon/playstore.svg?component';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    IconAppStore,
    IconGooglePlay,
  },
};
</script>

<template>
  <PageContents size="wide">
    <IllustInfo>
      <IllustObject />
      <IllustInfoTitle>하나캐피탈 앱을 설치해 보세요!</IllustInfoTitle>
      <IllustInfoText>
        하나캐피탈 앱을 설치하면<br />
        <span class="color-green font-weight-regular"
          >대출 이어하기, 대출 관리 등 하나캐피탈의 모든 서비스를 이용</span
        >하실 수 있어요.
      </IllustInfoText>
    </IllustInfo>

    <div
      :class="[
        $style['icon-list'],
        'row-margin-block-small',
        'row-margin-bottom-none',
      ]"
    >
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <a
            href="https://apps.apple.com/kr/app/id1602195746"
            target="_blank"
            :class="$style['icon-list__block']"
          >
            <span :class="$style['icon-list__icon']"><IconAppStore /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">App Store</span>
            </span>
          </a>
        </li>
        <li :class="$style['icon-list__item']">
          <a
            href="https://play.google.com/store/apps/details?id=com.hanacapital.mct.phone"
            target="_blank"
            :class="$style['icon-list__block']"
          >
            <span :class="$style['icon-list__icon']"><IconGooglePlay /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">Google Play</span>
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div :class="[$style['guide'], 'row-margin-block']">
      <ul :class="$style['guide__list']">
        <li :class="$style['guide__item']">
          <div :class="$style['guide__block']">
            <div :class="$style['guide__title']">
              한 눈에 보는<br />
              계약관리
            </div>
            <div :class="$style['guide__img']">
              <img src="@/assets/images/contents/guide-001.png" alt="" />
            </div>
          </div>
        </li>
        <li :class="$style['guide__item']">
          <div :class="$style['guide__block']">
            <div :class="$style['guide__title']">
              간편한<br />
              한도조회
            </div>
            <div :class="$style['guide__img']">
              <img src="@/assets/images/contents/guide-002.png" alt="" />
            </div>
          </div>
        </li>
        <li :class="$style['guide__item']">
          <div :class="$style['guide__block']">
            <div :class="$style['guide__title']">
              증명서/증빙서류<br />
              발급
            </div>
            <div :class="$style['guide__img']">
              <img src="@/assets/images/contents/guide-003.png" alt="" />
            </div>
          </div>
        </li>
        <li :class="$style['guide__item']">
          <div :class="$style['guide__block']">
            <div :class="$style['guide__title']">
              다양한 혜택<br />
              (멤버십/이벤트)과<br />
              콘텐츠(FUN) 제공
            </div>
            <div :class="$style['guide__img']">
              <img src="@/assets/images/contents/guide-004.png" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/redirect/Common_P00_p012.scss';
</style>
