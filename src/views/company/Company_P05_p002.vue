<script>
// Company_P05_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>전형방법</PageTitle>
    </PageHead>

    <div :class="[$style['step'], $style['step--horizontal']]">
      <ul :class="$style['step__list']">
        <li :class="$style['step__item']">
          <div :class="$style['step__inner']">
            <div :class="$style['step__contents']">
              <div :class="$style['step__badge']">STEP 1</div>
              <p :class="$style['step__text']">
                <strong>입사지원서 작성</strong>후<br />
                홈페이지 상에 <strong>On-Line 등록</strong>해<br />
                접수를 진행합니다.
              </p>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item-group',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채용공고 : 현재 채용중인 분야를 확인하고 곧바로 지원하는
                    방법
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    상시입사지원 : 현재 채용하지 않지만 지원을 남겨 향후 채용에
                    대비
                  </div>
                </li>
              </ul>
            </div>
            <div :class="$style['step__icon']">
              <IconPhone />
            </div>
          </div>
        </li>
        <li :class="$style['step__item']">
          <div :class="$style['step__inner']">
            <div :class="$style['step__contents']">
              <div :class="$style['step__badge']">STEP 2</div>
              <p :class="$style['step__text']">
                입사지원서를 토대로<br />
                <strong>지원자의 기본능력을<br />평가</strong>합니다.
              </p>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item-group',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    이에 따라 입사 지원서를 작성하실 때 전공, 경력사항 및
                    자기소개서 등을 성실하게 작성하여야 하며, 기재사항이 허위로
                    판명될 때에는 합격이 취소됩니다.
                  </div>
                </li>
              </ul>
            </div>
            <div :class="$style['step__icon']">
              <IconSend />
            </div>
          </div>
        </li>
        <li :class="$style['step__item']">
          <div :class="$style['step__inner']">
            <div :class="$style['step__contents']">
              <div :class="$style['step__badge']">STEP 3</div>
              <p :class="$style['step__text']">
                서류전형 합격자들을<br />
                대상으로<br />
                <strong>면접을 진행</strong>합니다.
              </p>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item-group',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    지원자의 수행능력 및 성실도 등을 검증하기 위해 각 지원분야별
                    임원급 및 해당 부서장을 면접위원으로 위촉합니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    기본적으로 면접은 4~5명의 그룹면접으로 진행되며, 질의응답
                    형식으로 진행되나 채용 유형에 따라 1인 면접도 실시할 수
                    있습니다.
                  </div>
                </li>
              </ul>
            </div>
            <div :class="$style['step__icon']">
              <IconPersonalTerms />
            </div>
          </div>
        </li>
        <li :class="$style['step__item']">
          <div :class="$style['step__inner']">
            <div :class="$style['step__contents']">
              <div :class="$style['step__badge']">STEP 4</div>
              <p :class="$style['step__text']">
                면접을 전 후하여 회사에서 지정한<br />
                병원의 종합검진으로
                <strong
                  >건강진단 결과가 나온 이후 회사규정에 따라<br />
                  최종 합격 여부가 결정</strong
                >됩니다.
              </p>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item-group',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    통상 면접전형 합격자에 대하여 혈액검사를 통한 간 장기검사,
                    혈압, 청력, 시력, X-ray, 검진 등 종합검진을 실시합니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3 font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    건강 진단일 2~3일 전부터 음주는 물론 무리한 활동/운동이나
                    약물복용을 삼가고, 검진 전날 저녁 09:00 이후부터 검진
                    시까지는 공복을 유지하여야 정확한 검진결과를 얻을 수
                    있습니다.
                  </div>
                </li>
              </ul>
            </div>
            <div :class="$style['step__icon']">
              <IconDeposit />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P05_p002.scss';
</style>
