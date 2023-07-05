<script>
// AF_P07_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckObject,
    BoxCheckLabel,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
    };
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '오토승계',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">오토승계</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        승계 신청을 동의할 차량을 선택해주세요
      </PageMainText>
      <PageSubText align="left">
        승계 신청 철회를 원하시는 경우, 체크박스를 해제해 주세요.
      </PageSubText>
    </PageHead>

    <!-- Case : 승계 가능한 차량이 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        승계 가능한 차량이 없습니다.<br />
        양도인에게 승계 동의를 요청해 주세요.
      </p>
    </div>
    <!-- // Case : 승계 가능한 차량이 없을 경우 -->

    <!-- Case : 승계 가능한 차량이 있을 경우 -->
    <BoxCheckList align="full">
      <BoxCheckListItem>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="AF_P07_p003_list001"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>오토리스 111가 1111</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>

      <BoxCheckListItem>
        <BoxCheck :contents="true" type="checkbox" id="AF_P07_p003_list002">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>오토리스 222나2222</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>

      <BoxCheckListItem>
        <BoxCheck :contents="true" type="checkbox" id="AF_P07_p003_list003">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>오토리스 333다3333</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>

      <BoxCheckListItem>
        <BoxCheck :contents="true" type="checkbox" id="AF_P07_p003_list004">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>오토리스 11라4444</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>
    <!-- // Case : 승계 가능한 차량이 있을 경우 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p003.scss';
</style>
