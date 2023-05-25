<script>
// IF_P04_p001

import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
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
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
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
    PageSubText,
    PageTitle,
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
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicHr,
    RoundStatus,
    BasicDatepicker,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },

  setup() {
    const state = reactive({
      name003Error: false,
      name004Error: false,
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
      <PageTitle
        >재고금융 만기연장건에 대한<br />세부내역 확인 후 만기연장을 신청해
        주세요</PageTitle
      >
      <PageSubText class="color-green"> 주식회사알차이노베이션 </PageSubText>
    </PageHead>

    <!-- case : 재고금융 2개 이상일경우 -- 1개의 case는 아래 주석참조 -->
    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="testNavTab001_001">재고금융</NavTabButton>
        <NavTabButton link="testNavTab001_002">재고금융Ⅱ</NavTabButton>
      </NavTab>

      <UiTabPanel name="testNavTab001_001">
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

        <BasicHr theme="quaternary" className="row-margin-block" />

        <section>
          <h3 class="text-title-1 row-margin-contents">조회이력</h3>
          <FormList>
            <FormListItem
              titleText="차량번호"
              target="#Common_P00_p003_name003"
            >
              <FormInvalid :error="state.name003Error">
                <InputBlock :error="state.name003Error">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="차량번호" id="Common_P00_p003_name003" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem titleText="조회기간" :forceFocus="true">
              <FormInvalid :error="state.testError001">
                <BoxCheckList
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="testInputCheck014"
                      id="testInputCheck014_001"
                    >
                      <BoxCheckLabel>1개월</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="testInputCheck014"
                      id="testInputCheck014_002"
                    >
                      <BoxCheckLabel>3개월</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="testInputCheck014"
                      id="testInputCheck014_003"
                    >
                      <BoxCheckLabel>6개월</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="testInputCheck014"
                      id="testInputCheck014_004"
                    >
                      <BoxCheckLabel>1년</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <InputBlock :error="state.testError001">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="조회기간 시작 날짜"
                      id="testInput014Start"
                      buttonId="testInput014StartButton"
                      :max="state.testMaxDate002"
                      v-model="state.testMinDate002"
                      :onChange="testInputEvent"
                    />
                  </InputBlockCell>
                  <InputBlockCell margin="regular">~</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicDatepicker
                      title="조회기간 종료 날짜"
                      id="testInput014End"
                      buttonId="testInput014EndButton"
                      :min="state.testMinDate002"
                      v-model="state.testMaxDate002"
                      :onChange="testInputEvent"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
          <ButtonList align="full">
            <ButtonListItem>
              <BasicButton :line="true">조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </section>
        <!-- 조회후 영역 -->
        <BasicHr theme="quaternary" className="row-margin-block" />
        <ul class="reset-list">
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-title-2 font-weight-medium">
                    NH투자증권(유캔그린)
                  </h3>
                  <p class="text-body-3 row-margin-item-small color-gray">
                    BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="secondary" size="large">정상</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출실행금액</KeyValueTitle>
                  <KeyValueText>2,000,000 원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출금리</KeyValueTitle>
                  <KeyValueText>7.5%</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <ButtonList
                :wrap="true"
                align="center"
                class="row-margin-contents"
              >
                <ButtonListItem>
                  <BasicButton size="regular">중도상환 신청</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-title-2 font-weight-medium">
                    NH투자증권(유캔그린)
                  </h3>
                  <p class="text-body-3 row-margin-item-small color-gray">
                    BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="nonary" size="large">연체</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출실행금액</KeyValueTitle>
                  <KeyValueText>2,000,000 원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출금리</KeyValueTitle>
                  <KeyValueText>7.5%</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
          <li class="row-margin-contents">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-title-2 font-weight-medium">
                    NH투자증권(유캔그린)
                  </h3>
                  <p class="text-body-3 row-margin-item-small color-gray">
                    BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus theme="secondary" size="large">정상</RoundStatus>
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출실행금액</KeyValueTitle>
                  <KeyValueText>2,000,000 원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출금리</KeyValueTitle>
                  <KeyValueText>7.5%</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <ButtonList
                :wrap="true"
                align="center"
                class="row-margin-contents"
              >
                <ButtonListItem>
                  <BasicButton size="regular">중도상환 신청</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
        </ul>
        <!-- 페이징 -->
        <PaginationNav class="row-margin-container-medium">
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
        <!-- //페이징 -->
        <!-- //조회후 영역 -->
      </UiTabPanel>

      <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>
    </UiTab>
    <!-- //case : 재고금융 2개 이상일경우 -->

    <!-- case : 재고금융 1개일경우 -->
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

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-title-1 row-margin-contents">조회이력</h3>
      <FormList>
        <FormListItem titleText="차량번호" target="#Common_P00_p003_name003">
          <FormInvalid :error="state.name003Error">
            <InputBlock :error="state.name003Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량번호" id="Common_P00_p003_name003" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.testError001">
            <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_001"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_002"
                >
                  <BoxCheckLabel>3개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_003"
                >
                  <BoxCheckLabel>6개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_004"
                >
                  <BoxCheckLabel>1년</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="testInput014Start"
                  buttonId="testInput014StartButton"
                  :max="state.testMaxDate002"
                  v-model="state.testMinDate002"
                  :onChange="testInputEvent"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">~</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="testInput014End"
                  buttonId="testInput014EndButton"
                  :min="state.testMinDate002"
                  v-model="state.testMaxDate002"
                  :onChange="testInputEvent"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <ButtonList align="full">
        <ButtonListItem>
          <BasicButton :line="true">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>
    <!-- 조회후 영역 -->
    <BasicHr theme="quaternary" className="row-margin-block" />
    <ul class="reset-list">
      <li class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                NH투자증권(유캔그린)
              </h3>
              <p class="text-body-3 row-margin-item-small color-gray">
                BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus theme="secondary" size="large">정상</RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금리</KeyValueTitle>
              <KeyValueText>7.5%</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <ButtonList :wrap="true" align="center" class="row-margin-contents">
            <ButtonListItem>
              <BasicButton size="regular">중도상환 신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </li>
      <li class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                NH투자증권(유캔그린)
              </h3>
              <p class="text-body-3 row-margin-item-small color-gray">
                BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus theme="nonary" size="large">연체</RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금리</KeyValueTitle>
              <KeyValueText>7.5%</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
      <li class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">
                NH투자증권(유캔그린)
              </h3>
              <p class="text-body-3 row-margin-item-small color-gray">
                BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus theme="secondary" size="large">정상</RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText> 2021.11.10 ~ 2022.03.10 </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText>2,000,000 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>대출금리</KeyValueTitle>
              <KeyValueText>7.5%</KeyValueText>
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
    <!-- 페이징 -->
    <PaginationNav class="row-margin-container-medium">
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
    <!-- //페이징 -->
    <!-- //조회후 영역 -->
    <!-- //case : 재고금융 1개일경우 -->

    <!-- 조회결과 없을때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        중도상환신청이 가능한 계약이 없습니다.
      </p>
    </div>
    <!-- //조회결과 없을때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P04_p001.scss';
</style>
