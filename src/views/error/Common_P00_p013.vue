<script>
// Common_P00_p013
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconCustomer,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle>서비스를 일부 이용할 수 없습니다</IllustInfoTitle>
      <IllustInfoText>자세한 사항은 고객센터에 문의해 주세요.</IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div :class="$style['bottom-info']">
      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  고객센터 1800-1110
                </div>
                <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/error/Common_P00_p013.scss';
</style>
