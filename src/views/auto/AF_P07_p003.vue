<script>
// AF_P07_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
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

    <ButtonList>
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p003.scss';
</style>
