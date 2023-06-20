<script>
// Customer_P16_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
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
      <PageTitle>
        그룹사간 고객정보 제공내역 조회를 위해<br />
        본인인증이 필요합니다
      </PageTitle>
      <PageMainText
        align="center"
        :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
      >
        증금융지주사법 제48조의 2에 따라 하나금융그룹 내 관계사에 고객정보가
        제공되는 현황을 조회할 수 있습니다.
      </PageMainText>
    </PageHead>

    <div>// [공통 > 본인인증] 내용 노출</div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
