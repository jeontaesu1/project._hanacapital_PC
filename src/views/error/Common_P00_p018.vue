<script>
// Common_P00_p018
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle>원하시는 페이지를 찾을 수 없습니다</IllustInfoTitle>
      <IllustInfoText>
        찾으려는 페이지의 주소가 잘못 입력되었거나,<br />
        주소의 변경 혹은 삭제로 사용하실 수 없습니다.<br />
        입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요.
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>홈으로 이동</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
