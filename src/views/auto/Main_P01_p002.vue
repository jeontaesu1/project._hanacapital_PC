<script>
// Main_P01_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageSubText,
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
      <PageTitle>다이렉트 오토금융</PageTitle>
      <PageSubText>
        지금 바로 하나캐피탈이 제공하는 오토금융을 이용하시고,<br />
        최고의 만족을 누리세요.
      </PageSubText>
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
                  오토론
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
                  저렴한 금리,<br />간편한 이용
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
                  다이렉트<br />장기렌터카
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
                  비용 NO! 보험 NO! <br />내차 OK!
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
                  다이렉트 <br />오토리스
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
                  다양한 혜택, <br />편리한 내차 이용
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
                  중고차 오토론
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
                  차별화된 <br />중고차 구입 방법!
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
                  오토할부
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
                  차량 대금 <br />분할 납부!
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
@import '@/assets/scss/views/auto/Main_P01_p002.scss';
</style>
