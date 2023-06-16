<script>
// IF_P03_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NavTab,
    NavTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicHr,
    RoundStatus,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },
  setup() {
    const state = reactive({
      carNumberError: false,
      dateError: false,
      dateMinDate: '2022.02.17',
      dateMaxDate: '2022.03.17',
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
      <PageHeadRow>
        <PageTitle align="left">중도상환</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"
        >중도상환 신청을 원하시는 상품을 선택해주세요</PageMainText
      >
    </PageHead>

    <div>
      <!-- Case : 2개 이상일 경우 노출 탭 노출 -->
      <NavTab>
        <NavTabButton tagName="button" type="button" :active="true"
          >재고금융</NavTabButton
        >
        <NavTabButton tagName="button" type="button">재고금융Ⅱ</NavTabButton>
      </NavTab>
      <!-- // Case : 2개 이상일 경우 탭 노출 -->

      <section>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                주식회사알차이노베이션 (재고금융)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>약정기간</KeyValueTitle>
              <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>한도잔액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
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
      </section>

      <BasicHr theme="quaternary" className="row-margin-block" />

      <section>
        <h3 class="text-title-1 row-margin-contents">조회이력</h3>

        <FormList>
          <FormListItem titleText="차량번호" target="#IF_P03_p001_carNumber">
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="차량번호" id="IF_P03_p001_carNumber" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.dateError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="IF_P03_p001_dateCheck"
                    id="IF_P03_p001_dateCheck001"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="IF_P03_p001_dateCheck"
                    id="IF_P03_p001_dateCheck002"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="IF_P03_p001_dateCheck"
                    id="IF_P03_p001_dateCheck003"
                  >
                    <BoxCheckLabel>12개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="IF_P03_p001_dateCheck"
                    id="IF_P03_p001_dateCheck004"
                  >
                    <BoxCheckLabel>직접입력</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="IF_P03_p001_dateStart"
                    buttonId="IF_P03_p001_dateStartButton"
                    :max="state.dateMaxDate"
                    v-model="state.dateMinDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="IF_P03_p001_dateEnd"
                    buttonId="IF_P03_p001_dateEndButton"
                    :min="state.dateMinDate"
                    v-model="state.dateMaxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
    </div>

    <!-- Case : 조회 후 노출 -->
    <BasicHr theme="quaternary" className="row-margin-block" />

    <!-- Case : 내역 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        중도상환신청이 가능한 계약이 없습니다.
      </p>
    </div>
    <!-- //Case : 내역 없을 때 -->

    <!-- Case : 내역 있을 때 -->
    <div>
      <ul class="reset-list">
        <!-- Case : 정상 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">20고5678</h3>
                <p
                  class="text-body-3 row-margin-item-small color-gray-tertiary"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary" size="large" :block="true"
                  >정상</RoundStatus
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>1/1 (매월 11일)</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList :wrap="true" align="center" class="row-margin-contents">
              <ButtonListItem>
                <BasicButton size="regular">중도상환 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 정상 -->

        <!-- Case : 연체 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">20고5678</h3>
                <p
                  class="text-body-3 row-margin-item-small color-gray-tertiary"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="nonary" size="large" :block="true"
                  >연체</RoundStatus
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>1/1 (매월 11일)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
        <!-- // Case : 연체 -->

        <li v-for="i in 3" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">20고5678</h3>
                <p
                  class="text-body-3 row-margin-item-small color-gray-tertiary"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary" size="large" :block="true"
                  >정상</RoundStatus
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>1/1 (매월 11일)</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList :wrap="true" align="center" class="row-margin-contents">
              <ButtonListItem>
                <BasicButton size="regular">중도상환 신청</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>

      <!-- Case : 첫번째 페이지일 때 -->
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
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
    </div>
    <!-- // Case : 내역 있을 때 -->
    <!-- // Case : 조회 후 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P03_p001.scss';
</style>
