<script>
// Partner_P00_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    TextButton,

    ImgMainSample,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>제휴광장</PageTitle>
    </PageHead>

    <div :class="$style['main-card-list']">
      <ul :class="$style['main-card-list__list']">
        <li :class="$style['main-card-list__item']">
          <BasicBox theme="quinary">
            <div :class="$style['icon-box']">
              <div
                :class="[
                  $style['icon-box__icon'],
                  $style['icon-box__icon--large'],
                  'row-margin-item-group',
                ]"
              >
                <ImgMainSample />
              </div>
              <dl class="reset-list">
                <dt
                  :class="[
                    $style['icon-box__content'],
                    'text-big-3',
                    'font-weight-bold',
                  ]"
                >
                  재고금융
                </dt>
                <dd
                  :class="[
                    $style['icon-box__content'],
                    'text-body-1',
                    'row-margin-item',
                    'font-weight-regular',
                    'color-gray-secondary',
                  ]"
                >
                  하나캐피탈 재고금융 협약한<br />
                  매매상사전용 페이지입니다.
                </dd>
              </dl>
              <div class="row-margin-contents-small">
                <TextButton
                  theme="secondary"
                  :underline="true"
                  class="text-body-3"
                  >자세히보기</TextButton
                >
              </div>
            </div>
          </BasicBox>
        </li>
        <li :class="$style['main-card-list__item']">
          <BasicBox theme="quinary">
            <div :class="$style['icon-box']">
              <div
                :class="[
                  $style['icon-box__icon'],
                  $style['icon-box__icon--large'],
                  'row-margin-item-group',
                ]"
              >
                <ImgMainSample />
              </div>
              <dl class="reset-list">
                <dt
                  :class="[
                    $style['icon-box__content'],
                    'text-big-3',
                    'font-weight-bold',
                  ]"
                >
                  대출상담사
                </dt>
                <dd
                  :class="[
                    $style['icon-box__content'],
                    'text-body-1',
                    'row-margin-item',
                    'font-weight-regular',
                    'color-gray-secondary',
                  ]"
                >
                  하나캐피탈 대출상담사<br />전용 페이지로 이동합니다.
                </dd>
              </dl>
              <div class="row-margin-contents-small">
                <TextButton
                  theme="secondary"
                  :underline="true"
                  class="text-body-3"
                  >자세히보기</TextButton
                >
              </div>
            </div>
          </BasicBox>
        </li>
        <li :class="$style['main-card-list__item']">
          <BasicBox theme="quinary">
            <div :class="$style['icon-box']">
              <div
                :class="[
                  $style['icon-box__icon'],
                  $style['icon-box__icon--large'],
                  'row-margin-item-group',
                ]"
              >
                <ImgMainSample />
              </div>
              <dl class="reset-list">
                <dt
                  :class="[
                    $style['icon-box__content'],
                    'text-big-3',
                    'font-weight-bold',
                  ]"
                >
                  에이전트
                </dt>
                <dd
                  :class="[
                    $style['icon-box__content'],
                    'text-body-1',
                    'row-margin-item',
                    'font-weight-regular',
                    'color-gray-secondary',
                  ]"
                >
                  AG 및 판매점<br />전용 페이지로 이동합니다.
                </dd>
              </dl>
              <div class="row-margin-contents-small">
                <TextButton
                  theme="secondary"
                  :underline="true"
                  class="text-body-3"
                  >자세히보기</TextButton
                >
              </div>
            </div>
          </BasicBox>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/affiliatePlaza/Partner_P00_p001.scss';
</style>
