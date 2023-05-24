<script>
// IF_P04_p001

import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
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
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import IconLinkSmall from '@/assets/images/icon/link-small.svg?component';
import IconDot from '@/assets/images/icon/dot.svg?component';

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
    IconLinkSmall,
    IconDot,
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
          <div>대기영역</div>
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
        <div :class="[$style['pagination'], 'row-margin-container-medium']">
          <button
            disabled
            :class="[
              $style['pagination__function'],
              $style['pagination__function--prev'],
            ]"
          >
            <IconLinkSmall aria-labelledby="prevDesc" role="img" />
            <desc id="catDesc" class="for-a11y">이전</desc>
          </button>
          <span :class="$style['pagination__list']">
            <a
              :class="[
                $style['pagination__item'],
                $style['pagination__item--selected'],
              ]"
              href="#"
              >1</a
            >
            <a :class="$style['pagination__item']" href="#">2</a>
            <a :class="$style['pagination__item']" href="#">3</a>
            <a :class="$style['pagination__item']" href="#">4</a>
            <a :class="$style['pagination__item']" href="#">5</a>
            <a :class="$style['pagination__item']" href="#">6</a>
            <a :class="$style['pagination__item']" href="#">7</a>

            <span :class="$style['pagination__elision']">
              <IconDot aria-labelledby="nextDesc" role="img" />
              <desc id="nextDesc" class="for-a11y">생략된 페이징</desc>
            </span>
            <a :class="$style['pagination__item']" href="#">25</a>
          </span>

          <button
            :class="[
              $style['pagination__function'],
              $style['pagination__function--next'],
            ]"
          >
            <IconLinkSmall aria-labelledby="nextDesc" role="img" />
            <desc id="nextDesc" class="for-a11y">다음</desc>
          </button>
        </div>
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
    <div :class="[$style['pagination'], 'row-margin-container-medium']">
      <button
        disabled
        :class="[
          $style['pagination__function'],
          $style['pagination__function--prev'],
        ]"
      >
        <IconLinkSmall aria-labelledby="prevDesc" role="img" />
        <desc id="catDesc" class="for-a11y">이전</desc>
      </button>
      <span :class="$style['pagination__list']">
        <a
          :class="[
            $style['pagination__item'],
            $style['pagination__item--selected'],
          ]"
          href="#"
          >1</a
        >
        <a :class="$style['pagination__item']" href="#">2</a>
        <a :class="$style['pagination__item']" href="#">3</a>
        <a :class="$style['pagination__item']" href="#">4</a>
        <a :class="$style['pagination__item']" href="#">5</a>
        <a :class="$style['pagination__item']" href="#">6</a>
        <a :class="$style['pagination__item']" href="#">7</a>

        <span :class="$style['pagination__elision']">
          <IconDot aria-labelledby="nextDesc" role="img" />
          <desc id="nextDesc" class="for-a11y">생략된 페이징</desc>
        </span>
        <a :class="$style['pagination__item']" href="#">25</a>
      </span>

      <button
        :class="[
          $style['pagination__function'],
          $style['pagination__function--next'],
        ]"
      >
        <IconLinkSmall aria-labelledby="nextDesc" role="img" />
        <desc id="nextDesc" class="for-a11y">다음</desc>
      </button>
    </div>
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
@import '@/assets/scss/views/inventoryFinance/IF_P03_p001.scss';
</style>
