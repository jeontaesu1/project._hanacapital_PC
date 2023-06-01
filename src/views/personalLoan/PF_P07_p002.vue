<script>
// PF_P07_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NavTab,
    NavTabButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>상품안내</PageTitle>
    </PageHead>

    <section>
      <!-- Case : 2개 이상일 경우 노출 탭 노출 -->
      <NavTab :auto="true">
        <NavTabButton tagName="button" type="button" :active="true">
          NH투자증권 일반 신규/추가</NavTabButton
        >
        <NavTabButton tagName="button" type="button">
          2018년 이전 상품 한도추가</NavTabButton
        >
      </NavTab>
      <!-- // Case : 2개 이상일 경우 탭 노출 -->

      <KeyValue direction="vertical" margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >증권사</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >NH투자증권(NH&스탁론Ⅰ)</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >대출한도</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }">
            최대 250%, 최대 3억원까지<br />
            [추가대출가능금액 = (계좌평가금액 - 대출잔액) X 대출가능비율 -
            대출잔액]
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >대출기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }">
            12개월(최대 5년까지 연장가능)<br />
            만기일 : 대출일로부터 12개월 되는 월의 해당 결제일
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >대출금리</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >연 7.7%</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >연장금리</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >12개월 이후 연장 시 당사 기준금리 적용</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >취급수수료</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >없음</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >연장 및 중도상환수수료</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >없음</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >한종목 투자비율</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >최대 50%</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >로스컷비율</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >120%</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >현금인출비율</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >130% (최초 담보제공자산 중 한종목 보유비중 70% 이상일 경우 인출
            제한됨)</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >주식입출고</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >불가</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >시간외거래</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >매도주문만 가능</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >지연배상금</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >약정이율+최대3%, 법정 최고금리(24%)이내</KeyValueText
          >
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'font-weight-medium' }"
            >시스템자동제한</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-title-2' }"
            >실시간 위험관리 시스템사(RMS)에서 고객 투자안전을 위해 매수금지로
            설정한 종목 매수불가</KeyValueText
          >
        </KeyValueItem>
      </KeyValue>
    </section>

    <ButtonList :wrap="true" align="center" :col="4">
      <ButtonListItem>
        <BasicButton theme="tertiary">신규대출</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>추가대출</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
