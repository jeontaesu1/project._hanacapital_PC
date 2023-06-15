<script>
// Company_P01_p001
import { RouterLink } from 'vue-router';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    RouterLink,
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>회사소개</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        모두의 기쁨 그 하나를 위하여 하나캐피탈은 오늘도 한걸음 더 뛰겠습니다!
      </PageSubText>
    </PageHead>

    <div :class="$style['image-view']">
      <img
        src="@/assets/images/_dummy/box-detail-large-short.png"
        alt="샘플 이미지"
      />
    </div>

    <div class="flex-box row-margin-block-small">
      <div class="flex-box__cell flex-1">
        <div :class="$style['logs']">
          <div :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">
                    CEO 소개
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink
                    to="/company/Company_P01_p002"
                    :class="$style['logs__link']"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-box__cell flex-box__cell--large flex-1">
        <div :class="$style['logs']">
          <div :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">
                    사업분야
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink
                    to="/company/Company_P01_p004"
                    :class="$style['logs__link']"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-box__cell flex-box__cell--large flex-1">
        <div :class="$style['logs']">
          <div :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">PR</h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink
                    to="/company/Company_P03_p001"
                    :class="$style['logs__link']"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-box__cell flex-box__cell--large flex-1">
        <div :class="$style['logs']">
          <div :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">
                    하나금융그룹
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink
                    to="/company/Company_P01_p009"
                    :class="$style['logs__link']"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p001.scss';
</style>
