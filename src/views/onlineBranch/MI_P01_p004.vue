<script>
// MI_P01_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>주소지/연락처 변경</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        주소지/연락처를 변경하고자 하는 대상을 선택하세요
      </PageSubText>
    </PageHead>

    <BoxCheckList align="full">
      <BoxCheckListItem>
        <BoxCheck
          :contents="true"
          name="MI_P01_p004_type"
          id="MI_P01_p004_type001"
          :defaultChecked="true"
        >
          <BoxCheckLabel>홍길동</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :contents="true"
          name="MI_P01_p004_type"
          id="MI_P01_p004_type002"
        >
          <BoxCheckLabel>하나캐피탈</BoxCheckLabel>
          <div :class="[$style['division-info'], 'row-margin-item-small']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="text-body-3 color-gray">123-45-67890</div>
              </li>
            </ul>
          </div>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :contents="true"
          name="MI_P01_p004_type"
          id="MI_P01_p004_type003"
        >
          <BoxCheckLabel>하나캐피탈</BoxCheckLabel>
          <div :class="[$style['division-info'], 'row-margin-item-small']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="text-body-3 color-gray">123-45-67890</div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="text-body-3 color-gray">123-4567-89012</div>
              </li>
            </ul>
          </div>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton :line="true" tagName="RouterLink" to=""
          >주소지변경</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton :line="true" tagName="RouterLink" to=""
          >연락처변경</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P01_p004.scss';
</style>
