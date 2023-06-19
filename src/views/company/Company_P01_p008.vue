<script>
// Company_P01_p008
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconDownloadSmall,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>지속가능경영</PageTitle>
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
        <div :class="$style['board-detail__head-cell']">23</div>
      </div>

      <section :class="$style['board-detail__contents']">
        // 게시물 내용 노출
      </section>

      <!-- Case : 첨부 파일 없을시 비노출 -->
      <div :class="$style['board-detail__foot']">
        <div :class="$style['download-list']">
          <ul :class="$style['download-list__list']">
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 첨부 파일 없을시 비노출 -->
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
          to="/company/Company_P01_p007"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p008.scss';
</style>
