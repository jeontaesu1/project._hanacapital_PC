<script>
// Company_P04_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
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
            text: '재무현황',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>재무현황</PageTitle>
    </PageHead>

    <div>
      <div
        class="text-body-1 color-gray-tertiary align-right row-margin-contents-small"
      >
        (단위:억원)
      </div>

      <div :class="$style['basic-table']">
        <table>
          <thead>
            <tr>
              <th>과목</th>
              <th>2021년</th>
              <th>2020년</th>
              <th>2019년</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>영업수익</td>
              <td>6,762</td>
              <td>5,585</td>
              <td>4,888</td>
            </tr>
            <tr>
              <td>당기순이익</td>
              <td>2,712</td>
              <td>1,731</td>
              <td>1,081</td>
            </tr>
            <tr>
              <td>자산총계</td>
              <td>136,666</td>
              <td>108,687</td>
              <td>82,086</td>
            </tr>
            <tr>
              <td>부채총계</td>
              <td>118,562</td>
              <td>95,948</td>
              <td>70,992</td>
            </tr>
            <tr>
              <td>자본총계</td>
              <td>18,103</td>
              <td>12,740</td>
              <td>11,094</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P04_p001.scss';
</style>
