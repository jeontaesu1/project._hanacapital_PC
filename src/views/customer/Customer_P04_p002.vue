<script>
// Customer_P04_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>이벤트</PageTitle>
    </PageHead>

    <div>
      <div :class="[$style['image-view'], 'row-margin-container-medium']">
        <img
          src="@/assets/images/_dummy/box-detail-large.png"
          alt="샘플 이미지"
        />
      </div>

      <ButtonList
        :wrap="true"
        align="center"
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>응모하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block-small" />

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-none',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P04_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P04_p002.scss';
</style>
