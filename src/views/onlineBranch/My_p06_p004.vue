<script>
// My_p06_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    NoticeText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>청약철회 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        금일 17시 이내로 상환금액을 입금해주시면<br />
        청약철회 후 문자로 안내 드리겠습니다.<br />
        감사합니다.
      </IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <NoticeText
      :classNames="{
        wrap: 'row-margin-block',
      }"
    >
      당일 철회완료 문자를 받지 못하셨거나 기타 문의는 고객센터(1800-1110)로
      연락바랍니다.<br />
      (상담가능시간 : 평일 09~18시)
    </NoticeText>
  </PageContents>
</template>
