<script>
// Company_P01_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>사업분야</PageTitle>
      <PageSubText>
        하나캐피탈은 리스금융, 할부금융 및 대출업무를 취급하는
        여신전문금융회사로<br />
        손님, 주주, 협력업체, 임직원의 공동 성장을 극대화하는 Value Network를
        지향합니다.
      </PageSubText>
    </PageHead>

    <ul class="flex-box">
      <li class="flex-box__cell">
        <BasicBox>
          <div :class="$style['icon-box']">
            <div :class="$style['icon-box__icon']">
              <IconStar />
            </div>
            <div :class="$style['icon-box__content']">
              <p class="text-title-1">하나의 행복! 개인금융</p>
              <p class="text-title-1">
                손님의 Value Network Partner로서 하나캐피탈이 있습니다. 전문직
                종사자, 직장인, 공무원, 교사 등 개인손님을 대상으로 한 신용대출,
                스탁론, 내구재할부 등 개인대출을 신속하게 제공해드립니다.
              </p>
            </div>
          </div>
        </BasicBox>
      </li>
      <li class="flex-box__cell flex-box__cell--large"></li>
    </ul>

    // contents
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p004.scss';
</style>
