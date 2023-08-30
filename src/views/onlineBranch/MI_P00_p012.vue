<script>
// MI_P00_p012
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
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

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
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '계약정보',
          },
          {
            text: '중도상환신청',
            to: '/',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle>중도상환신청이 완료되었습니다</IllustInfoTitle>
    </IllustInfo>

    <div class="row-margin-block-small row-margin-bottom-none">
      <section class="row-margin-block-small">
        <!-- Case : 연체 -->
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">신용대출</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus theme="nonary" size="large" :block="true">
                연체
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText>6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- // Case : 연체 -->

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">신용대출</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제예정금액</KeyValueTitle>
              <KeyValueText>6,265,200 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이용기간</KeyValueTitle>
              <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>05일</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>12/36</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">신청내역</h3>

        <BasicBox>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>오늘 즉시출금 (2022.06.12)</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>중도상환방법</KeyValueTitle>
              <KeyValueText>일부상환 (원금기준)</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          중도상환금액<span :class="$style['sub']">(결제하실 금액)</span>
        </h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <KeyValue verticalAlign="center">
                <KeyValueItem>
                  <KeyValueTitle :classNames="{ title: 'color-black' }">
                    실 납부액
                  </KeyValueTitle>
                  <KeyValueText>
                    <UnitText rightUnit="원" align="right"
                      >999,999,999</UnitText
                    >
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>상환원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>경과이자</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>중도상환수수료</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>지연배상금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>비용</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>환급금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p012.scss';
</style>
