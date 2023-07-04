<script>
// MI_P02_p005
// MI_P02_p006
import { reactive, ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicHr,
    UnitText,
    BoxCheck,
    BoxCheckObject,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicDatepicker,
    NoticeText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      dateError: false,
      useInputError001: false,
      useInputError002: false,
      useInputError003: false,
      useInputError004: false,
      useInputError005: false,
      dateMinDate: '2022.02.17',
      dateMaxDate: '2022.03.17',
    });

    const layer = ref(null);

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      store,
      state,
      layer,
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
            text: '온라인지점',
            to: '/',
          },
          {
            text: '하나머니',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>하나머니</PageTitle>
    </PageHead>

    <section class="row-margin-block-small row-margin-top-none">
      <h3 class="text-title-1 row-margin-contents">
        <span class="color-green">김하나</span>님의 하나머니 정보
      </h3>

      <BasicBox>
        <section class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-title-2 font-weight-medium">사용가능 하나머니</h4>
            <p class="text-body-3 font-weight-light row-margin-small">
              사용 신청할 수 있는 하나머니입니다.
            </p>
          </div>
          <div class="flex-box__cell">
            <UnitText rightUnit="원"
              ><strong class="color-green">35,000</strong></UnitText
            >
          </div>
        </section>

        <BasicHr theme="quaternary" className="row-margin-contents" />

        <section class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-title-2 font-weight-medium">가용예정 머니</h4>
            <p class="text-body-3 font-weight-light row-margin-small">
              사용가능 머니로 전환 예정인 하나머니입니다.
            </p>
          </div>
          <div class="flex-box__cell">
            <UnitText rightUnit="원"
              ><strong class="color-green">5,000</strong></UnitText
            >
          </div>
        </section>

        <BasicHr theme="quaternary" className="row-margin-contents" />

        <section class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-title-2 font-weight-medium">익월소멸예정 머니</h4>
            <p class="text-body-3 font-weight-light row-margin-small">
              유효기간 종료로 익월 소멸 예정인 하나머니입니다.
            </p>
          </div>
          <div class="flex-box__cell">
            <UnitText rightUnit="원"
              ><strong class="color-green">0</strong></UnitText
            >
          </div>
        </section>
      </BasicBox>
    </section>

    <BoxCheckList
      :classNames="{ wrap: 'row-margin-container-medium row-margin-top-none' }"
    >
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="MI_P02_p005_chk"
          id="MI_P02_p005_chk001"
          :defaultChecked="true"
        >
          <BoxCheckLabel>내역조회</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="MI_P02_p005_chk"
          id="MI_P02_p005_chk002"
        >
          <BoxCheckLabel>하나머니 사용/취소</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>

    <!-- Case : 내역조회 선택 시 노출 -->
    <div>
      <FormList>
        <FormListItem
          titleText="조회기간"
          target="#MI_P02_p005_dateStartButton"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="MI_P02_p005_dateStart"
                  buttonId="MI_P02_p005_dateStartButton"
                  :max="state.dateMaxDate"
                  v-model="state.dateMinDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">~</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="MI_P02_p005_dateEnd"
                  buttonId="MI_P02_p005_dateEndButton"
                  :min="state.dateMinDate"
                  v-model="state.dateMaxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>조회기간은 최대 1년까지 가능합니다.</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 조회버튼 클릭시 노출 -->
      <BasicHr theme="quaternary" className="row-margin-block" />

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 80px" />
            <col />
            <col style="width: 129px" />
            <col style="width: 80px" />
          </colgroup>
          <thead>
            <tr>
              <th>일자</th>
              <th>구분</th>
              <th>머니유형</th>
              <th>제휴사</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-08-29</td>
              <td>적립</td>
              <td>이벤트 적립</td>
              <td>하나머니</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2022-08-29</td>
              <td>적립</td>
              <td>1Q 럭키볼 이벤트 적립</td>
              <td>하나머니</td>
              <td>151</td>
            </tr>
            <tr>
              <td>2022-07-27</td>
              <td>적립</td>
              <td>하나머니 매장결제 이벤트 적립</td>
              <td>하나머니</td>
              <td>88</td>
            </tr>
            <tr>
              <td>2022-06-15</td>
              <td>사용</td>
              <td>계좌번호 입력 송금(당행)</td>
              <td>하나은행</td>
              <td>9,993</td>
            </tr>
            <tr>
              <td>2022-05-12</td>
              <td>사용</td>
              <td>(하나카드)즉시결제사용</td>
              <td>하나머니_카드</td>
              <td>300</td>
            </tr>
            <tr>
              <td>2022-04-29</td>
              <td>적립</td>
              <td>이벤트 적립</td>
              <td>하나머니</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2022-04-29</td>
              <td>적립</td>
              <td>1Q 럭키볼 이벤트 적립</td>
              <td>하나머니</td>
              <td>151</td>
            </tr>
            <tr>
              <td>2022-03-27</td>
              <td>적립</td>
              <td>하나머니 매장결제 이벤트 적립</td>
              <td>하나머니</td>
              <td>88</td>
            </tr>
            <tr>
              <td>2022-02-15</td>
              <td>사용</td>
              <td>계좌번호 입력 송금(당행)</td>
              <td>하나은행</td>
              <td>9,993</td>
            </tr>
            <tr>
              <td>2022-01-12</td>
              <td>사용</td>
              <td>(하나카드)즉시결제사용</td>
              <td>하나머니_카드</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //Case : 조회버튼 클릭시 노출 -->

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
    <!-- //Case : 내역조회 선택 시 노출 -->

    <!-- Case : 하나머니 사용/취소 선택 시 노출 -->
    <div class="contents-wrap">
      <!-- Case : 조회할 계약이 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          하나머니를 사용할 수 있는 계약이 없습니다.
        </p>
      </div>
      <!-- //Case : 조회할 계약이 없는 경우 -->

      <!-- Case : 조회할 계약이 있는 경우 -->
      <section>
        <div class="row-margin-contents">
          <h3 class="text-title-1">계약 선택</h3>
          <p
            class="text-body-1 font-weight-light color-gray-secondary row-margin-small"
          >
            사용신청 시, 선택한 계약의 결제일이 2일 이내일 경우 익월 처리됩니다.
          </p>
        </div>

        <ul class="reset-list">
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">렌트 20고5678</h4>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
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
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/48</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>매월 1일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div class="inline-wrap align-right row-margin-contents">
                <BasicButton size="small" theme="tertiary" inline="true">
                  사용하기
                </BasicButton>
              </div>

              <!-- Case : 사용하기 버튼 선택 시, 노출 -->
              <FormList>
                <FormListItem
                  titleText="사용신청 머니"
                  target="#MI_P02_p005_use001"
                >
                  <FormInvalid :error="state.useInputError001">
                    <InputBlock :error="state.useInputError001">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          align="right"
                          :useDelete="false"
                          pattern="\d*"
                          id="MI_P02_p005_use001"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>원</template>
                      <template v-slot:right>
                        <BasicButton size="small" theme="tertiary">
                          사용신청
                        </BasicButton>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                최대 <span class="color-green">999,999,999</span>원까지 가능
              </NoticeText>
              <!-- //Case : 사용하기 버튼 선택 시, 노출 -->
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">렌트 20고5678</h4>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
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
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/48</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>매월 1일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div class="inline-wrap align-right row-margin-contents">
                <BasicButton size="small" theme="tertiary" inline="true">
                  사용하기
                </BasicButton>
              </div>

              <!-- Case : 사용하기 버튼 선택 시, 노출 -->
              <FormList>
                <FormListItem
                  titleText="사용신청 머니"
                  target="#MI_P02_p005_use002"
                >
                  <FormInvalid :error="state.useInputError002">
                    <InputBlock :error="state.useInputError002">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          align="right"
                          :useDelete="false"
                          pattern="\d*"
                          id="MI_P02_p005_use002"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>원</template>
                      <template v-slot:right>
                        <BasicButton size="small" theme="tertiary">
                          사용신청
                        </BasicButton>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                최대 <span class="color-green">999,999,999</span>원까지 가능
              </NoticeText>
              <!-- //Case : 사용하기 버튼 선택 시, 노출 -->
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">렌트 20고5678</h4>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
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
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/48</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>매월 1일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div class="inline-wrap align-right row-margin-contents">
                <BasicButton size="small" theme="tertiary" inline="true">
                  사용하기
                </BasicButton>
              </div>

              <!-- Case : 사용하기 버튼 선택 시, 노출 -->
              <FormList>
                <FormListItem
                  titleText="사용신청 머니"
                  target="#MI_P02_p005_use003"
                >
                  <FormInvalid :error="state.useInputError003">
                    <InputBlock :error="state.useInputError003">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          align="right"
                          :useDelete="false"
                          pattern="\d*"
                          id="MI_P02_p005_use003"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>원</template>
                      <template v-slot:right>
                        <BasicButton size="small" theme="tertiary">
                          사용신청
                        </BasicButton>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                최대 <span class="color-green">999,999,999</span>원까지 가능
              </NoticeText>
              <!-- //Case : 사용하기 버튼 선택 시, 노출 -->
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">렌트 20고5678</h4>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
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
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/48</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>매월 1일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div class="inline-wrap align-right row-margin-contents">
                <BasicButton size="small" theme="tertiary" inline="true">
                  사용하기
                </BasicButton>
              </div>

              <!-- Case : 사용하기 버튼 선택 시, 노출 -->
              <FormList>
                <FormListItem
                  titleText="사용신청 머니"
                  target="#MI_P02_p005_use004"
                >
                  <FormInvalid :error="state.useInputError004">
                    <InputBlock :error="state.useInputError004">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          align="right"
                          :useDelete="false"
                          pattern="\d*"
                          id="MI_P02_p005_use004"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>원</template>
                      <template v-slot:right>
                        <BasicButton size="small" theme="tertiary">
                          사용신청
                        </BasicButton>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                최대 <span class="color-green">999,999,999</span>원까지 가능
              </NoticeText>
              <!-- //Case : 사용하기 버튼 선택 시, 노출 -->
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-title-2 font-weight-medium">렌트 20고5678</h4>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
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
                </BasicBoxHeadLeft>
              </BasicBoxHead>

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>이용기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/48</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>매월 1일</KeyValueText>
                </KeyValueItem>
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div class="inline-wrap align-right row-margin-contents">
                <BasicButton size="small" theme="tertiary" inline="true">
                  사용하기
                </BasicButton>
              </div>

              <!-- Case : 사용하기 버튼 선택 시, 노출 -->
              <FormList>
                <FormListItem
                  titleText="사용신청 머니"
                  target="#MI_P02_p005_use005"
                >
                  <FormInvalid :error="state.useInputError005">
                    <InputBlock :error="state.useInputError005">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          align="right"
                          :useDelete="false"
                          pattern="\d*"
                          id="MI_P02_p005_use005"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>원</template>
                      <template v-slot:right>
                        <BasicButton size="small" theme="tertiary">
                          사용신청
                        </BasicButton>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                최대 <span class="color-green">999,999,999</span>원까지 가능
              </NoticeText>
              <!-- //Case : 사용하기 버튼 선택 시, 노출 -->

              <!-- Case : 취소 항목이 있는 경우 -->
              <BasicBox theme="tertiary" className="row-margin-contents">
                <h4 class="text-body-1">취소할 항목을 선택하세요</h4>
                <p
                  class="text-body-4 color-gray-quaternary row-margin-item-small"
                >
                  선택한 계약의 하나머니 사용 신청/취소한 내역입니다.<br />
                  취소를 원하실 경우, 대상을 선택 후 [사용취소] 버튼을
                  클릭하세요.<br />
                  (체크박스가 있는 내역만 취소 가능 / 결제일 전까지 취소 가능)
                </p>

                <ul class="reset-list row-margin-item-group">
                  <li class="row-margin-contents-small">
                    <BasicBox theme="quinary">
                      <BasicBoxHead>
                        <BasicBoxHeadLeft>
                          <h5 class="text-title-1 font-weight-medium">사용</h5>
                        </BasicBoxHeadLeft>
                      </BasicBoxHead>

                      <KeyValue :wrap="true">
                        <KeyValueItem>
                          <KeyValueTitle>사용신청일자</KeyValueTitle>
                          <KeyValueText>2022.02.02</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용신청금액</KeyValueTitle>
                          <KeyValueText>999,999,999 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소일자</KeyValueTitle>
                          <KeyValueText>2022.02.09</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소금액</KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>
                            사용 후 잔액<br />
                            (결제완료 시 머니)
                          </KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BasicBox>
                  </li>
                  <li class="row-margin-contents-small">
                    <BoxCheck
                      :contents="true"
                      type="checkbox"
                      align="top"
                      id="MI_P02_p005_cancel002"
                    >
                      <template v-slot:left>
                        <BoxCheckObject />
                      </template>
                      <BoxCheckLabel>
                        <span class="for-a11y">선택</span>
                      </BoxCheckLabel>

                      <h5 class="text-title-1 font-weight-medium">사용</h5>

                      <BasicHr
                        theme="quaternary"
                        className="row-margin-contents"
                      />

                      <KeyValue :wrap="true">
                        <KeyValueItem>
                          <KeyValueTitle>사용신청일자</KeyValueTitle>
                          <KeyValueText>2022.02.02</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용신청금액</KeyValueTitle>
                          <KeyValueText>999,999,999 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소일자</KeyValueTitle>
                          <KeyValueText>2022.02.09</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소금액</KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>
                            사용 후 잔액<br />
                            (결제완료 시 머니)
                          </KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BoxCheck>
                  </li>
                  <li class="row-margin-contents-small">
                    <BoxCheck
                      :contents="true"
                      type="checkbox"
                      align="top"
                      id="MI_P02_p005_cancel003"
                    >
                      <template v-slot:left>
                        <BoxCheckObject />
                      </template>
                      <BoxCheckLabel>
                        <span class="for-a11y">선택</span>
                      </BoxCheckLabel>

                      <h5 class="text-title-1 font-weight-medium">사용</h5>

                      <BasicHr
                        theme="quaternary"
                        className="row-margin-contents"
                      />

                      <KeyValue :wrap="true">
                        <KeyValueItem>
                          <KeyValueTitle>사용신청일자</KeyValueTitle>
                          <KeyValueText>2022.02.02</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용신청금액</KeyValueTitle>
                          <KeyValueText>999,999,999 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소일자</KeyValueTitle>
                          <KeyValueText>2022.02.09</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소금액</KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>
                            사용 후 잔액<br />
                            (결제완료 시 머니)
                          </KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BoxCheck>
                  </li>
                  <li class="row-margin-contents-small">
                    <BoxCheck
                      :contents="true"
                      type="checkbox"
                      align="top"
                      id="MI_P02_p005_cancel004"
                    >
                      <template v-slot:left>
                        <BoxCheckObject />
                      </template>
                      <BoxCheckLabel>
                        <span class="for-a11y">선택</span>
                      </BoxCheckLabel>

                      <h5 class="text-title-1 font-weight-medium">사용</h5>

                      <BasicHr
                        theme="quaternary"
                        className="row-margin-contents"
                      />

                      <KeyValue :wrap="true">
                        <KeyValueItem>
                          <KeyValueTitle>사용신청일자</KeyValueTitle>
                          <KeyValueText>2022.02.02</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용신청금액</KeyValueTitle>
                          <KeyValueText>999,999,999 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소일자</KeyValueTitle>
                          <KeyValueText>2022.02.09</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소금액</KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>
                            사용 후 잔액<br />
                            (결제완료 시 머니)
                          </KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BoxCheck>
                  </li>
                  <li class="row-margin-contents-small">
                    <BoxCheck
                      :contents="true"
                      type="checkbox"
                      align="top"
                      id="MI_P02_p005_cancel005"
                    >
                      <template v-slot:left>
                        <BoxCheckObject />
                      </template>
                      <BoxCheckLabel>
                        <span class="for-a11y">선택</span>
                      </BoxCheckLabel>

                      <h5 class="text-title-1 font-weight-medium">사용</h5>

                      <BasicHr
                        theme="quaternary"
                        className="row-margin-contents"
                      />

                      <KeyValue :wrap="true">
                        <KeyValueItem>
                          <KeyValueTitle>사용신청일자</KeyValueTitle>
                          <KeyValueText>2022.02.02</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용신청금액</KeyValueTitle>
                          <KeyValueText>999,999,999 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소일자</KeyValueTitle>
                          <KeyValueText>2022.02.09</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>사용취소금액</KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem>
                          <KeyValueTitle>
                            사용 후 잔액<br />
                            (결제완료 시 머니)
                          </KeyValueTitle>
                          <KeyValueText>0 원</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BoxCheck>
                  </li>
                </ul>

                <div class="inline-wrap align-right row-margin-contents-small">
                  <BasicButton size="small" theme="tertiary" inline="true">
                    사용 취소
                  </BasicButton>
                </div>
              </BasicBox>
              <!-- //Case : 취소 항목이 있는 경우 -->
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
      </section>
      <!-- //Case : 조회할 계약이 있는 경우 -->
    </div>
    <!-- //Case : 하나머니 사용/취소 선택 시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P02_p005.scss';
</style>
