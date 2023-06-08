<script>
// My_P08_p029
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">만기후처리 구매 신청</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">구매 유의사항을 확인해 주세요</PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">소유권 이전등록</h3>
        <p class="text-body-1">
          이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다.
        </p>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">취득세</h3>
        <p class="text-body-1">
          리스차량 이용자는
          <span class="color-red"
            >리스 계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부</span
          >하여야 합니다. (자진신고납부)<br />
          불이행시 가산세를 포함한 금액으로 과세됩니다.
        </p>
        <NoticeText
          :classNames="{
            wrap: 'row-margin-item-medium',
          }"
        >
          지방세법 제15조(세율의특례)제2항제8호 및 같은법시행령 제30조 제2항
          제4호에 의거
        </NoticeText>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">저당해지</h3>
        <p class="text-body-1">
          리스 종료 이후, <span class="color-red">저당해지</span>가 필요합니다.
        </p>
        <NoticeText
          :classNames="{
            wrap: 'row-margin-item-medium',
          }"
          >저당해지문의(대표번호) 1800-1110</NoticeText
        >
      </section>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton tagName="RouterLink" to=""
          >네, 모두 확인했습니다</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
