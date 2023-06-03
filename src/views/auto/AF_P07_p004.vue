<script>
// AF_P07_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    BoxCheck,
    BoxCheckObject,
    BoxCheckLabel,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BoxCheckList,
    BoxCheckListItem,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>승계 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        승계 신청 URL을 발송하고 싶으시면, 아래 승계 동의 된 차량을 선택한 후<br />
        ‘승계 신청URL 전송“ 버튼을 선택해주세요.
      </IllustInfoText>
    </IllustInfo>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">승계 신청 대상 차량</h3>

      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list001">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 111가 1111</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list002">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 222나2222</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list003">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 333다3333</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck :contents="true" type="checkbox" id="AF_P07_p004_list004">
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 11라4444</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton theme="tertiary">승계 신청 URL 전송</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
