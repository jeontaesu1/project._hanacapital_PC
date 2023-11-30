<script>
// Customer_P20_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer009');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '판매원조회',
            to: '/',
          },
          {
            text: '방문 · 전화권유판매원 조회',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>방문 · 전화권유판매원 조회</PageTitle>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          방문 · 전화권유판매원의 신원을 확인할 수 있는 서비스입니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          해당 방문 · 전화권유판매원이 안내해드린 아래 메뉴 중 하나를 선택하여
          확인하실 수 있습니다.
        </div>
      </li>
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          문의사항이 있는 경우 당사 손님상담센터(1800-1110)에 연락바랍니다.
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small">
      <section>
        <h3 class="text-title-1 row-margin-contents">
          당사의 임직원
          <span class="font-weight-light">(대출성 상품, 하나카드)</span>
        </h3>

        <div :class="$style['logs-wrap']">
          <ul :class="$style['logs']">
            <li :class="$style['logs__item']">
              <div
                :class="[
                  $style['logs__block'],
                  $style['logs__block--secondary'],
                ]"
              >
                <div :class="$style['logs__row']">
                  <div :class="$style['logs__contents']">
                    <h3 :class="[$style['logs__title'], 'text-body-1']">
                      하나캐피탈 임직원 조회
                    </h3>
                  </div>
                  <div :class="$style['logs__right']">
                    <RouterLink to="" :class="$style['logs__link']">
                      <span :class="$style['logs__link-text']">상세보기</span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          당사와 위탁계약 체결한 금융상품판매대리 · 중개업자
          <span class="font-weight-light">(대출성 상품)</span>
        </h3>

        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <div :class="[$style['logs__title'], 'text-body-1']">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        대출모집법인소속 임직원 조회
                      </div>
                      <div
                        class="flex-box__cell flex-box__cell--mini align-self-start color-gray-tertiary"
                      >
                        <span class="flex-box text-caption-1 align-self-start"
                          >1)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink to="" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">
                    하나캐피탈 전화권유 판매원 조회
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink to="" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <div :class="[$style['logs__title'], 'text-body-1']">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        금융상품판매대리 · 중개업자 조회 바로가기
                      </div>
                      <div
                        class="flex-box__cell flex-box__cell--mini align-self-start color-gray-tertiary"
                      >
                        <span class="flex-box text-caption-1 align-self-start">
                          2)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink to="" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--regular-margin'],
            'row-margin-contents-small',
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'font-weight-light',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1)</div>
            <div :class="$style['basic-list__content']">
              당사와 위탁계약을 체결한 대출모집법인 (대출성 상품 :
              대출∙리스∙할부 등)의 임직원을 조회하실 수 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'font-weight-light',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2)</div>
            <div :class="$style['basic-list__content']">
              당사와 위탁계약을 체결하고, 금융소비자 보호법에 따라 등록한
              금융상품판매대리·중개업자(대출성 상품 : 대출∙리스∙할부 등)를
              조회하실 수 있습니다.
            </div>
          </li>
        </ol>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P20_p001.scss';
</style>
