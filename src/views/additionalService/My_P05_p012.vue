<script>
// My_P05_p012
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
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

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
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    IconImgColor,
    IconImg,
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
            text: '부가서비스',
          },
          {
            text: '서류등록',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">서류등록</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">서류를 등록해주세요</PageMainText>
    </PageHead>

    <section>
      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P05_p012_upload001"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P05_p012_upload001"
                :class="$style['upload-button__label']"
              >
                파일첨부
              </label>
            </div>
          </div>

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['upload-file--child'],
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
        </li>
      </ul>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular-margin'],
          'row-margin-container-medium',
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록파일은 이미지 파일만 가능합니다. (jpg, jpeg, png, gif 파일)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            서류등록파일은 1회 접속 시 최대 5개까지 등록 가능하며 추가적인
            서류등록을 원하실 경우 서류등록 메뉴에 재접속하여 추가등록해 주세요.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            고객님께서 제출하신 서류는 본 금융거래 이외의 다른 목적으로 사용되지
            않습니다.
          </div>
        </li>
      </ul>
    </section>

    <section
      class="contents-wrap row-margin-block-small row-margin-bottom-none"
    >
      <h3 class="text-title-1 row-margin-contents">서류등록현황</h3>

      <!-- Case : 등록된 서류가 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">현재 서류등록 내역이 없습니다.</p>
      </div>
      <!-- //Case : 등록된 서류가 없을 경우 -->

      <!-- Case : 등록된 서류가 있을 경우 -->
      <div :class="$style['upload-file']">
        <ul :class="$style['upload-file__list']">
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              <div :class="$style['upload-file__date']">
                2023-05-08 18:15:44
              </div>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              <div :class="$style['upload-file__date']">
                2023-05-08 18:15:44
              </div>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              <div :class="$style['upload-file__date']">
                2023-05-08 18:15:44
              </div>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              <div :class="$style['upload-file__date']">
                2023-05-08 18:15:44
              </div>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconImgColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">
                첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
              </div>
              <div :class="$style['upload-file__date']">
                2023-05-08 18:15:44
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Case : 첫번째 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
      <!-- //Case : 등록된 서류가 있을 경우 -->
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>서류등록</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/My_P05_p012.scss';
</style>
