<script>
// My_p05_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>금리인하요구권 신청이 완료되었습니다</IllustInfoTitle>
      <IllustInfoText>
        담당부서에서 금리인하상담으로 연락드리겠습니다. 감사합니다.<br />
        (상담가능시간 : 평일 09~18시)
      </IllustInfoText>
    </IllustInfo>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small row-margin-bottom-none',
      }"
    >
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <section :class="[$style['notice-section'], 'row-margin-block']">
      <h4
        :class="[
          $style['notice-section__title'],
          'text-body-3 color-gray-tertiary font-weight-medium row-margin-item-medium',
        ]"
      >
        유의사항
      </h4>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          ,
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            신용상태 개선이 발생한 경우 신청횟수 및 시점에 관계없이 금리인하
            요구가 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금리인하 심사결과에 따라 금리인하요구가 수용되지 않을 수 있으며,
            심사를 위한 추가서류를 요구할 수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금리인하 비대상상품의 경우, 금리인하요구가 수용되지 않습니다.
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_p05_p005.scss';
</style>
