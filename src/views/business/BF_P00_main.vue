<script>
// BF_P00_main
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconMedical from '@/assets/images/icon/medical.svg?component';
import IconGeHealthcare from '@/assets/images/icon/ge-healthcare.svg?component';
import IconIndustrial from '@/assets/images/icon/industrial.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    TextButton,
    IconMedical,
    IconGeHealthcare,
    IconIndustrial,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageHeadRow>
        <PageTitle> 기업을 위한 최적의 자금 대출! </PageTitle>
        <PageMainText
          align="center"
          :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
        >
          기업 재무상태와 담보 종류에 맞춘 대출이 가능합니다.<br />
          하나캐피탈 기업금융이 여러분의 성공비지니스를 지원해드립니다.
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
            <h3 :class="$style['product-list__title']">의료기할부</h3>
            <p :class="$style['product-list__text']">
              병/의원 및 의료법인대상<br />
              의료기기, 의료소모품 구입자금 대출
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
              <IconGeHealthcare />
            </div>
            <h3 :class="$style['product-list__title']">의료기리스</h3>
            <p :class="$style['product-list__text']">
              의료장비, 의료기관 전용<br />
              금융리스
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
              <IconIndustrial />
            </div>
            <h3 :class="$style['product-list__title']">산업재리스</h3>
            <p :class="$style['product-list__text']">
              각종 시설, 기계 등<br />
              산업설비 전문 리스
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
