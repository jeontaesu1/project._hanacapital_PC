<script>
// My_P08_p017
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 유의사항을 확인해 주세요</PageMainText>
    </PageHead>

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
      <h3 class="text-body-1 row-margin-item-group">
        범칙금/과태료/제세공과금 납부
      </h3>

      <p class="text-body-1">
        오토리스 이용 중 발생한 각종 제세공과금(자동차세, 과태료, 범칙금
        포함)등에 대해서는 본인의 책임하에 부담할 것을 확약합니다.
      </p>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_P00_l006.scss';
</style>
