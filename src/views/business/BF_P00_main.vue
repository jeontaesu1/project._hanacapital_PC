<script>
// BF_P00_main

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    BasicBox,
    ImgMainSample,
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

    <ul class="reset-list flex-box">
      <li class="flex-box__cell flex-1 flex-box__cell--large">
        <BasicBox theme="quaternary">
          <div :class="$style['icon-box']">
            <div
              :class="[
                $style['icon-box__icon'],
                $style['icon-box__icon--large'],
              ]"
            >
              <ImgMainSample />
            </div>
            <p
              :class="[
                $style['icon-box__content'],
                'text-big-3',
                'row-margin-item',
                'font-weight-bold',
              ]"
            >
              의료기할부
            </p>
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-1 flex-box__cell--large">
        <BasicBox theme="quinary">
          <div :class="$style['icon-box']">
            <div
              :class="[
                $style['icon-box__icon'],
                $style['icon-box__icon--large'],
              ]"
            >
              <ImgMainSample />
            </div>
            <p
              :class="[
                $style['icon-box__content'],
                'text-big-3',
                'row-margin-item',
                'font-weight-bold',
              ]"
            >
              의료기할부
            </p>
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-1 flex-box__cell--large">
        <BasicBox theme="senary">
          <div :class="$style['icon-box']">
            <div
              :class="[
                $style['icon-box__icon'],
                $style['icon-box__icon--large'],
              ]"
            >
              <ImgMainSample />
            </div>
            <p
              :class="[
                $style['icon-box__content'],
                'text-big-3',
                'row-margin-item',
                'font-weight-bold',
              ]"
            >
              의료기할부
            </p>
          </div>
        </BasicBox>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/BF_P00_main.scss';
</style>
