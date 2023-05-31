<script>
// IF_P03_p008
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

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
    BasicHr,
    IconCustomer,
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-container-medium">
      <IllustInfo>
        <!-- Case : 신청완료 시 노출 -->
        <IllustObject type="complete" />
        <IllustInfoTitle>중도상환신청이 접수되었습니다</IllustInfoTitle>
        <IllustInfoText>
          고객님 감사합니다.<br />
          문의사항이 있으시면 고객센터로 연락바랍니다.
        </IllustInfoText>
        <!-- // Case : 신청완료 시 노출 -->

        <!-- Case : 신청실패 시 노출 -->
        <IllustObject type="fail" />
        <IllustInfoTitle>중도상환신청에 실패하였습니다</IllustInfoTitle>
        <IllustInfoText>
          문의사항이 있으시면 고객센터로 연락바랍니다.
        </IllustInfoText>
        <!-- // Case : 신청실패 시 노출 -->
      </IllustInfo>

      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton tagName="RouterLink" to="">확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr className="row-margin-container-medium" theme="tertiary" />

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
@import '@/assets/scss/views/inventoryFinance/IF_P03_p008.scss';
</style>
