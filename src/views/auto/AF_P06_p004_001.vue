<script>
// AF_P06_p004 심사 승인 대상
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    CarEmblem,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'auto');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
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
            text: '오토금융',
            to: '/',
          },
          {
            text: '중고차오토론',
            to: '/',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>심사 승인 대상입니다</IllustInfoTitle>
    </IllustInfo>

    <div class="row-margin-block-small row-margin-bottom-none">
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="flex-box row-margin-small">
              <div class="flex-box__cell">
                <CarEmblem code="1001" name="현대" />
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2021년식</p>
              </div>
            </div>
            <h3 class="text-title-2 font-weight-medium">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
            </h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              차량 기준가격
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">
                <strong>23,500,000</strong>
              </UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicBox className="row-margin-contents-small">
        <BasicBoxHead>
          <h4 class="text-title-2 font-weight-medium">중고차오토론</h4>
        </BasicBoxHead>
        <KeyValue wrap="true">
          <KeyValueItem>
            <KeyValueTitle>대출금리</KeyValueTitle>
            <KeyValueText>10.9%</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>대출신청금액</KeyValueTitle>
            <KeyValueText>1,500 만원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>개월수</KeyValueTitle>
            <KeyValueText>24개월</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <ul :class="[$style['basic-list'], 'row-margin-container-medium']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            실제 대출을 진행할 때, 대출가능금액이 달라질 수 있습니다.
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
@import '@/assets/scss/views/auto/AF_P06_p004_001.scss';
</style>
