<script>
// Company_P01_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

import IconPersonal from '@/assets/images/icon/personal-finance.svg?component';
import IconAuto from '@/assets/images/icon/car-check.svg?component';
import IconCorporate from '@/assets/images/icon/corporate-finance.svg?component';
import IconGlobal from '@/assets/images/icon/global-finance.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,

    IconPersonal,
    IconAuto,
    IconCorporate,
    IconGlobal,
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
            text: '회사소개',
            to: '/',
          },
          {
            text: '사업분야',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>사업분야</PageTitle>
      <PageSubText>
        하나캐피탈은 리스금융, 할부금융 및 대출업무를 취급하는
        여신전문금융회사로<br />
        손님, 주주, 협력업체, 임직원의 공동 성장을 극대화하는 Value Network를
        지향합니다.
      </PageSubText>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-4']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--nonary'],
            ]"
          >
            <div :class="$style['product-list__icon']">
              <IconPersonal />
            </div>
            <h3 class="text-title-2">하나의 행복! 개인금융</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item">
              손님의 Value Network Partner로서<br />
              하나캐피탈이 있습니다. <br />
              전문직 종사자, 직장인, 공무원, 교사 등<br />
              개인손님을 대상으로 한 신용대출, 스탁론,<br />
              내구재할부 등 <br />
              개인대출을 신속하게 제공해드립니다.
            </p>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--nonary'],
            ]"
          >
            <div :class="$style['product-list__icon']">
              <IconAuto />
            </div>
            <h3 class="text-title-2">하나의 젊음! 오토금융</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item">
              수입차 구입이 부담스러우신가요?<br />
              지금 타시는 차를 부담없이<br />
              바꾸고 싶으신가요?<br />
              저희 하나캐피탈은 수입/국산차<br />
              오토리스, 오토 할부 및 오토론,<br />
              렌터카를 손님이 원하시는 차종으로, 원하시는 금액으로<br />
              “새로운 가치”를 제공해드립니다.
            </p>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--nonary'],
            ]"
          >
            <div :class="$style['product-list__icon']">
              <IconCorporate />
            </div>
            <h3 class="text-title-2">하나의 만족! 기업금융</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item">
              기업대출, 대체투자, 의료기 리스 등 하나캐피탈의 금융전문가가<br />
              상담해 드립니다.<br />
              기업 재무상태와 담보 종류에<br />
              맞춘 대출을 통해 하나캐피탈<br />
              기업금융이 여러분의<br />
              성공비지니스를 지원합니다.
            </p>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--nonary'],
            ]"
          >
            <div :class="$style['product-list__icon']">
              <IconGlobal />
            </div>
            <h3 class="text-title-2">하나의 드림! 글로벌금융</h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item">
              하나캐피탈은 국내를 넘어<br />
              글로벌 손님과 함께 성장하며 행복을 나누고자 동남아시아 중심으로<br />
              글로벌 진출을 하고 있습니다.<br />
              글로벌 리딩 캐피탈사로 성장하기<br />
              위해 지역별 최적화된 금융상품 및<br />
              서비스를 제공할 수 있도록<br />
              최선을 다하고 있습니다.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">글로벌금융 서비스</h3>
      <ul class="reset-list flex-box">
        <li class="flex-box__cell flex-1">
          <div :class="$style['nation']">
            <div :class="$style['nation__contents']">
              <div :class="$style['nation__sub']">SINARMAS HANA FINANCE</div>
              <div :class="$style['nation__title']">인도네시아</div>
            </div>
            <div
              :class="[$style['nation__icon'], $style['nation__icon--001']]"
            ></div>
          </div>
        </li>
        <li class="flex-box__cell flex-box__cell--large flex-1">
          <div :class="$style['nation']">
            <div :class="$style['nation__contents']">
              <div :class="$style['nation__sub']">HANA MICRO FINANCE</div>
              <div :class="$style['nation__title']">미얀마</div>
            </div>
            <div
              :class="[$style['nation__icon'], $style['nation__icon--002']]"
            ></div>
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p004.scss';
</style>
