<script>
// Company_P02_p002
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
      <PageTitle>윤리강령</PageTitle>
      <PageMainText
        :classNames="{
          wrap: 'text-title-2 font-weight-regular',
        }"
      >
        함께 성장하며 행복을 나누는 금융을 실현하기 위해 윤리적 가치를
        최우선으로 합니다.
      </PageMainText>
    </PageHead>

    <section :class="[$style['bg'], 'align-center']">
      <h3 class="text-big-3 row-margin-small">
        이 모든 질문에 "예"라고 답할 수 있으면 행하십시오.
      </h3>
      <p class="text-title-2 color-gray-secondary font-weight-light">
        스스로 판단하기 어려운 사항은<br />
        윤리 또는 준법담당 부서에 의견을 물을 수 있습니다.
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
                $style['product-list__block--octonary'],
              ]"
            >
              <h4
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                내 결정이 Code One에<br />
                부합하는가?
              </h4>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--octonary'],
              ]"
            >
              <h4
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                내 행동이 다른 임직원이나<br />
                언론에 공개 되어도 문제가 없겠는가?
              </h4>
            </div>
          </li>
          <li :class="$style['product-list__item']">
            <div
              :class="[
                $style['product-list__block'],
                $style['product-list__block--octonary'],
              ]"
            >
              <h4
                :class="[
                  $style['product-list__title'],
                  'text-title-2',
                  'row-margin-item',
                ]"
              >
                다른 사람이 이 자리에 있더라도<br />
                똑같은 판단을 내리겠는가?
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="row-margin-block">
      <section class="row-margin-block-small">
        <h3 class="text-big-3 row-margin-contents">제 1장 임직원의 자세</h3>

        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">사명감</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 책임감을 가지고 각자의 역할에 최선을 다하며, 정직하고
                  투명하게 업무를 수행한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  상호존중 및 차별금지
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 출신, 성별, 학연 등 어떠한 이유로도 차별하지 않으며
                  서로 존중한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">공·사 구분</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 공과 사를 명확히 구분하고, 업무를 수행함에 있어
                  사적인 이익을 추구하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">법규준수</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 관련 법규 및 윤리강령을 정확히 숙지하고 이를
                  준수한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">정보보호</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 회사, 손님, 임직원 등에 대한 정보를 철저히 보호하며
                  자신 또는 제3자의 이익을 위해 사용하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">6</div>
                <div :class="$style['contents-list__title']">
                  회사 자산의 보호
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 상호를 포함한 모든 유·무형의 자산을 회사를 위해
                  사용하고 보호한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">7</div>
                <div :class="$style['contents-list__title']">경비의 집행</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 업무수행에 필요한 경비를 적정하게 사용하며 사적
                  이익을 위하여 사용하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">8</div>
                <div :class="$style['contents-list__title']">
                  부당한 지시의 금지
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 부당한 지시를 하지 않고 상사의 부당한 지시를 따르지
                  않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">9</div>
                <div :class="$style['contents-list__title']">성희롱 금지</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 성적 수치심이나 굴욕감을 유발하는 행위를 하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">10</div>
                <div :class="$style['contents-list__title']">
                  사적 금전대차 등의 금지
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 손님 및 임직원간 차입이나 보증 등 사적인 금전거래를
                  하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">11</div>
                <div :class="$style['contents-list__title']">
                  이해상충행위 금지
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 손님 및 회사와 이해가 상충되는 행위(투자행위,
                  사업거래 등)를 하지 않으며, 회사의 사전승인 없이 타 업무를
                  겸직하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">12</div>
                <div :class="$style['contents-list__title']">
                  선물수수 등 제한
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 임직원을 포함한 모든 이해관계자로부터 금전, 선물 등
                  유·무형의 이익을 받거나 요구하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">13</div>
                <div :class="$style['contents-list__title']">
                  내부제보 및 제보자 보호
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 법규나 윤리강령에 위반되는 행위를 발견하거나 그
                  가능성을 인지한 경우 즉시 윤리, 준법 또는 감사담당 부서에
                  제보하며, 회사는 제보자의 비밀을 철저히 보장하고 제보로 인한
                  어떠한 불이익도 발생하지 않도록 한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">14</div>
                <div :class="$style['contents-list__title']">대외활동</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 사전승인 없이 회사 또는 업무와 관련된 내용에 대하여
                  출판, 강의, 대외매체 등을 통한 의사표현을 하지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">15</div>
                <div :class="$style['contents-list__title']">정치활동 제한</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 회사 내에서 정치적 활동을 하지 않으며 회사에 영향을
                  미칠 수 있는 정치적 의견을 대외적으로 밝히지 않는다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">16</div>
                <div :class="$style['contents-list__title']">기록과 보존</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 업무와 관련한 모든 기록, 자료 및 정보를 정확하게
                  작성·보존하며, 임의로 조작하거나 허위로 보고하지 않는다
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">17</div>
                <div :class="$style['contents-list__title']">
                  그룹 구성원간 협력
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 그룹과 손님의 이익을 위하여 서로 협력하며 불공정한
                  거래를 하지 않는다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-big-3 row-margin-contents">
          제 2장 임직원에 대한 자세
        </h3>

        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">18</div>
                <div :class="$style['contents-list__title']">
                  공정한 평가와 보상
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  회사는 공정한 기준에 따라 임직원을 평가하고 보상한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">19</div>
                <div :class="$style['contents-list__title']">기회제공</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  회사는 임직원의 전문성과 업무능력을 높일 수 있도록 적절한
                  자기계발의 기회를 제공해야 한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">20</div>
                <div :class="$style['contents-list__title']">구성원의 행복</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  회사는 임직원이 일과 삶의 균형을 유지하고 그 가족과 행복한
                  삶을 누릴 수 있도록 노력한다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-big-3 row-margin-contents">
          제 3장 이해관계자에 대한 자세
        </h3>

        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">21</div>
                <div :class="$style['contents-list__title']">
                  손님자산의 보호
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 손님이 만족하고 신뢰할 수 있는 상품과 서비스를
                  제공하고, 손님의 자산을 선량한 관리자의 주의의무로 보호해야
                  한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">22</div>
                <div :class="$style['contents-list__title']">
                  손님의 알권리 보호
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 손님의 알권리를 보호하고 합리적인 판단을 위해 필요한
                  정보를 적시에 정확하게 제공해야 한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">23</div>
                <div :class="$style['contents-list__title']">
                  협력업체와의 상생
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 협력업체와 투명하고 공정하게 거래하며 함께 성장하기
                  위해 노력한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">24</div>
                <div :class="$style['contents-list__title']">주주이익 보호</div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 주주의 정당한 요구와 제안을 존중하며 주주가치 제고를
                  위해 노력한다.
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">25</div>
                <div :class="$style['contents-list__title']">
                  사회적 책임과 역할 수행
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  하나인은 적법하고 정당한 기업활동을 통해 사회적 가치를
                  창출하고 국가발전에 이바지하며, 모범적 사회 구성원으로서의
                  책임과 역할을 다한다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p002.scss';
</style>
