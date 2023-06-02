<script>
// MI_P03_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle>
          하나캐피탈 멤버십 회원탈퇴를 위해<br />
          본인확인이 필요합니다
        </PageTitle>
      </PageHeadRow>
    </PageHead>

    // [공통 > 본인인증] 내용 노출

    <ButtonList>
      <ButtonListItem>
        <BasicButton>하나캐피탈 멤버십 탈퇴하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
