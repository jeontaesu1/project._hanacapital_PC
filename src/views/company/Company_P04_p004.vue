<script>
// Company_P04_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '회사소개',
            to: '/',
          },
          {
            text: '투자정보',
          },
          {
            text: '신용등급',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>신용등급</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        하나캐피탈의 신용 등급은 2004년 출범 이후 영업자산의 증가추세와 함께
        지속적인 상향 조정이 되고 있습니다.
      </PageSubText>
    </PageHead>

    <div>
      <div
        class="text-body-1 color-gray-tertiary align-right row-margin-contents-small"
      >
        (2020년 12월 기준)
      </div>

      <div :class="$style['basic-table']">
        <table>
          <thead>
            <tr>
              <th>신용평가사</th>
              <th>회사채</th>
              <th>기업어음(CP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>한국 신용 정보</td>
              <td>AA-</td>
              <td>A1</td>
            </tr>
            <tr>
              <td>한국 신용 평가</td>
              <td>AA-</td>
              <td>A1</td>
            </tr>
            <tr>
              <td>한국 기업 평가</td>
              <td>AA-</td>
              <td>A1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section class="row-margin-block-small">
      <h3 class="text-title-1 row-margin-contents">회사채 등급 정의</h3>

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 220px" />
            <col style="width: 220px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th rowspan="3">A등급</th>
              <td>AAA</td>
              <td class="align-left">원리금 지급확실성이 최고 수준임</td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">AA</td>
              <td class="align-left">
                원리금 지급확실성이 매우 높지만, AAA등급에 비하여 다소 낮은
                요소가 있음
              </td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">A</td>
              <td class="align-left">
                원리금 지급 확실성이 높지만, 장래의 환경변화에 다소 영향을 받을
                가능성이 있음
              </td>
            </tr>
            <tr>
              <th rowspan="3">B등급</th>
              <td>BBB</td>
              <td class="align-left">
                원리금 지급 확실성이 있지만, 장래의 환경변화에 따라 저하될
                가능성이 내포되어 있음
              </td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">BB</td>
              <td class="align-left">
                원리금 지급확실성이 부족하여 투기적이며, 장래 안정에 대해 현
                시점에서 단언할 수 없음
              </td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">B</td>
              <td class="align-left">
                원리금 지급 능력에 당면문제는 없으나, 장래의 안정성 면에서는
                투기적인 요소가 내포되어 있음
              </td>
            </tr>
            <tr>
              <th rowspan="3">C등급</th>
              <td>CCC</td>
              <td class="align-left">
                원리금의 채무불이행이 발생할 위험요소가 내포되어 있음
              </td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">CC</td>
              <td class="align-left">
                원리금의 채무불이행이 발생할 가능성이 높음
              </td>
            </tr>
            <tr>
              <td :class="$style['basic-table__left-line']">C</td>
              <td class="align-left">
                원리금의 채무불이행이 발생할 가능성이 지극히 높음
              </td>
            </tr>
            <tr>
              <th>D등급</th>
              <td>D</td>
              <td class="align-left">현재 채무불이행 상태에 있음</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 class="text-title-1 row-margin-contents">기업어음 등급 정의</h3>

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 220px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>A1</td>
              <td class="align-left">
                적기 상환능력이 최고 수준, 그 안정성은 현단계에서 합리적으로
                예측 가능한 장래의 환경에 영향을 받지 않을 만큼 높음.
              </td>
            </tr>
            <tr>
              <td>A2</td>
              <td class="align-left">
                적기 상환능력이 우수하지만, 그 안전성은 A1에 비하여 다소 열등한
                요소가 있음
              </td>
            </tr>
            <tr>
              <td>A3</td>
              <td class="align-left">
                적기 상환 능력은 양호하지만, 그 안정성은 급격한 환경 변화에 따라
                다소 영향을 받을 가능성이 있음
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td class="align-left">
                최소한의 적기 상환능력은 인정되나, 그 안정성이 환경변화로 저하될
                가능성이 있어 투기적인 요소를 내포함
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td class="align-left">
                적기 상환능력 및 그 안정성이 매우 가변적이어서 투기적인 요소가
                강함
              </td>
            </tr>
            <tr>
              <td>D</td>
              <td class="align-left">현재 채무불이행 상태에 있음</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P04_p004.scss';
</style>
