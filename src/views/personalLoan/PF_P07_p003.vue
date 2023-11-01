<script>
// PF_P07_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BankFullLogo from '@/components/ui/imageData/BankFullLogo.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageSubText,
    PageMainText,
    BasicBox,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BankFullLogo,
    BasicHr,
    IconCheckDocument,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '스탁론',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">하나&스탁론II</PageTitle>
        <template v-slot:right>
          <BankFullLogo type="securities" code="270" size="large" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        대출신청 전 주요 체크포인트를 확인해 보세요
      </PageMainText>
      <PageSubText align="left">
        대출신청 전에 주요 체크포인트를 꼭 확인하시기 바라며<br />
        이로 인한 손실을 초래하지 않도록 각별히 유의해주시기 바랍니다.
      </PageSubText>
    </PageHead>

    <div>
      <section>
        <section>
          <div>
            <h3 class="text-title-2 font-weight-medium">
              하나증권 계좌를 개설하셨나요?
            </h3>
            <h3
              class="text-title-2 font-weight-medium row-margin-container-medium"
            >
              공동인증서는 보유하고 계신가요?
            </h3>
          </div>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <div class="inline-wrap">
                <p class="text-body-1 font-weight-medium">
                  공동인증서 관련 약관 이용 동의
                </p>
              </div>
            </div>
            <div class="flex-box__cell">
              <BasicButton theme="quaternary" size="small"
                >내용보기</BasicButton
              >
            </div>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 font-weight-medium">
            하나증권 인증서는 설치하셨나요?
          </h3>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <div class="inline-wrap">
                <p class="text-body-1 font-weight-medium">
                  하나증권 인증서 관련 약관 이용 동의
                </p>
              </div>
            </div>
            <div class="flex-box__cell">
              <BasicButton theme="quaternary" size="small"
                >내용보기</BasicButton
              >
            </div>
          </div>

          <div class="flex-box row-margin-contents-small">
            <div class="flex-box__cell flex-1">
              <div class="inline-wrap">
                <p class="text-body-1 font-weight-medium">
                  개인(신용)정보 필수적 제공 동의(공공 마이데이터)
                </p>
              </div>
            </div>
            <div class="flex-box__cell">
              <BasicButton theme="quaternary" size="small"
                >내용보기</BasicButton
              >
            </div>
          </div>
        </section>
      </section>

      <div class="row-margin-block-small">
        <BasicBox theme="tertiary">
          <ul class="reset-list">
            <li class="row-margin-contents-small">
              <div class="flex-box align-items-start">
                <div class="flex-box__cell flex-1">
                  <h4
                    class="text-body-3 color-gray-tertiary font-weight-regular"
                  >
                    하나&스탁론II 상품조건은 알고 계신가요?
                  </h4>
                </div>
                <div class="flex-box__cell">
                  <button type="button" :class="$style['link-button']">
                    <span class="for-a11y">바로가기</span>
                  </button>
                </div>
              </div>
            </li>
            <li class="row-margin-contents-small">
              <div class="flex-box align-items-start">
                <div class="flex-box__cell flex-1">
                  <h4
                    class="text-body-3 color-gray-tertiary font-weight-regular"
                  >
                    계좌운용규칙을 숙지하셨나요?
                  </h4>
                </div>
                <div class="flex-box__cell">
                  <button type="button" :class="$style['link-button']">
                    <span class="for-a11y">바로가기</span>
                  </button>
                </div>
              </div>
            </li>
            <li class="row-margin-contents-small">
              <div class="flex-box align-items-start">
                <div class="flex-box__cell flex-1">
                  <h4
                    class="text-body-3 color-gray-tertiary font-weight-regular"
                  >
                    약정서 및 약관 내용은 숙지하셨나요?
                  </h4>
                </div>
                <div class="flex-box__cell">
                  <button type="button" :class="$style['link-button']">
                    <span class="for-a11y">바로가기</span>
                  </button>
                </div>
              </div>
            </li>
            <li class="row-margin-contents-small">
              <div class="flex-box align-items-start">
                <div class="flex-box__cell flex-1">
                  <h4
                    class="text-body-3 color-gray-tertiary font-weight-regular"
                  >
                    유효한 공동인증서를 보유하고 계신가요?
                  </h4>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li :class="[$style['basic-list__item'], 'text-body-5']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        금융기관(은행/범용)에서 발급받으신 본인 명의의
                        공동인증서로 인증과정을 거쳐 신청할 수 있으며,<br />
                        일 5회 이상 오류 시 당일에는 대출신청이 불가합니다.
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="flex-box__cell">
                  <button type="button" :class="$style['link-button']">
                    <span class="for-a11y">바로가기</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </BasicBox>
      </div>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p003.scss';
</style>
