<script>
// My_P06_p012
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    TextButton,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>약정목록을 확인하고 약정을 진행하세요</PageTitle>
    </PageHead>

    <!-- Case : 약정목록 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">현재 등록된 약정 내역이 없습니다.</p>
    </div>
    <!-- // Case : 약정목록 없는 경우 -->

    <!-- Case : 약정목록 있는 경우 -->
    <div>
      <div class="inline-wrap align-right row-margin-contents">
        <TextButton
          :underline="true"
          :classNames="{
            wrap: 'color-gray-tertiary',
          }"
          >온라인 약정 이용가이드</TextButton
        >
      </div>

      <ul class="reset-list">
        <!-- Case : 정상 (신규) -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 정상 (신규) -->

        <!-- Case : 연장 (만기연장) -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">렌터카</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  연장 (만기연장)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>-</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 연장 (만기연장) -->

        <!-- Case : 승계 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">
                  렌터카 승계김하나
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  승계
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 승계 -->

        <!-- Case : 신규 -->
        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  신규
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- // Case : 신규 -->

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>

        <li class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </div>
                <h3 class="text-title-2 font-weight-medium">내구재</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="undenary" size="large" :block="true">
                  정상 (신규)
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>총 이용기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>501,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              align="center"
              :classNames="{
                wrap: 'row-margin-contents',
              }"
            >
              <ButtonListItem>
                <BasicButton size="regular">약정하기</BasicButton>
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
    <!-- // Case : 약정목록 있는 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/My_P06_p012.scss';
</style>
