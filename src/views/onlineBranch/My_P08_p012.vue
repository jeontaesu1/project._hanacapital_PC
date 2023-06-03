<script>
// My_P08_p012
import PageContents from '@/components/ui/layout/PageContents.vue';
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
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 연장 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="6" :current="5" />
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
      </ul>
    </PageHead>

    <div>
      <!-- Case : 개인인 경우 -->
      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload001"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload001"
                :class="$style['upload-button__label']"
                >운전면허증(운전경력증명서)</label
              >
            </div>
          </div>

          <!-- Case : 비활성화 상태일 때 -->
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload001Disabled"
              :class="$style['upload-button__input']"
              :disabled="true"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload001Disabled"
                :class="$style['upload-button__label']"
                >운전면허증(운전경력증명서)</label
              >
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
              id="My_P08_p012_upload002"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload002"
                :class="$style['upload-button__label']"
                >건강보험자격득실확인서</label
              >
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
              id="My_P08_p012_upload003"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload003"
                :class="$style['upload-button__label']"
                >소득금액증명원</label
              >
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
              id="My_P08_p012_upload004"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload004"
                :class="$style['upload-button__label']"
                >기타서류</label
              >
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
      <!-- //Case : 개인인 경우 -->

      <!-- Case : 개인사업자인 경우 -->
      <ul class="reset-list">
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload005"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload005"
                :class="$style['upload-button__label']"
                >운전면허증 또는 주민등록증</label
              >
            </div>
          </div>
        </li>
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload006"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload006"
                :class="$style['upload-button__label']"
                >사업자등록증</label
              >
            </div>
          </div>
        </li>
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload007"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload007"
                :class="$style['upload-button__label']"
                >소득금액증명원</label
              >
            </div>
          </div>
        </li>
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload008"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload008"
                :class="$style['upload-button__label']"
                >부가세과세표준증명원</label
              >
            </div>
          </div>
        </li>
        <li class="row-margin-contents">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="My_P08_p012_upload009"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="My_P08_p012_upload009"
                :class="$style['upload-button__label']"
                >기타서류</label
              >
            </div>
          </div>
        </li>
      </ul>
      <!-- //Case : 개인사업자인 경우 -->
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p012.scss';
</style>
