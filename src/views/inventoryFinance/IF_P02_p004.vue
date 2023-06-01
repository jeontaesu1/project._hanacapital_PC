<script>
// IF_P02_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle
        ><span class="color-green">주식회사알차이노베이션</span>님,<br />
        총 <span class="color-green">2건</span> 차량 재고로 총
        <span class="color-green">60,000,000원</span><br />대출
        신청하셨습니다.</PageTitle
      >
      <PageSubText>확인 후 약정해 주세요.</PageSubText>
    </PageHead>

    <div>
      <ul class="reset-list">
        <li v-for="i in 2" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <p class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </p>
                <h3 class="text-title-2 font-weight-medium">
                  재고금융Ⅱ20고5678
                </h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>200,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KNALD2237A21548</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText>만기일시상환</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출금리</KeyValueTitle>
                <KeyValueText>7.5%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>연체이자율</KeyValueTitle>
                <KeyValueText>약정대출금리 + 3%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>만기일자</KeyValueTitle>
                <KeyValueText>2023.02.11</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일자</KeyValueTitle>
                <KeyValueText
                  >매월 11일<br />(최초결제일 2월 11일)</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>총 납부 금액<br />(원금+이자)</KeyValueTitle>
                <KeyValueText>10,500,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>서류등록</KeyValueTitle>
                <KeyValueText>
                  <div :class="['inline-wrap', $style['text-buttons']]">
                    <TextButton
                      :underline="true"
                      theme="secondary"
                      textSize="regular"
                      >서류확인</TextButton
                    >
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>

      <BasicBox theme="quaternary" className="row-margin-contents">
        <div :class="$style['agree-list']">
          <ul
            :class="[
              $style['agree-list__list'],
              $style['agree-list__list--secondary'],
              $style['agree-list__list--secondary-no-padding'],
            ]"
          >
            <li :class="$style['agree-list__item']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="IF_P02_p004_agree"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>재고금융 확약서</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
                    <span :class="$style['agree-list__link-text']">
                      상세보기
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">
        대출신청 내용을 확인하고 약정합니다.
      </h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P02_p004_confirmAgree"
            id="IF_P02_p004_confirmAgree001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>예</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P02_p004_confirmAgree"
            id="IF_P02_p004_confirmAgree002"
          >
            <BoxCheckLabel>아니오</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <div class="row-margin-block-small row-margin-bottom-none">
      // [공통 > 본인인증] 내용 노출
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>약정하기</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P02_p004.scss';
</style>
