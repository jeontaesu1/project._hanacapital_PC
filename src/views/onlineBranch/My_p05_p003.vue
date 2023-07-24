<script>
// My_p05_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconImgColor from '@/assets/images/icon/img-color.svg?component';
import IconImg from '@/assets/images/icon/img.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconImgColor,
    IconImg,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '금리인하요구권 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">금리인하요구권 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"> 서류를 등록해주세요</PageMainText>
    </PageHead>

    <div>
      <div :class="$style['upload-button']">
        <input
          type="file"
          id="My_p05_p003_upload001"
          :class="$style['upload-button__input']"
        />
        <div :class="$style['upload-button__block']">
          <span :class="$style['upload-button__img']">
            <IconImg />
          </span>
          <label
            for="My_p05_p003_upload001"
            :class="$style['upload-button__label']"
            >파일첨부</label
          >
        </div>
      </div>

      <!-- Case : 파일 첨부 후 -->
      <div
        :class="[
          $style['upload-file'],
          $style['upload-file--inside'],
          'row-margin-contents',
        ]"
      >
        <ul :class="$style['upload-file__list']">
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="small">
                삭제
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.png</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="small">
                삭제
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.gif</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="small">
                삭제
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">
                첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
              </div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="small">
                삭제
              </BasicButton>
            </div>
          </li>
        </ul>
      </div>
      <!-- //Case : 파일 첨부 후 -->

      <ul :class="[$style['basic-list'], 'row-margin-container-medium']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록 파일은 이미지 파일만 가능합니다. (jpg, jpeg, png, gif 파일)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록 파일은 1회 접속 시 최대 5개까지 등록 가능하며 추가적인
            서류등록을 원하실 경우 서류 등록 메뉴에 재접속하시어 추가등록을
            해주시기 바랍니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            고객님께서 제출하신 서류는 본 금융 거래 이외의 다른 목적으로
            사용되지 않습니다.
          </div>
        </li>
      </ul>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p05_p003.scss';
</style>
