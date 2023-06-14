<script>
// Company_P05_p001
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
      <PageTitle>인재상</PageTitle>
      <PageMainText
        :classNames="{
          wrap: 'font-weight-regular text-title-2',
        }"
      >
        <span class="color-green font-weight-medium">
          P.O.W.E.R on Integrity
        </span>
        라는 핵심가치를 체득, 실천함으로써 기업문화를 계승, 발전시키며
        하나캐피탈의 미래를 이끌어갈 인재
      </PageMainText>
    </PageHead>

    <section :class="[$style['bg'], 'align-center']">
      <h3 class="text-big-3 row-margin-small">
        핵심가치 <span class="color-green">INTEGRITY</span>
      </h3>
      <p class="text-title-2 font-weight-light color-gray-secondary">
        구체적으로는 Integrity와 5가지 핵심가치를 바탕으로 성과리더십,
        조직리더십, 혁신리더십을 실현하는 리더를 뜻합니다.
      </p>

      <div
        :class="[
          $style['product-list'],
          $style['product-list--col-5'],
          'row-margin-contents',
        ]"
      >
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
                PASSION
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                열정
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
                OPENNESS
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                열린마음
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
                EXCELLENCE
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                전문성
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
                RESPECT
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                존경과 배려
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
                WITH CUSTOMER
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-light',
                  'text-body-3',
                  'color-black',
                ]"
              >
                손님 우선
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="row-margin-block">
      <h3 class="text-big-3 row-margin-small">하나인재상</h3>
      <p class="text-title-2 font-weight-light color-gray-secondary">
        비전달성을 위한 전문 역량과 리더십을 겸비한 리더
      </p>

      <div
        :class="[
          $style['product-list'],
          $style['product-list--col-3'],
          'row-margin-contents',
        ]"
      >
        <ul :class="$style['product-list__list']">
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--septenary'],
                'align-left',
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                성과 리더십
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-regular',
                  'text-body-3',
                  'color-black',
                  'color-gray-tertiary',
                ]"
              >
                스스로 도전적인 목표를 부여하고 이를 달성하기 위한<br />
                강한 의지와 실행력을 갖는 것
              </p>

              <div
                :class="[$style['flex-basic-wrap'], 'row-margin-item-medium']"
              >
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular-margin'],
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">성과지향</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">문제해결</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      휴먼 네트워크
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">고객지향</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--septenary'],
                'align-left',
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                조직 리더십
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-regular',
                  'text-body-3',
                  'color-black',
                  'color-gray-tertiary',
                ]"
              >
                원활한 커뮤니케이션을 바탕으로 조직내<br />
                신뢰의 공동체 문화를 형성하여 이끌어 가는 것
              </p>

              <div
                :class="[$style['flex-basic-wrap'], 'row-margin-item-medium']"
              >
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular-margin'],
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">신뢰구축</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">인재육성</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">감성지능</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      커뮤니케이션
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--septenary'],
                'align-left',
              ]"
            >
              <h3
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                혁신 리더십
              </h3>
              <p
                :class="[
                  $style['product-list__text'],
                  'font-weight-regular',
                  'text-body-3',
                  'color-black',
                  'color-gray-tertiary',
                ]"
              >
                경영 환경 변화에 대한 명확한 통찰력을 바탕으로<br />
                조직이 나아갈 방향을 구체적으로 제시하며 이를 구성원들과 함께
                공유하는 것
              </p>

              <div
                :class="[$style['flex-basic-wrap'], 'row-margin-item-medium']"
              >
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular-margin'],
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">변화선도</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">비전제시</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">전략적사고</div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      글로벌마인드
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P05_p001.scss';
</style>
