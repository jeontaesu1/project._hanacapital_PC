<script>
// MI_P00_p003
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
import BasicBox from '@/components/ui/common/BasicBox.vue';

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
    BasicBox,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>자동이체 계좌 변경</PageTitle>
    </PageHead>

    <section>
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            결제계좌 변경 시 각 은행의 계좌 승인 작업으로 인해 1~3 영업일 소요
            후 변경됩니다.<br />
            (단, 하나은행의 경우 실시간 승인 작업으로 즉시 변경됩니다.)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            스탁론은 변경이 불가하며 고객센터(1800-1110)로 연락 바랍니다.
          </div>
        </li>
      </ul>

      <ul class="reset-list row-margin-block-small">
        <li class="row-margin-contents">
          <BasicBox>// contnets</BasicBox>
        </li>
        <li class="row-margin-contents">
          <BasicBox>// contnets</BasicBox>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p003.scss';
</style>
