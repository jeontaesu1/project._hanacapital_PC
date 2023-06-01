<script>
// AF_P07_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    BasicBox,
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
      <IllustInfoTitle>승계 신청 URL 발송이 완료되었습니다</IllustInfoTitle>
    </IllustInfo>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">승계 신청 대상 차량</h3>

      <BasicBox theme="tertiary">
        <ul class="reset-list">
          <li
            v-for="i in 4"
            :key="i"
            class="text-body-1 font-weight-medium row-margin-item-group"
          >
            오토리스 222나 2222
          </li>
        </ul>
      </BasicBox>
    </section>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to="">확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
