<script>
// PF_P07_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BankFullLogo from '@/components/ui/imageData/BankFullLogo.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageSubText,
    PageMainText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicBox,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BankFullLogo,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <BankFullLogo code="270" size="large" />
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
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__depth']">
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <div :class="$style['agree-list__depth-title']">
                  하나증권 계좌를 개설하셨나요?
                </div>
              </div>
            </li>
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <div :class="$style['agree-list__depth-title']">
                  공동인증서는 보유하고 계신가요?
                </div>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p003_agree001_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >공동인증서 관련 약관 이용 동의</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li :class="$style['agree-list__depth-item']">
              <div :class="$style['agree-list__depth-head']">
                <div :class="$style['agree-list__depth-title']">
                  하나증권 인증서는 설치하셨나요?
                </div>
              </div>
              <div :class="$style['agree-list__depth-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p003_agree002_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >하나증권 인증서 관련 약관 이용
                          동의</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="PF_P07_p003_agree002_002"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 제공 동의(공공
                          마이데이터)</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
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
              <h4 class="text-body-3 color-gray-tertiary font-weight-regular">
                유효한 공동인증서를 보유하고 계신가요?
              </h4>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li :class="[$style['basic-list__item'], 'text-body-5']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    금융기관(은행/범용)에서 발급받으신 본인 명의의 공동인증서로
                    인증과정을 거쳐 신청할 수 있으며,<br />
                    일 5회 이상 오류 시 당일에는 대출신청이 불가합니다.
                  </div>
                </li>
              </ul>
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
