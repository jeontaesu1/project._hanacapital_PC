<script>
// Company_P04_p002
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
            text: '영업현황',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>영업현황</PageTitle>
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
              <td>리스</td>
              <td>35,591</td>
              <td>28,471</td>
              <td>26,043</td>
            </tr>
            <tr>
              <td>할부</td>
              <td>13,220</td>
              <td>11,731</td>
              <td>7,485</td>
            </tr>
            <tr>
              <td>대출</td>
              <td>69,028</td>
              <td>54,676</td>
              <td>41,537</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>총계</td>
              <td>117,839</td>
              <td>94,878</td>
              <td>75,065</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P04_p002.scss';
</style>
