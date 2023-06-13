<script>
// Company_P02_p003
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageMainText,
    BasicHr,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>하나금융그룹 인권선언문</PageTitle>
      <PageMainText
        :classNames="{
          wrap: 'font-weight-regular text-title-2',
        }"
      >
        하나금융그룹은 기업의 사회적 책임을 충실히 이행하고 모든 이해관계자와의
        건강한 성장을 추구하기 위하여<br />
        ‘함께 성장하며 행복을 나누는 금융’을 그룹의 미션으로 정하고,<br />
        이를 바탕으로 윤리적 가치가 반영된 의사결정 기준과 행동 원칙을 담은
        ‘Code One(하나금융그룹 윤리강령)’을 통해 인권경영을 실천하고
        있습니다.<br />
        또한 하나금융그룹은 UN의 ‘세계인권선언(Universal Declaration of Human
        Rights)’과<br />
        ‘기업과 인권 이행지침 (Guiding Principles on Business and Human Rights)’
        에서 제시하는 인권 원칙을 지지하며,<br />
        아래와 같이 그룹의 모든 이해관계자의 인권을 보호하고 인권침해가 발생하지
        않도록 노력하겠습니다.
      </PageMainText>
    </PageHead>

    <BasicHr type="contents" theme="quaternary" />

    <div :class="[$style['flex-basic-wrap'], 'row-margin-block']">
      <div :class="$style['flex-basic-list']">
        <div :class="$style['flex-basic-item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">임직원에 대한 인권</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  성별, 학연, 장애, 종교, 인종, 출신지역 등에 따른 일체의 차별을
                  금지하며 다양성을 존중한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  공정한 기준에 따라 평가하고 보상하며, 업무능력 향상을 위한
                  적절한 자기계발의 기회를 제공한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  임직원의 건강을 보호하고 유지하기 위하여 안전하고 청결한
                  근무환경을 조성한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  임직원이 일과 삶의 균형을 유지하고 개인의 능력을 최대한 발휘할
                  수 있도록 근무여건을 개선한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  강제노동을 강요하지 않으며, 아동 노동을 금지한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  노동조합 가입권리를 존중하고, 노사간 협력을 증진한다.
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div :class="$style['flex-basic-item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">손님에 대한 인권</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  장애인, 고령자 등의 금융 접근성을 개선하여 금융 취약계층의
                  인권을 보호한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  손님의 성별, 연령, 종교 등에 따른 차별적 금융서비스를 제공하지
                  않는다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융서비스 제공을 위한 최소한의 정보를 수집하며, 손님의 정보는
                  안전하게 관리한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  손님이 신뢰하고 만족할 수 있는 최상의 상품과 서비스의 개발 및
                  제공을 위하여 노력한다.
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div :class="$style['flex-basic-item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">
              주주/투자자에 대한 인권
            </h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  주주와 투자자에게 필요한 정보를 관련 법규에 따라 적시에
                  정확하고 공정하게 제공한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  정확한 회계자료 공개를 통해 경영의 투명성을 확보하고 주주와
                  투자자의 신뢰성을 유지한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  합리적 의사결정과 투명한 경영활동을 통해 주주와 투자자의 가치
                  제고를 위해 노력한다.
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div :class="$style['flex-basic-item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">
              협력회사에 대한 인권
            </h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  공정하고 투명한 거래를 통하여 함께 성장하고 공존하기 위해
                  노력한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  우월적 지위를 이용하여 불공정하거나 부정한 거래를 하지 않는다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  협력회사가 인권 ☞ 윤리 경영을 도입하고 실천할 수 있도록
                  소통하고 지원한다.
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div :class="$style['flex-basic-item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">
              지역사회에 대한 인권
            </h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  그룹의 경영활동 과정에서 지역사회 구성원의 인권이 침해되지
                  않도록 주의한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  지역사회 내 소외계층 지원 등 사회공헌 활동을 적극 실천한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  불법적인 자금세탁거래, 테러지원 등을 차단하여 사회의 투명성과
                  안전성을 높이기 위해 노력한다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  대규모 대출 및 투자에 대한 의사결정시 지역사회의 환경, 사회적
                  문제를 고려한다.
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p003.scss';
</style>
