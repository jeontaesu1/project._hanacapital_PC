<script>
// Company_P02_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageMainText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>인권선언문 구성체계</PageTitle>
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

    <section :class="$style['bg']">
      <h3 class="text-big-3 row-margin-contents">인권선언문 구성원리</h3>

      <div :class="[$style['product-list'], $style['product-list--col-3']]">
        <ul :class="$style['product-list__list']">
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--octonary'],
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                기업이념의 최상위 개념으로<br />
                기업의 존재이유와 궁극적 목적 제시
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                하나금융 그룹의 미션 제시를 통한 ‘인권경영’ 표현
              </p>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--octonary'],
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                미션을 구체적으로 실천하기 위한<br />
                의사결정의 원칙 및 행동기준
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                Code One을 통해 그룹 인권경영 실천기준 제시
              </p>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--octonary'],
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                국제인권 기준 (세계인권선언,<br />
                기업과 인권 이행지침)의 지지와 준수
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                그룹 의 모든 이해관계자의 인권보호 및 존중의지 선언
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="row-margin-block">
      <h3 class="text-big-3 row-margin-contents">
        이해관계자 구분 및 인권 이슈
      </h3>

      <div :class="$style['flex-basic-wrap']">
        <div :class="$style['flex-basic-list']">
          <div :class="$style['flex-basic-item']">
            <section>
              <h3 class="text-title-1 row-margin-contents">임직원</h3>

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
                    차별 금지 (Code One 2조)
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
                    공정한 평가와 보상 (Code One 18조, 19조)
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
                    안전한 근무환경 (인권위, 인권경영 가이드 라인)
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
                    근무여건 개선 (Code One 20조)
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div :class="$style['flex-basic-item']">
            <section>
              <h3 class="text-title-1 row-margin-contents">손님</h3>

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
                    금융취약계층 보호 (감독원, 소비자보호 모범규준안)
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
                    차별적 금융서비스 금지
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
                    정보 보호 (Code One 5조)
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
                    도움이 되는 금융서비스 (그룹비전 반영)
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div :class="$style['flex-basic-item']">
            <section>
              <h3 class="text-title-1 row-margin-contents">주주/투자자</h3>

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
                    공정한 정보제공 (Code One 22조)
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
                    상호 신뢰관계 유지
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
                    가치 제고 (Code One 24조)
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div :class="$style['flex-basic-item']">
            <section>
              <h3 class="text-title-1 row-margin-contents">협력회사</h3>

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
                    상생과 공존 (Code One 23조)
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
                    불공정, 부정거래 금지
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
                    인권, 윤리경영 지원 (인권위, 인권경영 가이드 라인)
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <div :class="$style['flex-basic-item']">
            <section>
              <h3 class="text-title-1 row-margin-contents">지역사회</h3>

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
                    지역사회 구성원의 인권 보호 (인권위, 인권경영 가이드 라인)
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
                    소외계층 지원 (Code One 25조)
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
                    부정거래 차단
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p004.scss';
</style>
