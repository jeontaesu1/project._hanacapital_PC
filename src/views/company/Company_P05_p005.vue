<script>
// Company_P05_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '회사소개',
            to: '/',
          },
          {
            text: '채용정보',
          },
          {
            text: '채용공고',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>채용공고</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div
          :class="[
            $style['board-detail__head-cell'],
            $style['board-detail__head-cell--title'],
          ]"
        >
          <h3 :class="$style['board-detail__title']">게시물 제목</h3>
        </div>
        <div :class="$style['board-detail__head-cell']">2022.08.30</div>
      </div>

      <section :class="$style['board-detail__contents']">
        // 게시물 내용 노출
      </section>
    </div>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/company/Company_P05_p004"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P05_p005.scss';
</style>
