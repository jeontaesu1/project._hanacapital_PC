<script>
// My_P08_p016
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

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
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>만기후 반환 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>하나캐피탈을 이용해 주셔서 감사합니다.</IllustInfoText>
    </IllustInfo>

    <BasicBox className="row-margin-block-small">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-title-2 font-weight-medium">오토리스 07호3994</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>렌트기간</KeyValueTitle>
          <KeyValueText>2018.10.29~2021.10.29</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>휴대폰번호</KeyValueTitle>
          <KeyValueText>010-1234-5678</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>반환일자</KeyValueTitle>
          <KeyValueText>2021.10.29</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>반환요청시간</KeyValueTitle>
          <KeyValueText>13시 30분</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>반환담당자</KeyValueTitle>
          <KeyValueText>김하나</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>반환요청장소</KeyValueTitle>
          <KeyValueText>
            서울특별시 강남구 역삼동 1 하나금융그룹 강남사옥 1층
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
