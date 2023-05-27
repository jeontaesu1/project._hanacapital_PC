<script>
// PF_P01_p007
import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    PageContents,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IconPig,
    IconBuilding,
    IconCar,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="fail" />
      <IllustInfoTitle>
        김하나님, 신청하신 상품은<br />
        대출진행이 어렵습니다
      </IllustInfoTitle>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div :class="$style['bottom-info-hr']">
      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconBuilding /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__text']">
                  아파트 소유자를 위한 무담보 아파트 신용대출
                </div>
                <div :class="[$style['icon-list__title'], 'row-margin-small']">
                  행복아파트론
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCar /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__text']">
                  내 차만 있다면 특별한도와 금리혜택까지
                </div>
                <div :class="[$style['icon-list__title'], 'row-margin-small']">
                  원큐자동차담보대출
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconPig /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__text']">
                  소득이 있다면 쉽고 빠른 신용대출
                </div>
                <div :class="[$style['icon-list__title'], 'row-margin-small']">
                  e하나신용대출
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p007.scss';
</style>
