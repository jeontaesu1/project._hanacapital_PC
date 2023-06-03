<script>
// MI_P07_p001
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageMainText,
    TextButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicDatepicker,
    BasicInput,
    BasicSelect,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FilterTab,
    FilterTabButton,
  },

  setup() {
    const state = reactive({
      billPeriodError: false,
      mailError: false,
      bondNumberError: false,
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
      <PageTitle>증명서 조회/발급</PageTitle>
      <PageMainText
        align="center"
        :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
      >
        증명서를 선택해 주세요.
      </PageMainText>
    </PageHead>

    <div>
      <div>
        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--medium'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              증명서 발급 시, 오늘 날짜로 발급되며 일부 증명서는 본인인증이
              필요합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              발급 오류 시, 사용중인 PC환경 문제가 있을 수 있으니, 고객센터
              (1800-1110)로 연락해 주세요.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  보안 프로그램 설치가 필요합니다.
                </div>
                <div class="flex-box__cell">
                  <TextButton
                    textSize="regular"
                    theme="secondary"
                    :underline="true"
                    :block="true"
                    >보안 프로그램 설치 안내</TextButton
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>

        <BoxCheckList
          :wrap="true"
          :col="2"
          :classNames="{ wrap: 'row-margin-block-small' }"
        >
          <BoxCheckListItem>
            <BoxCheck
              name="MI_P07_p001_chk"
              id="MI_P07_p001_chk001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>금융거래확인서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk002">
              <BoxCheckLabel>대출거래 및 잔액내역서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk003">
              <BoxCheckLabel>완납증명서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk004">
              <BoxCheckLabel>렌트/리스 계약사실 확인서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk005">
              <BoxCheckLabel>계산서/세금계산서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk006">
              <BoxCheckLabel>입금내역서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk007">
              <BoxCheckLabel>스탁론 약정서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk008">
              <BoxCheckLabel>상환스케줄</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P07_p001_chk" id="MI_P07_p001_chk009">
              <BoxCheckLabel>리스/렌터카 종료확인서</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton :line="true">조회하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>

      <!-- Case : 조회하기 버튼 클릭시 노출 -->
      <BasicHr theme="tertiary" className="row-margin-block"></BasicHr>

      <!-- Case : 금융거래확인서 -->
      <section>
        <h3 class="title-1 row-margin-contents">금융거래확인서</h3>

        <!-- Case : 조회가능한 계약이 있을 때 -->
        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">대출거래현황</h4>
            <!-- Case : 데이터 있을 때 -->
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">
                    오토리스 운용 (정상)
                  </h4>
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>용도</KeyValueTitle>
                  <KeyValueText>대환대출</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>29,729 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>이율</KeyValueTitle>
                  <KeyValueText>22.6%</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출기한</KeyValueTitle>
                  <KeyValueText>2024.08.05</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출일자</KeyValueTitle>
                  <KeyValueText>2019.07.24</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>비고</KeyValueTitle>
                  <KeyValueText>-</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출금액</KeyValueTitle>
                  <KeyValueText>53,691 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
            <!-- //Case : 데이터 있을 때 -->

            <!-- Case : 데이터 없을 때 -->
            <BasicBox>
              <div :class="$style['empty']">
                <p :class="$style['empty__text']">대출 거래 내역이 없습니다.</p>
              </div>
            </BasicBox>
            <!-- //Case : 데이터 없을 때 -->
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">담보내용</h4>
            <!-- Case : 데이터 있을 때 -->
            <BasicBox>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>소재지/<br />차량번호</KeyValueTitle>
                  <KeyValueText>
                    인천 서구 에코로 181 <br />하나금융 로비
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>종류</KeyValueTitle>
                  <KeyValueText>오토리스 운용</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>소유자</KeyValueTitle>
                  <KeyValueText>김하나</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>감정가격</KeyValueTitle>
                  <KeyValueText>845,000 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>채무자관계</KeyValueTitle>
                  <KeyValueText>최대주주</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>설정순위/금액</KeyValueTitle>
                  <KeyValueText>845,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
            <!-- //Case : 데이터 있을 때 -->

            <!-- Case : 데이터 없을 때 -->
            <BasicBox>
              <div :class="$style['empty']">
                <p :class="$style['empty__text']">담보 내역이 없습니다.</p>
              </div>
            </BasicBox>
            <!-- //Case : 데이터 없을 때 -->
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-small">기준일 현재 연체</h4>
            <p class="text-body-4 color-gray-quaternary">
              연체대출금 및 지급보증대지급급 보유 또는 이자, 분할상환금,
              분할상환원리금 지체 포함
            </p>
            <BasicBox className="row-margin-item-group">
              <KeyValue>
                <KeyValueItem>
                  <KeyValueTitle>유무여부</KeyValueTitle>
                  <KeyValueText>없음</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">
              기준일로부터 1년 이내 당좌부도 발생유무
            </h4>
            <BasicBox>
              <KeyValue>
                <KeyValueItem>
                  <KeyValueTitle>유무여부</KeyValueTitle>
                  <KeyValueText>
                    <div>있음</div>
                    <div class="row-margin-mini">(1차 부도일 : 2023.01.01)</div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-1 row-margin-item-group">
              최근 3개월 내 10일 이상 계속된 연체 명세
            </h4>
            <!-- Case : 데이터 있을 때 -->
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h5 class="text-title-2 font-weight-medium">
                    오토리스 운용 (정상)
                  </h5>
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>연체발생일</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>연체정리일</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>원금</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>연체일수</KeyValueTitle>
                  <KeyValueText>15일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>이자</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>비고</KeyValueTitle>
                  <KeyValueText>-</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
            <!-- //Case : 데이터 있을 때 -->

            <!-- Case : 데이터 없을 때 -->
            <BasicBox>
              <div :class="$style['empty']">
                <p :class="$style['empty__text']">연체 내역이 없습니다.</p>
              </div>
            </BasicBox>
            <!-- //Case : 데이터 없을 때 -->
          </section>
        </div>
        <!-- //Case : 조회가능한 계약이 있을 때 -->

        <!-- Case : 조회가능한 계약이 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">조회 가능한 계약이 없습니다.</p>
        </div>
        <!-- //Case : 조회가능한 계약이 없을 때 -->
      </section>
      <!-- //Case : 금융거래확인서 -->

      <!-- Case : 대출거래 및 잔액내역서 -->
      <section>
        <h3 class="title-1 row-margin-small">대출거래 및 잔액내역서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>

        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_transactionHistory"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_transactionHistory${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 대출거래 및 잔액내역서 -->

      <!-- Case : 완납증명서 -->
      <section>
        <h3 class="title-1 row-margin-small">완납증명서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem v-for="i in 5" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_paymentCertificate${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 완납증명서 -->

      <!-- Case : 렌트/리스 계약사실 확인서 -->
      <section>
        <h3 class="title-1 row-margin-small">렌트/리스 계약사실 확인서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>

        <FilterTab :classNames="{ wrap: 'row-margin-contents' }">
          <FilterTabButton tagName="button" type="button" :active="true">
            전체
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            렌트
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            리스
          </FilterTabButton>
        </FilterTab>

        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-container-medium',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_contractConfirmation"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_contractConfirmation${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 렌트/리스 계약사실 확인서 -->

      <!-- Case : 계산서/세금계산서 -->
      <section>
        <h3 class="title-1 row-margin-contents">계산서/세금계산서</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--medium'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              발행된 계산서/세금계산서를 조회하고, E-mail로 받으실 수 있습니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              계산서/세금계산서 수정 관련 문의는 고객센터(1800-1110)로 연락해
              주세요
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  E-mail 주소 확인 및 변경이 필요한 경우, 회원정보를 수정해
                  주세요.
                </div>
                <div class="flex-box__cell">
                  <TextButton
                    textSize="regular"
                    theme="secondary"
                    :underline="true"
                    :block="true"
                    >회원정보 수정하기
                  </TextButton>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <FormList :classNames="{ wrap: 'row-margin-block-small' }">
          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.billPeriodError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P07_p001_period"
                    id="MI_P07_p001_period001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P07_p001_period"
                    id="MI_P07_p001_period002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P07_p001_period"
                    id="MI_P07_p001_period003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P07_p001_period"
                    id="MI_P07_p001_period004"
                  >
                    <BoxCheckLabel>1년</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.billPeriodError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="MI_P07_p001_periodStart"
                    buttonId="MI_P07_p001_periodStartButton"
                    :max="state.maxDate"
                    v-model="state.minDate"
                    defaultValue="2022.02.17"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="MI_P07_p001_periodEnd"
                    buttonId="MI_P07_p001_periodEndButton"
                    :min="state.minDate"
                    v-model="state.maxDate"
                    defaultValue="2022.03.17"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 1년까지 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="채권번호"
            target="#MI_P07_p001_bondNumber"
            :selectOnly="true"
          >
            <FormInvalid :error="state.bondNumberError">
              <InputBlock :error="state.bondNumberError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '오토리스 (L99999999999999)',
                      },
                      {
                        value: '2',
                        label: '오토리스 (L99999999999999)',
                      },
                      {
                        value: '3',
                        label: '오토리스 (L99999999999999)',
                      },
                    ]"
                    title="채권번호"
                    inputId="MI_P07_p001_bondNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true">계산서 조회</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true">세금계산서 조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>

      <!-- Case : 계산서/세금계산서 - 계산 결과 노출 -->
      <BasicHr theme="tertiary" className="row-margin-block"></BasicHr>

      <section>
        <h3 class="title-1 row-margin-small">계산서 조회 결과</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          발급하실 (세금)계산서를 선택해 주세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_billQueryResult"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>999,999,999원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_billQueryResult${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>999,999,999원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 계산서/세금계산서 - 계산 결과 노출 -->
      <!-- //Case : 계산서/세금계산서 -->

      <!-- Case : 입금내역서 -->
      <section>
        <h3 class="title-1 row-margin-small">입금내역서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_depositStatement"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.01.04 ~ 2022.09.08</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_depositStatement${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.01.04 ~ 2022.09.08</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 입금내역서 -->

      <!-- Case : 스탁론 약정서 -->
      <section>
        <h3 class="title-1 row-margin-small">스탁론 약정서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_stockronContract"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/60</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText> 2022.09.08 (매월 5일)</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>999,999,999원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_stockronContract${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/60</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText> 2022.09.08 (매월 5일)</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>999,999,999원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 스탁론 약정서 -->

      <!-- Case : 상환스케줄 -->
      <section>
        <h3 class="title-1 row-margin-small">상환스케줄</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              id="MI_P07_p001_repaymentSchedule"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large" :block="true"
                    >연체</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem v-for="i in 4" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_repaymentSchedule${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 상환스케줄 -->

      <!-- Case : 리스/렌터카 종료확인서 -->
      <section>
        <h3 class="title-1 row-margin-small">리스/렌터카 종료확인서</h3>
        <p class="text-body-1 color-gray-secondary font-weight-light">
          조회 및 발급을 원하시는 계약을 선택하세요.
        </p>
        <BoxCheckList
          align="full"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem v-for="i in 5" :key="i">
            <BoxCheck
              :contents="true"
              align="top"
              type="checkbox"
              :id="`MI_P07_p001_endCertificate${i}`"
            >
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box align-items-start text-body-1">
                    <div class="flex-box__cell"><BoxCheckObject /></div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <BoxCheckLabel>오토리스 05도6880</BoxCheckLabel>
                      <div
                        :class="[
                          $style['division-info'],
                          'row-margin-item-small',
                        ]"
                      >
                        <ul :class="$style['division-info__list']">
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              BMW 435d
                            </div>
                          </li>
                          <li :class="$style['division-info__item']">
                            <div class="text-body-3 color-gray-tertiary">
                              L99999999999999
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus size="large" :block="true">종료</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                  >
                    6,265,200 원
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText> 1/30</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>매월 5일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
      </section>
      <!-- //Case : 리스/렌터카 종료확인서 -->

      <BasicHr theme="tertiary" className="row-margin-block"></BasicHr>

      <section>
        <h3 class="title-1 row-margin-contents">이메일 입력</h3>
        <FormList>
          <FormListItem titleText="이메일" target="#MI_P07_p001_EmailId">
            <FormInvalid :error="state.mailError">
              <InputBlock :error="state.mailError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이메일 아이디" id="MI_P07_p001_EmailId" />
                </InputBlockCell>
                <InputBlockCell margin="regular">@</InputBlockCell>
                <InputBlockCell margin="regular" :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'naver.com',
                      },
                      {
                        value: '2',
                        label: 'hanmail.net',
                      },
                      {
                        value: '3',
                        label: 'gmail.com',
                      },
                      {
                        value: '4',
                        label: 'nate.com',
                      },
                      {
                        value: '5',
                        label: 'paran.com',
                      },
                      {
                        value: '6',
                        label: 'dreamwiz.com',
                      },
                      {
                        value: '7',
                        label: 'yahoo.com',
                      },
                      {
                        value: '8',
                        label: 'freechal.com',
                      },
                      {
                        value: '9',
                        label: '직접입력',
                      },
                    ]"
                    title="이메일 도메인"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- Case : 직접입력 선택 시 노출 -->
              <InputBlock
                :error="state.mailError"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이메일 도메인 직접입력"
                    id="MI_P07_p001_EmailDomainSelf"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case : 직접입력 선택 시 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton theme="quaternary" :line="true">미리보기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>발송하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
      <!-- //Case : 조회하기 버튼 클릭시 노출 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P07_p001.scss';
</style>
