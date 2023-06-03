<script>
// MI_P06_p001
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
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

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
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },

  setup() {
    const state = reactive({
      billPeriodError: false,
      mailError: false,
      addressError: false,
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
      <PageTitle>온라인청구서</PageTitle>
      <PageMainText
        align="center"
        :classNames="{ wrap: 'text-title-2 font-weight-regular' }"
      >
        청구서를 선택해 주세요.
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
              월별 온라인청구서를 확인하세요. 추가 문의사항은 고객센터
              (1800-1110)로 연락바랍니다.
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

        <FormList :classNames="{ wrap: 'row-margin-block-small' }">
          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.billPeriodError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P06_p001_period"
                    id="MI_P06_p001_period001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P06_p001_period"
                    id="MI_P06_p001_period002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P06_p001_period"
                    id="MI_P06_p001_period003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="MI_P06_p001_period"
                    id="MI_P06_p001_period004"
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
            target="#MI_P06_p001_bondNumber"
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
                    inputId="MI_P06_p001_bondNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true">내역 조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>

      <!-- Case : 내역 조회 버튼 선택 시 노출 -->
      <BasicHr theme="tertiary" className="row-margin-block"></BasicHr>

      <section>
        <h3 class="text-title-1">청구서 조회 결과</h3>

        <!-- Case : 조회 결과 있을 때 -->
        <div class="row-margin-contents">
          <BoxCheckList align="full">
            <BoxCheckListItem v-for="i in 5" :key="i">
              <BoxCheck
                :contents="true"
                align="top"
                type="checkbox"
                :id="`MI_P06_p001_billQueryResult${i}`"
              >
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <div class="flex-box align-items-start text-body-1">
                      <div class="flex-box__cell"><BoxCheckObject /></div>
                      <div
                        class="flex-box__cell flex-box__cell--small-regular flex-1"
                      >
                        <BoxCheckLabel>오토리스</BoxCheckLabel>
                        <div
                          :class="[
                            $style['division-info'],
                            'row-margin-item-small',
                          ]"
                        >
                          <ul :class="$style['division-info__list']">
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
                </BasicBoxHead>

                <KeyValue :wrap="true">
                  <KeyValueItem>
                    <KeyValueTitle>사용기간</KeyValueTitle>
                    <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>실행금액</KeyValueTitle>
                    <KeyValueText>999,999,999원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>납부회차</KeyValueTitle>
                    <KeyValueText>60회</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>원금잔액</KeyValueTitle>
                    <KeyValueText>999,999,999원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem>
                    <KeyValueTitle>발행월</KeyValueTitle>
                    <KeyValueText>7월</KeyValueText>
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
          <!-- //Case : 첫번째 페이지일 때 -->

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
          <!-- //Case : 중간 페이지일 때 -->

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
          <!-- //Case : 마지막 페이지일 때 -->
        </div>
        <!-- //Case : 조회 결과 있을 때 -->

        <!-- Case : 조회 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">조회 가능한 계약이 없습니다.</p>
        </div>
        <!-- //Case : 조회 결과 없을 때 -->
      </section>

      <BasicHr theme="tertiary" className="row-margin-block"></BasicHr>

      <section>
        <h3 class="text-title-1 row-margin-contents">발급방법</h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              name="MI_P06_p001_issuanceMethod"
              id="MI_P06_p001_issuanceMethod001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>E-mail</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="MI_P06_p001_issuanceMethod"
              id="MI_P06_p001_issuanceMethod002"
            >
              <BoxCheckLabel>우편</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <!-- Case : E-mail 탭 선택 시 노출 -->
          <FormListItem titleText="이메일" target="#MI_P06_p001_EmailId">
            <FormInvalid :error="state.mailError">
              <InputBlock :error="state.mailError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이메일 아이디" id="MI_P06_p001_EmailId" />
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
                    id="MI_P06_p001_EmailDomainSelf"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case : 직접입력 선택 시 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- //Case : E-mail 탭 선택 시 노출 -->

          <!-- Case : 우편 탭 선택 시 노출 -->
          <FormListItem
            titleText="주소"
            target="#MI_P06_p001_addressSerachButton"
          >
            <FormInvalid :error="state.addressError">
              <InputBlock :error="state.addressError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="주소 - 우편번호"
                    defaultValue="01000"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="MI_P06_p001_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 주소"
                    defaultValue="인천 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="주소 - 상세주소"
                    defaultValue="하나금융 로비"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- //Case : 우편 탭 선택 시 노출 -->
        </FormList>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--medium'],
            $style['basic-list--regular-margin'],
            'row-margin-contents-small',
          ]"
        >
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              선택하신 방법을 통해 청구서가 발송되오니, 다시 한 번 정확히 확인해
              주세요.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  주소지 변경이 필요한 경우, 회원정보를 수정해 주세요.
                </div>
                <div class="flex-box__cell">
                  <TextButton
                    textSize="regular"
                    theme="secondary"
                    :underline="true"
                    :block="true"
                    >회원정보 수정하기</TextButton
                  >
                </div>
              </div>
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'font-weight-regular']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              [발송하기] 버튼을 선택하시면 발급이 완료됩니다.
            </div>
          </li>
        </ul>

        <ButtonList>
          <ButtonListItem>
            <BasicButton theme="quaternary" :line="true">미리보기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>발송하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
      <!-- //Case : 내역 조회 버튼 선택 시 노출 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P06_p001.scss';
</style>
