<script>
// MI_P00_p012
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    BasicBox,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>중도상환신청이 완료되었습니다</IllustInfoTitle>
    </IllustInfo>

    <section>
      <BasicBox>// contnets</BasicBox>
    </section>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">신청내역</h3>

      <BasicBox>// contnets</BasicBox>
    </section>

    <section>
      <h3 class="text-title-1 row-margin-contents">
        중도상환금액<span class="text-body-1 font-weight-regular"
          >(결제하실 금액)</span
        >
      </h3>

      <BasicBox>// contnets</BasicBox>
    </section>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
