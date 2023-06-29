<script>
// Company_P05_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

import IconPersonalTermsGray from '@/assets/images/icon/personal-terms-gray.svg?component';
import IconTrophy from '@/assets/images/icon/trophy.svg?component';
import IconHrPoint from '@/assets/images/icon/hr-point.svg?component';
import IconGiftBox from '@/assets/images/icon/gift-box.svg?component';
import IconSyringe from '@/assets/images/icon/syringe.svg?component';
import IconEducation from '@/assets/images/icon/education.svg?component';
import IconVacation from '@/assets/images/icon/vacation.svg?component';
import IconCard from '@/assets/images/icon/card.svg?component';
import IconStudy from '@/assets/images/icon/study.svg?component';
import IconHealth from '@/assets/images/icon/health.svg?component';
import IconInsurance from '@/assets/images/icon/insurance.svg?component';
import IconVacationSpot from '@/assets/images/icon/vacation-spot.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    IconPersonalTermsGray,
    IconTrophy,
    IconHrPoint,
    IconGiftBox,
    IconSyringe,
    IconEducation,
    IconVacation,
    IconCard,
    IconStudy,
    IconHealth,
    IconInsurance,
    IconVacationSpot,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>인사/복리후생</PageTitle>
    </PageHead>
    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Company_P05_p003_tab001">인사제도</NavTabButton>
        <NavTabButton link="Company_P05_p003_tab002">복리후생</NavTabButton>
      </NavTab>

      <UiTabPanel name="Company_P05_p003_tab001">
        <div :class="[$style['product-list'], $style['product-list--col-3']]">
          <ul :class="$style['product-list__list']">
            <li :class="$style['product-list__item']">
              <div
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--nonary'],
                ]"
              >
                <div
                  :class="[
                    $style['product-list__icon'],
                    'row-margin-contents-small',
                  ]"
                >
                  <IconPersonalTermsGray />
                </div>
                <h3 class="text-title-2">평가제도</h3>
                <p class="text-body-3 color-gray-tertiary row-margin-item">
                  해당 직무와 관련한 업무 수행을 근거로 하며,<br />
                  사원 개개인의 핵심 역량과 성과, 업적에 대한<br />
                  직무 수행 능력 평가를 정확하게 실시하여<br />
                  사원들이 자신의 능력을 개발시키도록 유도하고 있습니다.<br />
                  또한 평가에 근거하여 공정하게 처우 보상 육성하여 근무의욕을
                  높이고 업무 능률을 향상시키고자 노력하고 있습니다.<br />
                </p>
              </div>
            </li>
            <li :class="$style['product-list__item']">
              <div
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--nonary'],
                ]"
              >
                <div
                  :class="[
                    $style['product-list__icon'],
                    'row-margin-contents-small',
                  ]"
                >
                  <IconTrophy />
                </div>
                <h3 class="text-title-2">승진제도</h3>
                <p class="text-body-3 color-gray-tertiary row-margin-item">
                  합리적이고 공정하게 평가된 결과를 바탕으로 하여<br />
                  직무 년수 등에 구애 받지 않고<br />
                  개인의 능력에 따라 승진할 수 있는<br />
                  제도적 기반을 마련하여 사원 개개인이<br />
                  자신의 역량을 마음껏 발휘할 수 있도록<br />
                  하고 있습니다.
                </p>
              </div>
            </li>
            <li :class="$style['product-list__item']">
              <div
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--nonary'],
                ]"
              >
                <div
                  :class="[
                    $style['product-list__icon'],
                    'row-margin-contents-small',
                  ]"
                >
                  <IconHrPoint />
                </div>
                <h3 class="text-title-2">HR포인트제도</h3>
                <p class="text-body-3 color-gray-tertiary row-margin-item">
                  사내활동 등 직원의 꾸준한 노력에 대해<br />
                  HR포인트를 부여하며,<br />
                  사내활동의 적극적인 참여를 유도하여<br />
                  정당한 성과귀속을 통한 건강한 직장문화를<br />
                  정착시키고자 노력하고 있습니다.<br />
                  HR포인트는 사내 각종 인사선발 시<br />
                  보조적인 지표로 활용하고 있습니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <UiTabPanel name="Company_P05_p003_tab002">
        <div class="row-margin-block-small">
          <h3 class="text-big-3">최고의 고객만족은 최고의 직원만족부터!</h3>
          <p class="text-title-2 font-weight-light row-margin-small">
            다양한 복리후생을 통해 하나캐피탈 직원으로서의 자부심을 느낄 수
            있도록 지원하고 있습니다.
          </p>
        </div>
        <div
          :class="[
            $style['icon-list'],
            $style['icon-list--bg-none'],
            $style['icon-list--wrap'],
          ]"
        >
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconGiftBox />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >경조금 및 경조 휴가</span
                  >
                  <span :class="$style['icon-list__text']">
                    사원들과 함께 기쁨과 슬픔을 나누기 위해 임직원 및 가족들의
                    회갑, 결혼, 사망 시 <br />경조금 및 휴가를 부여하고
                    있습니다.<br />
                    더불어 축하 및 근조화환을 지원하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconSyringe />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">의료비 지원</span>
                  <span :class="$style['icon-list__text']">
                    사원 본인과 가족의 질병 및 부상 등으로 발생하는 의료비에
                    대해 지원을 하여<br />
                    안정된 가정과 회사생활을 영위함으로써 근무의욕을 불러
                    일으키고,<br />
                    회사에 대한 자긍심을 가질 수 있도록 하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconEducation />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >자녀 학자금 지원</span
                  >
                  <span :class="$style['icon-list__text']">
                    사원 자녀의 중 고 대학교<br />
                    전 과정 수업료와 육성회비를 포함한<br />
                    등록금을 지원하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconVacation />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >콘도 미니엄 운영</span
                  >
                  <span :class="$style['icon-list__text']">
                    마우나오션 리조트, 한화콘도를 비롯한 전국 각 지역의
                    휴양시설을<br />
                    저렴한 가격으로 이용하여 사원들이 심신 단련 및 휴식을 취할
                    수 있도록 지원하고 <br />있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconCard />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">복지카드 지급</span>
                  <span :class="$style['icon-list__text']">
                    분기별 복지포인트 지급으로 복지증진과 만족도 재고를 위해
                    노력하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconStudy />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >자기개발비 지급</span
                  >
                  <span :class="$style['icon-list__text']">
                    건강한 정신, 건강한 신체를 위한 어학 및 체력단련비를
                    지원하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconHealth />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >건강관리 프로그램</span
                  >
                  <span :class="$style['icon-list__text']">
                    매년 체계적인 건강검진/관리 시스템을 통하여 사원의 건강한
                    삶의 질 향상을 위해<br />
                    노력하고 있습니다. 또한 금연캠페인 및 사내 스포츠 동호회를
                    통하여 젊고 건강한<br />
                    하나인을 만들어 갑니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconInsurance />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >단체 보장성보험 가입</span
                  >
                  <span :class="$style['icon-list__text']">
                    단체보장성 보험 가입을 통하여 사원이 중대질병 및
                    사고발생으로 인한<br />
                    금전적 부담으로부터<br />
                    안정을 보장받을 수 있도록 지원하고 있습니다.
                  </span>
                </span>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconVacationSpot />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >기타 여가생활 지원</span
                  >
                  <span :class="$style['icon-list__text']">
                    Work &amp; Life Balance 문화 지향, 각종 문화 &amp; 여행 할인
                    서비스 제공,<br />
                    다양한 사내동호회 활동 지원
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P05_p003.scss';
</style>
