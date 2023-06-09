<script>
// Common_P00_p012
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconAppStore from '@/assets/images/icon/appstore.svg?component';
import IconGooglePlay from '@/assets/images/icon/playstore.svg?component';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicBox,

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
      <IllustInfoText
        >하나캐피탈 앱을 설치하면<br /><span class="color-green">
          대출 이어하기, 대출 관리 등 하나캐피탈의 모든 서비스를 이용 </span
        >하실 수 있어요.</IllustInfoText
      >
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
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconAppStore /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">App Store</span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconGooglePlay /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">Google Play</span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <ul class="reset-list flex-box row-margin-block">
      <li class="flex-box__cell flex-1">
        <BasicBox theme="tertiary">
          <p class="text-title-1 font-weight-medium">
            한 눈에 보는<br />계약관리
          </p>
          <div>
            <img
              src="@/assets/images/contents/img_installation01.png"
              alt="계약관리 진행 화면 캡쳐 이미지"
            />
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-1">
        <BasicBox theme="tertiary">
          <p class="text-title-1 font-weight-medium">
            간편한<br />
            한도조회
          </p>
          <div>
            <img
              src="@/assets/images/contents/img_installation02.png"
              alt="간편한 한도조회 화면 캡쳐 이미지"
            />
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-1">
        <BasicBox theme="tertiary">
          <p class="text-title-1 font-weight-medium">
            증명서/증빙서류<br />
            발급
          </p>
          <div>
            <img
              src="@/assets/images/contents/img_installation03.png"
              alt="결제예정금액 발급받는 화면 캡쳐 이미지 "
            />
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-1">
        <BasicBox theme="tertiary">
          <p class="text-title-1 font-weight-medium">
            다양한 혜택<br />
            (멤버십/이벤트)과<br />
            콘텐츠(FUN) 제공
          </p>
          <div>
            <img
              src="@/assets/images/contents/img_installation04.png"
              alt="미정 "
            />
          </div>
        </BasicBox>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/redirect/Common_P00_p012.scss';
</style>
