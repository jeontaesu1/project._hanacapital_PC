<script>
// AF_P06_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
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
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
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
    IllustInfoText,
    BasicHr,
    IconCustomer,
  },
};
</script>

<template>
  <PageContents>
    <!-- Case : 한도조회 결과_심사 승인 대상 / 기준가격 변경시, 시스템 심사한도 노출 -->
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
            <!-- Case : 차량 LTV 최고한도율로 인한 기준가격 변경 시 [차량 조정기준가격]으로 명칭/값 변경 -->
            <!-- <KeyValueTitle :classNames="{ title: 'color-black' }">
              차량 조정기준가격
            </KeyValueTitle> -->
            <!-- // Case : 차량 LTV 최고한도율로 인한 기준가격 변경 시 [차량 조정기준가격]으로 명칭/값 변경 -->
            <KeyValueText>
              <UnitText rightUnit="원" align="right">
                <strong>23,500,000</strong>
              </UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicBox className="row-margin-contents-small row-margin-bottom-none ">
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
            <!-- Case : 대출신청금액이 시스템 심사한도를 초과할 경우 [대출가능금액]으로 명칭/값 변경 -->
            <!-- <KeyValueTitle>대출신청금액</KeyValueTitle> -->
            <!-- // Case : 대출신청금액이 시스템 심사한도를 초과할 경우 [대출가능금액]으로 명칭/값 변경 -->
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
    <!-- // Case : 한도조회 결과_심사 승인 대상 / 기준가격 변경시, 시스템 심사한도 노출 -->

    <!-- Case : 한도조회결과 -->
    <div class="row-margin-container-medium">
      <div class="row-margin-block-small">
        <IllustInfo>
          <IllustObject type="fail" />

          <!-- Case : 한도조회 결과_시스템심사&Fraud인 경우 -->
          <IllustObject type="error" />
          <!-- // Case : 한도조회 결과_시스템심사&Fraud인 경우 -->

          <IllustInfoTitle>
            고객님께서는 현재 대출진행이 어렵습니다
          </IllustInfoTitle>

          <!-- Case : 한도조회 결과_시스템심사&Fraud인 경우 -->
          <IllustInfoTitle>지점문의 부탁드립니다</IllustInfoTitle>
          <!-- // Case : 한도조회 결과_시스템심사&Fraud인 경우 -->

          <IllustInfoText>
            자세한 사항은 담당자 또는 하나캐피탈 고객센터로 문의주시기 바랍니다.
          </IllustInfoText>
        </IllustInfo>
      </div>

      <ButtonList :wrap="true" align="center">
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 한도조회 결과_시스템심사&Fraud인 경우 -->
      <ButtonList :wrap="true">
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">확인</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>상담요청</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 한도조회 결과_시스템심사&Fraud인 경우 -->
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
    <!-- // Case : 한도조회결과 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P06_p004.scss';
</style>
