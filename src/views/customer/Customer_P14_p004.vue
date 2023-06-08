<script>
// Customer_P14_p004
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>정보 이용·제공 조회</PageTitle>
    </PageHead>

    <div>
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
          'row-margin-block-small',
        ]"
      >
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            당사의 상품·서비스 안내 및 이용권유 등 마케팅 목적으로
            개인(신용)정보를 수집·이용하는 것에 동의한 고객에 한하여 본 서비스가
            제공됩니다. (단, 15.01.01 이전 마케팅 동의한 고객은 조회 대상에서
            제외)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            고객님께서 금융상품 신청 후 당사 대출원장 시스템에 등록될 때까지
            일정시간이 소요됨에 따라 본인정보 이용·제공현황 조회가 지연될 수
            있습니다.
          </div>
        </li>
      </ul>

      <!-- Case : 정보이용·제공 사실 조회 완료 시 노출 -->
      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">정보 이용 현황</h3>

        <p class="text-body-1 font-weight-regular">
          고객님은 현재 우리 하나캐피탈의 마케팅 영업대상이며, 조회되는 내용은
          다음과 같습니다. 당사의 마케팅을 원치 않는 경우 [정보이용 · 제공 동의
          철회] 버튼을 클릭하거나, 고객센터(1800-1111)을 통해 철회할 수
          있습니다.
        </p>

        <div :class="[$style['basic-table'], 'row-margin-item-group']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 120px" />
              <col style="width: 120px" />
              <col style="width: 240px" />
              <col style="width: 240px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th rowspan="2">동의일자</th>
                <th rowspan="2">이용일자</th>
                <th rowspan="2">이용주체</th>
                <th colspan="2">동의내용</th>
                <th rowspan="2">보유 및 이용기간</th>
              </tr>
              <tr>
                <th :class="$style['basic-table__left-line']">이용목적</th>
                <th>이용항목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2011.11.11</td>
                <td>2011.11.11</td>
                <td>CRM사업팀</td>
                <td>마케팅 목적 TM 및 SMS 발송</td>
                <td>성명, 금융거래내역, 핸드폰번호</td>
                <td>금융거래 종료일 또는 마케팅 동의철회일까지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- Case : 정보이용·제공 사실 조회 완료 시 노출 -->

      <!-- Case : 정보이용·제공 사실 조회 완료_철회 선택 시 내역 없는 경우 노출 -->
      <BasicBox theme="tertiary">
        <div :class="$style['empty']">
          <p :class="[$style['empty__text'], 'font-weight-light']">
            고객님의 정보로 이용된 내역이 없습니다
          </p>
        </div>
      </BasicBox>
      <!-- // Case : 정보이용·제공 사실 조회 완료_철회 선택 시 내역 없는 경우 노출 -->

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">정보 제공 현황</h3>

        <p class="text-body-1 font-weight-regular">
          최근 3년간 고객님의 개인정보를 마케팅 목적으로 다른 회사에 제공할 수
          있도록 다음과 같이 동의 받은 사실이 있습니다.<br />
          당사의 마케팅을 원치 않는 경우 [정보이용·제공 동의 철회] 버튼을
          클릭하거나, 고객센터(1800-1110)를 통해 철회할 수 있습니다.
        </p>

        <p class="text-body-1 font-weight-regular row-margin-item-medium">
          하나캐피탈은 마케팅목적으로 개인신용정보를 다른회사(제3자)에게
          제공하지 않습니다.
        </p>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">
          개인(신용)정보 이용 및 제공 사실의 통지 요청
        </h3>

        <p class="text-body-1 font-weight-regular">
          고객님은 당사에 본인의 개인(신용)정보 이용 및 제공 사실의 통지를
          요청하실 수 있습니다.<br />
          당사 손님상담센터(1800-1110)로 신청하여 주시기 바랍니다.
        </p>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">
          마케팅 수신정보 철회 신청
        </h3>

        <p class="text-body-1 font-weight-regular">
          현재 손님께서 동의한 마케팅 수신정보 채널이 선택되어 있습니다.<br />
          마케팅을 원하지 않는 경우, 철회 채널을 선택하시고 [정보이용·제공 동의
          철회] 버튼을 클릭하세요.<br />
          마케팅 수신정보 철회 시, 이후부터 손님의 정보가 더 이상 제공되지
          않습니다.<br />
          이미 전달된 정보는 각 고객사에 별도로 철회를 요청해야 합니다.
        </p>

        <section class="row-margin-contents">
          <h4 class="text-body-1 font-weight-medium row-margin-item-group">
            동의채널
          </h4>

          <ul class="reset-list flex-box">
            <li class="flex-box__cell">
              <CheckBox id="Customer_P14_p004_agree001" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>전화</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="flex-box__cell">
              <CheckBox id="Customer_P14_p004_agree002" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>SMS</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="flex-box__cell">
              <CheckBox id="Customer_P14_p004_agree003" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>우편</CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="flex-box__cell">
              <CheckBox id="Customer_P14_p004_agree004" theme="quinary">
                <CheckBoxObject />
                <CheckBoxLabelText>이메일</CheckBoxLabelText>
              </CheckBox>
            </li>
          </ul>
        </section>
      </section>
    </div>

    <ButtonList :wrap="true" align="center" :col="4">
      <ButtonListItem>
        <BasicButton :line="true">정보이용·제공 동의 철회</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton :line="true">정보이용·제공 내역 출력</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p004.scss';
</style>
