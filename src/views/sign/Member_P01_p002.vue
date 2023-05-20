<script>
// Member_P01_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
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
    TextButton,
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
        3개월 동안 비밀번호를 변경하지 않으셨습니다
      </IllustInfoTitle>
      <IllustInfoText>
        개인정보를 보호하기 위해서는<br />
        주기적으로 비밀번호를 변경하는 것을 추천 드립니다.
      </IllustInfoText>
    </IllustInfo>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">다음에</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">지금 변경하기</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div class="inline-wrap align-center row-margin-container">
      <TextButton
        :underline="true"
        :classNames="{
          wrap: 'color-gray-tertiary',
        }"
      >
        2주간 보지 않기
      </TextButton>
    </div>
  </PageContents>
</template>
