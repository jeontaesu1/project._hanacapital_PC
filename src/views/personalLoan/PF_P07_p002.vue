<script>
// PF_P07_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>상품안내</PageTitle>
    </PageHead>

    <UiTab :classNames="{ wrap: 'flex-none' }">
      <NavTab :useUiTab="true">
        <NavTabButton link="PF_P07_p002_tab001"
          >NH투자증권 일반 신규/추가</NavTabButton
        >
        <NavTabButton link="PF_P07_p002_tab002"
          >2018년 이전 상품 한도추가</NavTabButton
        >
      </NavTab>

      <!-- Tab : NH투자증권 일반 신규/추가 -->
      <UiTabPanel name="PF_P07_p002_tab001">
        <section>
          <h3>증권사</h3>
        </section>

        <ButtonList>
          <ButtonListItem>
            <BasicButton theme="tertiary">신규대출</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>추가대출</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </UiTabPanel>
      <!-- // Tab : NH투자증권 일반 신규/추가 -->
    </UiTab>
  </PageContents>
</template>
