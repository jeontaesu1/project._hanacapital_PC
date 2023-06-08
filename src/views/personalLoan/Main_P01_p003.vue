<script>
// Main_P01_p003
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
      <PageTitle>신속하면서 믿을 수 있는 개인금융!</PageTitle>
      <PageSubText>
        넉넉한 한도와 합리적인 금리<br />
        하나캐피탈의 개인금융 상품을 만나보세요!
      </PageSubText>
    </PageHead>

    <div :class="[$style['main-card-list'], $style['main-card-list--col-4']]">
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
                  e하나신용대출
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
                  빠르고 간편한<br />인터넷 전용대출
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
                  행복아파트론
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
                  아파트를 소유자를<br />
                  대상으로 하는 신용대출
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
                  아파트론
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
                  아파트를 소유자를<br />
                  대상으로 하는 신용대출
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
                  원큐자동차담보대출
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
                  소유하고 있는 차량으로 <br />담보 대출
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
                  우수고객추가대출
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
                  우수고객에게 <br />추가 자금 지원
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
                  스탁론
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
                  주식매입<br />자금 지원
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
                  내구소비재할부
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
                  생활에 꼭 필요한 소비재도<br />이젠 할부로!
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
                  e임대주택론
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
                  임대보증금을 <br />담보로 가능한 대출
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
@import '@/assets/scss/views/personalLoan/Main_P01_p003.scss';
</style>
