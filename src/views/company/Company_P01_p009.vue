<script>
// Company_P01_p009
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
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
    <PageHead>
      <PageTitle>하나금융그룹</PageTitle>
    </PageHead>

    <UiTab v-slot="tabSlotProps">
      <NavTab :useUiTab="true">
        <NavTabButton link="Company_P01_p009001_001">비전과 미션</NavTabButton>
        <NavTabButton link="Company_P01_p009001_002">핵심가치</NavTabButton>
        <NavTabButton link="Company_P01_p009001_003">관계사</NavTabButton>
      </NavTab>

      <p>Active : {{ tabSlotProps.activeName }}</p>

      <UiTabPanel name="Company_P01_p009001_001">
        <div :class="$style['image-view']">
          <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
        </div>
      </UiTabPanel>

      <UiTabPanel name="Company_P01_p009001_002">// Tab 2 Contents</UiTabPanel>

      <UiTabPanel name="Company_P01_p009001_003">// Tab 3 Contents</UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/hanaMoney/MI_P02_p001.scss';
</style>
