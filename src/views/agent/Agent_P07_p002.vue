<script>
// Agent_P07_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import DownloadButton from '@/components/ui/button/DownloadButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    DownloadButton,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>각종서식다운로드</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <h3 :class="$style['board-detail__title']">게시물 제목</h3>
        <div :class="$style['board-detail__info']">
          <div :class="$style['board-detail__info-item']">관리자</div>
          <div :class="$style['board-detail__info-item']">2022.08.30</div>
          <div :class="$style['board-detail__info-item']">23</div>
        </div>
      </div>

      <section :class="$style['board-detail__contents']">
        //게시물 내용 노출 (글자수 제한 없음)
      </section>

      <div :class="$style['board-detail__foot']">
        <ul class="reset-list">
          <li class="row-margin-contents-small">
            <div class="flex-box">
              <div class="flex-box__cell">
                <div class="text-body-3 font-weight-medium">첨부파일.pdf</div>
              </div>
              <div class="flex-box__cell flex-box__cell--mini">
                <DownloadButton tagName="a" href="/foo/bar.pdf" download />
              </div>
            </div>
          </li>
          <li class="row-margin-contents-small">
            <div class="flex-box">
              <div class="flex-box__cell">
                <div class="text-body-3 font-weight-medium">첨부파일.pdf</div>
              </div>
              <div class="flex-box__cell flex-box__cell--mini">
                <DownloadButton tagName="a" href="/foo/bar.pdf" download />
              </div>
            </div>
          </li>
        </ul>
      </div>
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
          to="/agent/Agent_P07_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/agent/Agent_P07_p002.scss';
</style>
