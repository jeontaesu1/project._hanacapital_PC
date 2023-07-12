<script>
// My_P08_p017
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인 지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '만기후처리',
          },
          {
            text: '구매 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 유의사항을 확인해 주세요</PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">소유권 이전등록</h3>

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
              계약 종결 이후 10일 이내에 차량등록 명의를 고객님으로 이전
              완료하셔야 합니다. 고객명의로 이전하는데 필요한 취·등록세등의
              제세공과금은 고객이 부담하셔야 하며, 미이전시에는 자동차관리법에
              의한 범칙금이 부과됩니다. (최고50만원)
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
              손님이 직접 이전하는 방법과, 이전대행업체를 통한 이전 방법이
              있습니다. (이전대행업체 통한 이전 시 이전대행비용 발생)
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">취·등록세</h3>

        <p class="text-body-1">
          취등록세는 국토부 과세표준금액과 당사 잔존가치금액을 상호 비교하여 더
          높은 금액기준으로 산정됩니다.
        </p>

        <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
          지방세법 시행령 제18조(취득가격의 범위 등)
        </NoticeText>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">제3자이전 불가</h3>

        <p class="text-body-1">
          자동차관리법 제12조3항에 따라
          <sapn class="color-red">계약자 외 제3자명의이전은 불가</sapn>합니다.
        </p>

        <NoticeText :classNames="{ wrap: 'color-red row-margin-item-medium' }">
          자동차관리법 제12조3항(이전등록)<br />
          자동차를 양수한 자가 다시 제3자에게 이를 양도하고자 할 때에는 그 양도
          전에 자기명의로 이전등록을 하여야 한다.
        </NoticeText>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">
          범칙금/과태료/제세공과금 납부
        </h3>

        <p class="text-body-1">
          렌터카 이용 중 발생한 각종 제세공과금(과태료, 범칙금 포함)등에
          대해서는 본인의 책임하에 부담할 것을 확약합니다.
        </p>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">보험가입</h3>

        <p class="text-body-1">
          자동차 소유권이전을 위해 보험에 가입되어 있어야 합니다.<br />
          (렌터카 보험가입: 차대번호로 가입해 주세요.)
        </p>
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>네, 모두 확인했습니다</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P08_p017.scss';
</style>
