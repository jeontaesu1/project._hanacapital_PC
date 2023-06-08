<script>
// MI_P02_p005
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    BasicHr,
    UnitText,
  },

  setup() {
    const state = reactive({
      dateError: false,
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
      <PageTitle>하나머니</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          <span class="color-green">김하나</span>님의 하나머니 정보
        </h3>

        <BasicBox>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h4 class="text-title-2 font-weight-medium row-margin-small">
                사용가능 하나머니
              </h4>
              <p class="text-body-3 font-weight-light">
                사용 신청할 수 있는 하나머니입니다.
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--large">
              <UnitText rightUnit="원" align="right"
                ><span class="color-green">333,389</span></UnitText
              >
            </div>
          </div>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h4 class="text-title-2 font-weight-medium row-margin-small">
                가용예정 머니
              </h4>
              <p class="text-body-3 font-weight-light">
                사용가능 머니로 전환 예정인 하나머니입니다.
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--large">
              <UnitText rightUnit="원" align="right"
                ><span class="color-green">5,000</span></UnitText
              >
            </div>
          </div>

          <BasicHr theme="quaternary" className="row-margin-contents" />

          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h4 class="text-title-2 font-weight-medium row-margin-small">
                익월소멸예정 머니
              </h4>
              <p class="text-body-3 font-weight-light">
                유효기간 종료로 익월 소멸 예정인 하나머니입니다.
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--large">
              <UnitText rightUnit="원" align="right"
                ><span class="color-green">0</span></UnitText
              >
            </div>
          </div>
        </BasicBox>
      </section>

      <div>
        <BoxCheckList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <BoxCheckListItem>
            <BoxCheck
              name="MI_P02_p005_type"
              id="MI_P02_p005_type_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>내역조회</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="MI_P02_p005_type" id="MI_P02_p005_type_002">
              <BoxCheckLabel>하나머니 사용/취소</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

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
                    :max="state.maxDate"
                    v-model="state.minDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="MI_P02_p005_dateEnd"
                    buttonId="MI_P02_p005_dateEndButton"
                    :min="state.minDate"
                    v-model="state.maxDate"
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
      </div>

      <!-- Case : 조회 후 노출 -->
      <BasicHr theme="tertiary" className="row-margin-block" />

      <div>
        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col />
              <col style="width: 196px" />
              <col style="width: 128px" />
              <col />
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
              <tr v-for="i in 10" :key="i">
                <td>2022-06-15</td>
                <td>사용</td>
                <td>계좌번호 입력 송금(당행)</td>
                <td>하나은행</td>
                <td>9,993</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // table -->

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
      <!-- // Case : 조회 후 노출 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P02_p005.scss';
</style>
