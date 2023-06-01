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
      <h3 class="text-body-1 row-margin-item-group">
        범칙금/과태료/제세공과금 납부
      </h3>

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
            'text-body-1',
            'font-weight-regular',
            'color-black',
          ]"
        >
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            안전한 이용을 위하여 10분 동안 거래가 없으실 경우 자동으로
            로그아웃됩니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            로그인 시간을 연장하시려면
            <strong class="color-green font-weight-medium">시간 연장</strong>
            버튼을 선택해 주세요.
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
