<script>
// My_P04_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle
        >근저당설정 조회/해지 가능한 상품은 총
        <span class="color-green">42</span>건</PageTitle
      >
    </PageHead>

    <section>
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            상환이 종료된 계약 건에 한하여 조회/신청이 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            근저당해지 신청은 평일 오전 9시 ~ 오후 4시까지 접수 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <strong class="color-green font-weight-medium"
              >저당해지 비용 19,300원</strong
            >이 발생하며, 금액과 계좌번호를 문자로 발송해
            드립니다.(저당해지대행업체: 다코스)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            저당해지 비용은 오후 5시까지 입금 시 당일 해지 처리되며, 이후 입금
            시 영업일 기준으로 해지 됩니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            담보대출, 건설기계 등 일부 상환은 홈페이지를 통한 근저당설정 해지
            신청이 불가능하며, 고객센터(<strong
              class="color-green font-weight-medium"
              >1800-1110</strong
            >)로 연락 바랍니다.
          </div>
        </li>
      </ul>

      <section>
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">
            근저당설정조회 가능한 계약이 없습니다.
          </p>
        </div>

        <ul class="reset-list row-margin-block-small">
          <li class="row-margin-contents">
            <BasicBox>
              // contnets
              <ButtonList :wrap="true" align="center">
                <ButtonListItem>
                  <BasicButton size="regular">해지 신청</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>// contnets</BasicBox>
          </li>
        </ul>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P04_p001.scss';
</style>
