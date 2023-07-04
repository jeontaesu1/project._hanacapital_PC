<script>
// PF_P02_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    BasicBox,
    UnitText,
    IconSearchMoney,
    IconInterestRate,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
    };
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '행복아파트론',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>한도와 금리가 확인되었습니다</IllustInfoTitle>
    </IllustInfo>

    <div class="row-margin-block-small row-margin-bottom-none">
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <BasicBox theme="tertiary">
            <div :class="$style['product-detail']">
              <div :class="$style['product-detail__list']">
                <div :class="$style['product-detail__item']">
                  <div :class="$style['product-detail__icon']">
                    <IconSearchMoney />
                  </div>
                  <div :class="$style['product-detail__block']">
                    <div :class="$style['product-detail__title']">
                      대출가능금액
                    </div>
                    <div :class="$style['product-detail__desc']">
                      <UnitText size="regular" rightUnit="만원"
                        >20,000</UnitText
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BasicBox>
        </div>
        <div class="flex-box__cell flex-1 flex-box__cell--large">
          <BasicBox theme="tertiary">
            <div :class="$style['product-detail']">
              <div :class="$style['product-detail__list']">
                <div :class="$style['product-detail__item']">
                  <div :class="$style['product-detail__icon']">
                    <IconInterestRate />
                  </div>
                  <div :class="$style['product-detail__block']">
                    <div :class="$style['product-detail__title']">대출금리</div>
                    <div :class="$style['product-detail__desc']">
                      <UnitText size="regular" rightUnit="%">13.2</UnitText>
                      <div :class="$style['product-detail__desc-sub']">
                        (36개월 기준)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BasicBox>
        </div>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-container-medium']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            해당 금리는 대출기간 36개월 기준이며 대출기간에 따라 변경될 수
            있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            실제 정보와 입력 정보가 상이할 경우 대출가능금액 및 금리가 달라질 수
            있습니다.
          </div>
        </li>
      </ul>
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>대출 신청하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P02_p004.scss';
</style>
