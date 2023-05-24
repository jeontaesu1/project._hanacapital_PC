<script>
// My_p06_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
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
    PageHead,
    PageTitle,
    BasicBox,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>
        청약철회권 신청 가능한 상품은 총
        <span class="color-green">42</span>건
      </PageTitle>
    </PageHead>

    <div>
      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자 보호를 위해 대출 계약 후, 14일 동안 불이익 없이 청약
            탈퇴할 수 있습니다. 대출 실행일 다음날부터 14일을 초과한 경우 철약
            철회가 불가합니다. (14일째가 휴일인 경우 다음 영업일까지 가능)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            할부금융/시설대여/연불판매 상품의 경우 청약 철회가 불가합니다.
            (재화를 제공받지 않은 경우, 철회 가능)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            청약철회로 안내되는 상환 금액은 신청일 기준이므로 신청일 이후에는
            재신청을 하셔야합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            5영업일 이내 대출기록이 삭제됩니다.
          </div>
        </li>
      </ul>
    </div>

    <!-- Case : 보유 상품이 없는 경우 노출 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">현재 보유하고 계신 상품이 없습니다.</p>
    </div>
    <!-- // Case : 보유 상품이 없는 경우 노출 -->

    <!-- Case : 보유 상품이 있는 경우 노출 -->
    <div class="row-margin-block-small">
      <BasicBox>
        <KeyValue>
          <KeyValueItem verticalAlign="center">
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              소비자신용대출
            </KeyValueTitle>
          </KeyValueItem>
        </KeyValue>
        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-contents-small"
        />
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>23,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출실행일</KeyValueTitle>
            <KeyValueText>2021.12.31</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>12/36</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출잔액</KeyValueTitle>
            <KeyValueText>23,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>05일</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>6,265,200 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원리금균등분할상환</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <ButtonListItem>
            <BasicButton>철회 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </BasicBox>
    </div>
    <!-- // Case : 보유 상품이 있는 경우 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/My_P06_p001.scss';
</style>
