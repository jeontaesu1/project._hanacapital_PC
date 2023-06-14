<script>
// Company_P01_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

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
      <PageTitle>CEO 소개</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        모두의 기쁨, 그 하나를 위해<br />
        하나캐피탈은 손님 여러분과 함께 성장하며 세계로, 미래로 나아가겠습니다.
      </PageSubText>
    </PageHead>

    <div class="flex-box">
      <div class="flex-box__cell flex-1 text-body-1">
        <p class="row-margin-item-group">
          하나캐피탈을 사랑하고 성원해주시는 손님 여러분!<br />
          안녕하십니까? 대표이사 박승오입니다.
        </p>
        <p class="row-margin-item-group">
          하나금융그룹의 하나캐피탈은 ‘함께 성장하며 행복을 나누는 금융’ 이라는
          그룹의 미션과 같이 모두의 행복 가치를 높이기 위해 손님이 필요로 하는
          금융서비스를 제공하고자 끊임없이 노력해왔습니다.
        </p>
        <p class="row-margin-item-group">
          모든 임직원이 도덕성과 책임감을 바탕으로 손님과 함께 성장하며 행복을
          나누는 금융을 실현하기 위해 윤리경영을 적극적으로 실천하고 있습니다.
        </p>
        <p class="row-margin-item-group">
          손님의 행복을 최우선으로 생각하며, 하나캐피탈은 손님이 원하는 금융으로
          다가가 손님과 함께 성장하는 파트너가 되고자 오늘도 한걸음 더
          뛰겠습니다.
        </p>
        <p class="row-margin-item-group">감사합니다.</p>

        <div class="row-margin-container-medium">
          <p
            class="text-body-3 color-gray-tertiary font-weight-light row-margin-small"
          >
            하나캐피탈 ㈜ 대표이사
          </p>
          <p class="text-body-3 font-weight-medium">박승오</p>
        </div>
      </div>

      <div :class="$style['flex-left']">
        <div :class="$style['image-view']">
          <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p002.scss';
</style>
