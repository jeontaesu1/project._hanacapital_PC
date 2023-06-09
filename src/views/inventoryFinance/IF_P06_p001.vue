<script>
// IF_P06_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicDatepicker,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBoxHeadLeft,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },

  setup() {
    const state = reactive({
      carNumberError: false,
      dayError: false,
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>
        확인하실 상품을<br />
        조회해 주세요
      </PageTitle>
    </PageHead>

    <ul class="reset-list">
      <li class="row-margin-contents-small">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-title-2 font-weight-medium">
              주식회사알차이노베이션 (재고금융Ⅱ)
            </h3>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>

      <li class="row-margin-contents-small">
        <BasicBox>
          <BasicBoxHead>
            <h3 class="text-title-2 font-weight-medium">
              주식회사알차이노베이션 (재고금융Ⅱ)
            </h3>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>한도금액</KeyValueTitle>
              <KeyValueText>200,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>실행건수</KeyValueTitle>
              <KeyValueText>N 건</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
    </ul>

    <BasicHr theme="quaternary" type="contents" className="row-margin-block" />

    <section>
      <h4 class="text-title-1 row-margin-contents">조회이력</h4>

      <FormList>
        <FormListItem titleText="차량번호" target="#IF_P06_p001_carNumber">
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량번호" id="IF_P06_p001_carNumber" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dayError">
            <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="IF_P06_p001_check"
                  id="IF_P06_p001_check_001"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="IF_P06_p001_check"
                  id="IF_P06_p001_check_002"
                >
                  <BoxCheckLabel>6개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="IF_P06_p001_check"
                  id="IF_P06_p001_check_003"
                >
                  <BoxCheckLabel>12개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="IF_P06_p001_check"
                  id="IF_P06_p001_check_004"
                >
                  <BoxCheckLabel>직접입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.dayError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="IF_P06_p001_start"
                  buttonId="IF_P06_p001_startButton"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">~</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="IF_P06_p001_start_end"
                  buttonId="IF_P06_p001_start_endButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton line="true">조회</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <BasicHr theme="quaternary" type="contents" className="row-margin-block" />

    <section>
      <h4 class="text-title-1 row-margin-contents">종료건 확인</h4>

      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents-small">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-title-2 font-weight-medium">20고5678</div>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>10,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상환금액</KeyValueTitle>
                <KeyValueText>10,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>7.5%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제방법</KeyValueTitle>
                <KeyValueText>
                  즉시 출금<br />
                  농협은행<br />
                  24138123435
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>

      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>25</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>

      <!-- Case : 조회결과 없을 시 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">신청현황이 없습니다.</p>
      </div>
      <!-- // Case : 조회결과 없을 시 -->
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P06_p001.scss';
</style>
