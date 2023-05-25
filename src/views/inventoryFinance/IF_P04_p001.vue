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

    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
                NH투자증권(유캔그린)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>차량명의</KeyValueTitle>
              <KeyValueText>
                본인명의(공동명의 제외)<br />
                소유기간 3개월 이상
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>소유차종</KeyValueTitle>
              <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>차량연식</KeyValueTitle>
              <KeyValueText>
                출고 이후 10년 이내<br />
                차량가격 500만원 이상<br />
                (당사 차량 시세 가격 기준)
              </KeyValueText>
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
            <div>대기영역</div>
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
              <div>대기영역</div>
              <ButtonList :wrap="true" align="center">
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
              <div>대기영역</div>
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
              <div>대기영역</div>
              <ButtonList :wrap="true" align="center">
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
          <h3 class="text-title-2 font-weight-medium">NH투자증권(유캔그린)</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>
      <div>대기영역</div>
    </BasicBox>
    <BasicHr theme="quaternary" className="row-margin-block" />
    <section>
      <h3 class="text-title-1 row-margin-contents">조회이력</h3>
      <FormList>
        <FormListItem titleText="차량번호" target="#Common_P00_p003_name004">
          <FormInvalid :error="state.name004Error">
            <InputBlock :error="state.name004Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량번호" id="Common_P00_p003_name004" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <div>대기영역</div>
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
          <div>대기영역</div>
          <ButtonList :wrap="true" align="center">
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
              <RoundStatus theme="secondary" size="large">정상</RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <div>대기영역</div>
          <ButtonList :wrap="true" align="center">
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
              <RoundStatus theme="secondary" size="large">정상</RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <div>대기영역</div>
          <ButtonList :wrap="true" align="center">
            <ButtonListItem>
              <BasicButton size="regular">중도상환 신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </li>
    </ul>
    <!-- //조회후 영역 -->
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
