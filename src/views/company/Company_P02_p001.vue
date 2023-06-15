<script>
// Company_P02_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>
        함께 성장하며 행복을 나누는 금융을<br />
        실현하기 위해 <span class="color-green">윤리적 가치를 최우선</span>으로
        합니다
      </PageTitle>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-3']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--septenary'],
            ]"
          >
            <h3
              :class="[
                $style['product-list__title'],
                'text-title-2',
                'row-margin-item',
              ]"
            >
              하나인은
            </h3>
            <p
              :class="[
                $style['product-list__text'],
                'text-body-3',
                'color-black',
                'font-weight-light',
              ]"
            >
              도덕성과 책임감을 바탕으로<br />
              함께 성장하며 행복을 나누는<br />
              금융을 실현하기 위해<br />
              윤리적 가치를 최우선으로 한다.
            </p>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--septenary'],
            ]"
          >
            <h3
              :class="[
                $style['product-list__title'],
                'text-title-2',
                'row-margin-item',
              ]"
            >
              하나인은
            </h3>
            <p
              :class="[
                $style['product-list__text'],
                'text-body-3',
                'color-black',
                'font-weight-light',
              ]"
            >
              원칙과 법규를 준수하고<br />
              공과 사를 명확히 구분하며<br />
              손님을 포함한 모든 이해관계자를<br />
              상호존중의 정신으로 대하고<br />
              서로 협력한다.
            </p>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div
            :class="[
              $style['product-list__block'],
              $style['product-list__block--septenary'],
            ]"
          >
            <h3
              :class="[
                $style['product-list__title'],
                'text-title-2',
                'row-margin-item',
              ]"
            >
              하나인은
            </h3>
            <p
              :class="[
                $style['product-list__text'],
                'text-body-3',
                'color-black',
                'font-weight-light',
              ]"
            >
              “내가 회사를 대표한다”는 생각으로 행동하며<br />
              성숙한 시민으로서의 소임을 다해<br />
              구성원, 손님 및 사회로부터 신뢰받는<br />
              하나금융그룹을 만드는 책임을 다한다.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p001.scss';
</style>
