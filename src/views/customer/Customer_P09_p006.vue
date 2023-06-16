<script>
// Customer_P09_p006
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
      <PageTitle>금융소비자보호공시</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <h3 :class="$style['board-detail__title']">
          [공모전] 자동차 구매·금융 앱서비스 아이디어 신나고 즐거운 공모전
        </h3>
        <div :class="$style['board-detail__info']">
          <div :class="$style['board-detail__info-item']">2022.08.30</div>
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
                <div class="text-body-3 font-weight-medium">
                  입찰참가신청서.doc
                </div>
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
          to="/customer/Customer_P09_p005"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p006.scss';
</style>
