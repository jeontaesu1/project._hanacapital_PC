<script>
// AF_P07_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
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
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        실명인증 및 본인인증을 진행해 주세요
      </PageMainText>
    </PageHead>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
