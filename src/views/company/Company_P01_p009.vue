<script>
// Company_P01_p009
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
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
            text: '회사소개',
            to: '/',
          },
          {
            text: '하나금융그룹',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>하나금융그룹</PageTitle>
    </PageHead>

    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Company_P01_p009_001">비전과 미션</NavTabButton>
        <NavTabButton link="Company_P01_p009_002">핵심가치</NavTabButton>
        <NavTabButton link="Company_P01_p009_003">관계사</NavTabButton>
      </NavTab>

      <!-- 비전과 미션 -->
      <UiTabPanel name="Company_P01_p009_001">
        <div :class="$style['image-view']">
          <img
            src="@/assets/images/_dummy/box-detail-wide-full.png"
            alt="샘플 이미지"
          />
        </div>
      </UiTabPanel>
      <!-- // 비전과 미션 -->

      <!-- 핵심가치 -->
      <UiTabPanel name="Company_P01_p009_002">
        <section>
          <h3 class="text-big-1 row-margin-contents-group">
            <span class="color-green">POWER</span> on Integrity
          </h3>
          <p class="text-title-2">
            하나금융그룹은 하나인만의 생각하는 방식, 창조적이고 강력한
            기업문화를 가지고 있습니다.<br />
            하나인들이 공유하고 실천하는 핵심가치는 기업 활동에 있어서
            가치판단과 행동의 기준이 되는 가장 소중한 무형자산입니다.
          </p>

          <div :class="[$style['image-view'], 'row-margin-block-small']">
            <img
              src="@/assets/images/_dummy/box-detail-wide-full.png"
              alt="샘플 이미지"
            />
          </div>
        </section>
      </UiTabPanel>
      <!-- // 핵심가치 -->

      <!-- 관계사 -->
      <UiTabPanel name="Company_P01_p009_003">
        <div :class="$style['image-view']">
          <img
            src="@/assets/images/_dummy/box-detail-wide-full.png"
            alt="샘플 이미지"
          />
        </div>
      </UiTabPanel>
      <!-- // 관계사 -->
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p009.scss';
</style>
