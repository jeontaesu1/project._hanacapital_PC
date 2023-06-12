<script>
// Main_P01_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageSubText,
    PageTitle,
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

    <div :class="[$style['product-list'], $style['product-list--col-4']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">e하나신용대출</h3>
            <p :class="$style['product-list__text']">
              빠르고 간편한<br />
              인터넷 전용대출
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">행복아파트론</h3>
            <p :class="$style['product-list__text']">
              아파트를 소유자를<br />
              대상으로 하는 신용대출
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">아파트론</h3>
            <p :class="$style['product-list__text']">
              아파트를 소유자를<br />
              대상으로 하는 신용대출
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">원큐자동차담보대출</h3>
            <p :class="$style['product-list__text']">
              소유하고 있는 차량으로<br />
              담보 대출
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">우수고객추가대출</h3>
            <p :class="$style['product-list__text']">
              우수고객에게<br />
              추가 자금 지원
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">스탁론</h3>
            <p :class="$style['product-list__text']">
              주식매입<br />
              자금 지원
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">내구소비재할부</h3>
            <p :class="$style['product-list__text']">
              생활에 꼭 필요한 소비재도<br />
              이젠 할부로!
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
              <ImgMainSample />
            </div>
            <h3 :class="$style['product-list__title']">e임대주택론</h3>
            <p :class="$style['product-list__text']">
              임대보증금을<br />
              담보로 가능한 대출
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
@import '@/assets/scss/views/personalLoan/Main_P01_p003.scss';
</style>
