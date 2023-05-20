<script>
// Member_P05_p005
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
      <IllustObject type="complete" />
      <IllustInfoTitle>홈페이지 회원가입이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        홈페이지 로그인 후 내 계약현황 및 다양한 상품정보를<br />
        편리하게 확인해 보세요.
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">로그인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
