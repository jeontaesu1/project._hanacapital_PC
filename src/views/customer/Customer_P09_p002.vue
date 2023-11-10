<script>
// Customer_P09_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
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
            text: '고객센터',
            to: '/',
          },
          {
            text: '금융소비자보호',
          },
          {
            text: '금융소비자보호조직',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>금융소비자보호조직</PageTitle>
    </PageHead>

    <div :class="$style['section-group']">
      <div :class="$style['section-group__list']">
        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              소비자보호책임자
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              금융소비자보호에 관한 의사결정이 전사적 시각에서<br />
              효율적으로 이루어지도록 소비자보호제반 업무를 총괄하는<br />
              독립적 지위의 소비자보호책임자를 지정하여 운영하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              소비자보호협의회
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              금융소비자보호 관련 이슈를 종합적인 시각에서 신속하고 효과적으로
              조정하기 위하여<br />
              소비자보호책임자가 주관하여 운영하고<br />
              관련 임원 및 부서장이 참여하는 금융소비자보호협의회를 설치
              운영하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              민원심의위원회
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              접수한 민원에 대하여 공정한 처리 및 합리적 보상을 위하여<br />
              자체적으로 정한 기준에 따라<br />
              민원심의위원회를 설치 운영하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              소비자보호 총괄부서
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              책임과 권한을 가지고<br />
              금융소비자보호업무를 수행할 소비자보호 총괄부서를<br />
              설치 운영하고 있습니다.
            </p>
          </BasicBox>
        </section>
      </div>
    </div>

    <div :class="[$style['logs-wrap'], 'row-margin-block-small']">
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호조직
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호체계
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호웹진
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호공시
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금리인하요구권 안내
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  대출계약철회권 안내
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
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  중도상환수수료 면제
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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p002.scss';
</style>
