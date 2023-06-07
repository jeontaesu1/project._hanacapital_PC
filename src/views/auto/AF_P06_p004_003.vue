<script>
// AF_P06_p004 한도 미발생
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustInfoText,
    BasicHr,
    IconCustomer,
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-container-medium">
      <IllustInfo>
        <IllustObject type="fail" />
        <IllustInfoTitle>
          고객님께서는 현재 대출진행이 어렵습니다
        </IllustInfoTitle>
        <IllustInfoText>
          자세한 사항은 담당자 또는 하나캐피탈 고객센터로 문의주시기 바랍니다.
        </IllustInfoText>
      </IllustInfo>

      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="tertiary" className="row-margin-container-medium" />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCustomer /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">고객센터 1800-1110</div>
              <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p004_003.scss';
</style>
