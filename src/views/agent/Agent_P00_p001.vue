<script>
// Agent_P00_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle>
        죄송합니다<br />
        페이지 오류가 발생했습니다
      </IllustInfoTitle>
      <IllustInfoText>MCI.RQS.ERROR.0000000</IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">홈으로</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
