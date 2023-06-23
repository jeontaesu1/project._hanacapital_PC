<script>
// IF_P02_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NavTab,
    NavTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    NoticeText,
    UnitText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
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
      <PageTitle>
        약정 목록을 확인하고<br />
        약정을 진행하세요
      </PageTitle>
    </PageHead>

    <div>
      <!-- Case : 2개 이상일 경우 노출 탭 노출 -->
      <NavTab>
        <NavTabButton tagName="button" type="button" :active="true"
          >재고금융</NavTabButton
        >
        <NavTabButton tagName="button" type="button">재고금융Ⅱ</NavTabButton>
      </NavTab>
      <!-- // Case : 2개 이상일 경우 노출 탭 노출 -->

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
              <KeyValueText>2021.11.10 ~ 2022.03.10</KeyValueText>
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

        <ul class="reset-list row-margin-contents-small">
          <li class="row-margin-item-medium">
            <NoticeText
              >개인(신용)정보조회동의는 기 약정 시 제출한 동의서로
              갈음합니다.</NoticeText
            >
          </li>
          <li class="row-margin-item-medium">
            <NoticeText
              >대출신청을 위한 신용정보조회는 고객님의 신용등급에 영향을 주지
              않습니다.</NoticeText
            >
          </li>
          <li class="row-margin-item-medium">
            <NoticeText
              >위탁 판매차량, 상사이전 1개월 초과 차량, 병행수입차량, 매매상사간
              거래차량은 한도와 상관없이 전건 취급 제한차량임을 유의하시기
              바랍니다.</NoticeText
            >
          </li>
        </ul>
      </section>

      <BasicHr theme="quaternary" className="row-margin-block" />

      <section>
        <h3 class="text-title-1 row-margin-contents">조회이력</h3>

        <FormList>
          <FormListItem titleText="차량번호" target="#IF_P02_p001_carNumber">
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="차량번호" id="IF_P02_p001_carNumber" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="IF_P02_p001_dateStart"
                    buttonId="IF_P02_p001_dateStartButton"
                    :max="state.dateMaxDate"
                    v-model="state.dateMinDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="IF_P02_p001_dateEnd"
                    buttonId="IF_P02_p001_dateEndButton"
                    :min="state.dateMinDate"
                    v-model="state.dateMaxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 7일까지 가능합니다.</FormHelpText>
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

    <div>
      <ul class="reset-list">
        <!-- Case : 정보 입력 전 -->
        <li class="row-margin-contents">
          <BasicBox theme="quinary">
            <span class="text-body-4 font-weight-light">2023.01.10</span>
            <h3 class="text-title-2 font-weight-medium row-margin-small">
              재고금융Ⅱ20고5678
            </h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
            </p>

            <KeyValue
              verticalAlign="center"
              :classNames="{ wrap: 'row-margin-item-regular' }"
            >
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }"
                  >한도금액</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText rightUnit="원" align="right"
                    ><strong>10,000,000</strong></UnitText
                  >
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{ wrap: 'row-margin-contents' }"
            >
              <ButtonListItem>
                <BasicButton size="regular" theme="tertiary"
                  >정보입력</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- //Case : 정보 입력 전 -->

        <!-- Case : 정보 입력 후 -->
        <li class="row-margin-contents">
          <BasicBox theme="quinary">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <span class="text-body-4 font-weight-light">2023.01.10</span>
                <h3 class="text-title-2 font-weight-medium row-margin-small">
                  재고금융Ⅱ20고5678
                </h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>

                <KeyValue
                  verticalAlign="center"
                  :classNames="{ wrap: 'row-margin-item-regular' }"
                >
                  <KeyValueItem>
                    <KeyValueTitle :classNames="{ title: 'color-black' }"
                      >한도금액</KeyValueTitle
                    >
                    <KeyValueText>
                      <UnitText rightUnit="원" align="right"
                        ><strong>10,000,000</strong></UnitText
                      >
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>200,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이전소유주</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>계좌선택</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>
                  매월 11일<br />
                  (최초결제일 2월 11일)
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>서류등록</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{ wrap: 'row-margin-contents' }"
            >
              <ButtonListItem>
                <BasicButton size="regular" theme="quaternary"
                  >정보수정</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="regular" theme="tertiary">확정</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- Case : 정보 입력 후 -->

        <!-- Case : 약정 가능한 경우 -->
        <li class="row-margin-contents">
          <BoxCheck
            :contents="true"
            type="checkbox"
            align="top"
            id="IF_P02_p001_list001"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="for-a11y">선택</span>
            </BoxCheckLabel>

            <span class="text-body-4 font-weight-light">2023.01.10</span>
            <h3 class="text-title-2 font-weight-medium row-margin-small">
              재고금융Ⅱ20고5678
            </h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
            </p>

            <KeyValue
              verticalAlign="center"
              :classNames="{ wrap: 'row-margin-item-regular' }"
            >
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }"
                  >한도금액</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText rightUnit="원" align="right"
                    ><strong>10,000,000</strong></UnitText
                  >
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicHr theme="quaternary" className="row-margin-contents" />

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>200,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이전소유주</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>계좌선택</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>
                  매월 11일<br />
                  (최초결제일 2월 11일)
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>서류등록</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </li>

        <li class="row-margin-contents">
          <BoxCheck
            :contents="true"
            type="checkbox"
            align="top"
            id="IF_P02_p001_list002"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="for-a11y">선택</span>
            </BoxCheckLabel>

            <span class="text-body-4 font-weight-light">2023.01.10</span>
            <h3 class="text-title-2 font-weight-medium row-margin-small">
              재고금융Ⅱ20고5678
            </h3>
            <p class="text-body-3 color-gray-tertiary row-margin-item-small">
              BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
            </p>

            <KeyValue
              verticalAlign="center"
              :classNames="{ wrap: 'row-margin-item-regular' }"
            >
              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'color-black' }"
                  >한도금액</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText rightUnit="원" align="right"
                    ><strong>10,000,000</strong></UnitText
                  >
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicHr theme="quaternary" className="row-margin-contents" />

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>200,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이전소유주</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>계좌선택</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>
                  매월 11일<br />
                  (최초결제일 2월 11일)
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>서류등록</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </li>
        <!-- Case : 약정 가능한 경우 -->
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

      <ButtonList>
        <ButtonListItem>
          <BasicButton>약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>
    <!-- // Case : 조회 후 노출 -->
  </PageContents>
</template>
