<script>
//AF_P07_p015

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconImgColor from '@/assets/images/icon/img-color.svg?component';
import IconImg from '@/assets/images/icon/img.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicTooltip,
    IconImgColor,
    IconImg,
    IconTooltip,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">오토승계</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">심사서류를 등록해 주세요</PageMainText>

      <ul :class="[$style['basic-list'], 'row-margin-contents-small']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            외국인: 국내거소사실증명원, 국내거소신고증(앞/뒷면)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            렌터카 임직원 상품 승계 시 임직원 증빙자료를 꼭 등록해주세요.
          </div>
        </li>
      </ul>
    </PageHead>

    <div>
      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="AF_P07_p015_upload001"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="AF_P07_p015_upload001"
                :class="$style['upload-button__label']"
              >
                운전면허증(운전경력증명서)
              </label>
            </div>
          </div>

          <!-- Case : 비활성화 상태일 때 -->
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="AF_P07_p015_upload001Disabled"
              :class="$style['upload-button__input']"
              :disabled="true"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="AF_P07_p015_upload001Disabled"
                :class="$style['upload-button__label']"
              >
                운전면허증(운전경력증명서)
              </label>
            </div>
          </div>
          <!-- //Case : 비활성화 상태일 때 -->

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['file-box'],
            ]"
          >
            <ul :class="$style['upload-file__list']">
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부된파일명입력.pdf
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
          <!-- //Case : 파일 첨부 후 -->
        </li>

        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="AF_P07_p015_upload002"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="AF_P07_p015_upload002"
                :class="$style['upload-button__label']"
              >
                건강보험자격득실확인서
              </label>
              <div :class="$style['upload-button__tooltip']">
                <BasicTooltip>
                  <IconTooltip class="display-block" />
                  <span class="for-a11y">(도움말)</span>

                  <template v-slot:contents>
                    <section :class="$style['tooltip-section']">
                      <h3 :class="$style['tooltip-section__title']">
                        건강보험득실확인서
                      </h3>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--small-margin'],
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'color-white']"
                        >
                          <div :class="$style['basic-list__symbol']"></div>
                          <div :class="$style['basic-list__content']">
                            재직확인을 위한 서류: 건강보험자격득실확인서,
                            재직증명서 등
                          </div>
                        </li>
                      </ul>
                    </section>
                  </template>
                </BasicTooltip>
              </div>
            </div>
          </div>

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['file-box'],
            ]"
          >
            <ul :class="$style['upload-file__list']">
              <li v-for="i in 4" :key="i" :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부된파일명입력.pdf
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
          <!-- //Case : 파일 첨부 후 -->
        </li>

        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="AF_P07_p015_upload003"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="AF_P07_p015_upload003"
                :class="$style['upload-button__label']"
              >
                소득금액증명원
              </label>
              <div :class="$style['upload-button__tooltip']">
                <BasicTooltip>
                  <IconTooltip class="display-block" />
                  <span class="for-a11y">(도움말)</span>

                  <template v-slot:contents>
                    <section :class="$style['tooltip-section']">
                      <h3 :class="$style['tooltip-section__title']">
                        소득금액증명원
                      </h3>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--small-margin'],
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'color-white']"
                        >
                          <div :class="$style['basic-list__symbol']"></div>
                          <div :class="$style['basic-list__content']">
                            소득확인을 위한 서류: 소득금액증명원,
                            원천징수영수증, 건강보험료납부확인서 등
                          </div>
                        </li>
                      </ul>
                    </section>
                  </template>
                </BasicTooltip>
              </div>
            </div>
          </div>

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['file-box'],
            ]"
          >
            <ul :class="$style['upload-file__list']">
              <li v-for="i in 4" :key="i" :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부된파일명입력.pdf
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
          <!-- //Case : 파일 첨부 후 -->
        </li>

        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="AF_P07_p015_upload004"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="AF_P07_p015_upload004"
                :class="$style['upload-button__label']"
              >
                기타서류
              </label>
              <div :class="$style['upload-button__tooltip']">
                <BasicTooltip>
                  <IconTooltip class="display-block" />
                  <span class="for-a11y">(도움말)</span>

                  <template v-slot:contents>
                    <section :class="$style['tooltip-section']">
                      <h3 :class="$style['tooltip-section__title']">
                        기타서류
                      </h3>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--small-margin'],
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'color-white']"
                        >
                          <div :class="$style['basic-list__symbol']"></div>
                          <div :class="$style['basic-list__content']">
                            심사를 위한 추가서류: 재산세납입증명원,
                            전문직증빙서류 등
                          </div>
                        </li>
                      </ul>
                    </section>
                  </template>
                </BasicTooltip>
              </div>
            </div>
          </div>

          <!-- Case : 파일 첨부 후 -->
          <div
            :class="[
              $style['upload-file'],
              $style['upload-file--inside'],
              $style['file-box'],
            ]"
          >
            <ul :class="$style['upload-file__list']">
              <li v-for="i in 4" :key="i" :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부된파일명입력.pdf
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
          <!-- //Case : 파일 첨부 후 -->
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
@import '@/assets/scss/views/auto/AF_P07_p015.scss';
</style>
