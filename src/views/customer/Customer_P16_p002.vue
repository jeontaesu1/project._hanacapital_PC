<script>
// Customer_P16_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>그룹사간 고객정보 제공내역 조회</PageTitle>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li
        :class="[
          $style['basic-list__item'],
          'font-weight-regular',
          'text-body-3',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          금융지주회사법 제 48조의 2에 의하여 '15.10.16일 이후 제공내역부터
          조회됩니다.(조회기준 최근 3년)
        </div>
      </li>
      <li
        :class="[
          $style['basic-list__item'],
          'font-weight-regular',
          'text-body-3',
        ]"
      >
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          하나캐피탈은 상기 제공내역상의 제공목적 범위 내에서 정확성, 최신성을
          위하여 정보가 계속 제공됨을 안내드리며 관련 법령에 의거하여 이후
          통지를 생략할 수 있음을 안내드립니다.
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small row-margin-bottom-none">
      <!-- Case : 조회 결과 있을 때 -->
      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 160px" />
            <col style="width: 240px" />
            <col />
            <col />
            <col style="width: 100px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>제공회사</th>
              <th>제공받은 회사</th>
              <th>제공목적</th>
              <th>제공항목</th>
              <th>제공년도</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>하나캐피탈</td>
              <td>하나카드</td>
              <td>제공목적노출</td>
              <td>제공항목 노출</td>
              <td>2023</td>
              <td>비고노출</td>
            </tr>
            <tr>
              <td>하나캐피탈</td>
              <td>하나카드</td>
              <td>제공목적노출</td>
              <td>제공항목 노출</td>
              <td>YYYY</td>
              <td>비고노출</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- // Case : 조회 결과 있을 때 -->

      <!-- Case : 조회 결과 없을 때 -->
      <!-- // Case : 조회 결과 없을 때 -->
    </div>

    <ButtonList :wrap="true" align="center" :col="4">
      <ButtonListItem>
        <BasicButton>통지 방법 선택</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P16_p002.scss';
</style>
