<script>
// My_P06_p013
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconStar from '@/assets/images/icon/star-badge.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
    IllustObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconStar,
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
            text: '부가서비스',
          },
          {
            text: '온라인약정',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle
        >지금부터 하나캐피탈 이용을 위한<br />온라인 약정을
        진행합니다</PageTitle
      >
    </PageHead>

    <IllustObject type="contract" />

    <BasicBox>
      <div :class="$style['icon-box']">
        <div :class="$style['icon-box__icon']">
          <IconStar />
        </div>
        <div :class="$style['icon-box__content']">
          <p class="text-title-1">
            <span class="color-green font-weight-bold">하나프라자</span>님은
            하나캐피탈에 등록된<br />
            <span class="font-weight-bold">정식 모집인</span>입니다
          </p>
        </div>
      </div>
    </BasicBox>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">이전</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/My_P06_p013.scss';
</style>
