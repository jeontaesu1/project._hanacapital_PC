<script>
// Main_P01_l002
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <PageContents size="default-small">
    <PageHead :classNames="{ wrap: 'row-margin-container' }">
      <PageTitle
        align="left"
        :classNames="{ wrap: 'text-big-3 row-margin-item' }"
        >지원 브라우저 안내</PageTitle
      >
      <PageSubText
        align="left"
        :classNames="{
          wrap: 'text-body-1 color-gray-secondary font-weight-regular',
        }"
        >지원 브라우저에 대해 안내 드립니다.</PageSubText
      >
    </PageHead>

    <div>
      <div :class="$style['title-box']">
        <div :class="$style['title-box__list']"></div>
        <div :class="$style['title-box__text']">지원 브라우저</div>
      </div>

      <div :class="$style['browser-box']">
        <ul :class="$style['browser-box__list']">
          <li :class="$style['browser-box__item']">
            <div :class="$style['browser-box__icon']">
              <img
                src="@/assets/images/contents/chrome.png"
                alt=""
                class="display-block"
              />
            </div>
            <p :class="$style['browser-box__text']">Chrome (크롬)</p>
          </li>
          <li :class="$style['browser-box__item']">
            <div :class="$style['browser-box__icon']">
              <img
                src="@/assets/images/contents/whale.png"
                alt=""
                class="display-block"
              />
            </div>
            <p :class="$style['browser-box__text']">Whale (웨일)</p>
          </li>
          <li :class="$style['browser-box__item']">
            <div :class="$style['browser-box__icon']">
              <img
                src="@/assets/images/contents/edge.png"
                alt=""
                class="display-block"
              />
            </div>
            <p :class="$style['browser-box__text']">MS Edge (엣지)</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="row-margin-contents-group">
      <div class="flex-box">
        <div class="flex-box__cell">
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-item',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'font-weight-regular',
                'color-gray-secondary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                마이크로소프트 사의 IE(Internet Explorer) 브라우저는<br />
                2022년 6월 15일 지원 종료 예정입니다. <br />
                IE에서 웹 시스템을 이용할 경우,
                <span class="color-red">일부 기능이 동작하지 않을 수도</span>
                있습니다.
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-box__cell flex-box__cell--regular">
          <div :class="$style['browser-icon']">
            <img
              src="@/assets/images/contents/micro.png"
              alt=""
              class="display-block"
            />
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_P01_l003.scss';
</style>
