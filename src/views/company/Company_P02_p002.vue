<script>
// Company_P02_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageMainText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>윤리강령</PageTitle>
      <PageMainText
        :classNames="{
          wrap: 'font-weight-regular text-title-2',
        }"
      >
        함께 성장하며 행복을 나누는 금융을 실현하기 위해 윤리적 가치를
        최우선으로 합니다.
      </PageMainText>
    </PageHead>

    <div :class="[$style['bg'], 'align-center']">
      <h3 class="text-big-3 row-margin-small">
        이 모든 질문에 "예"라고 답할 수 있으면 행하십시오.
      </h3>

      <p class="text-title-2 font-weight-light color-gray-secondary">
        스스로 판단하기 어려운 사항은<br />
        윤리 또는 준법담당 부서에 의견을 물을 수 있습니다.
      </p>
    </div>

    <section class="row-margin-block">
      <h3 class="text-big-3 row-margin-contents">제 1장 임직원의 자세</h3>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">사명감</div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                상호존중 및 차별금지
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">공·사 구분</div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">법규준수</div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p002.scss';
</style>
