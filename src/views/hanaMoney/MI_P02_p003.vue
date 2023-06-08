<script>
// MI_P02_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>하나머니 회원가입이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        포인트를 현금처럼 사용하는 하나머니!<br />
        하나머니 앱을 설치하셔서 더 많은 혜택을 누려보세요!
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
