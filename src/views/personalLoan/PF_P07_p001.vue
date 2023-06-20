<script>
// PF_P07_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    PageSubText,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BankLogo,
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>계좌운용규칙을 확인해 주세요</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        고객님의 안전한 투자 및 금융기관과의 안정적 금융거래를 위하여 다음과
        같이 계좌운용규칙을 운용하고 있사오니, 충분히 숙지하신 후 대출 신청해
        주시기 바랍니다.
      </PageSubText>
    </PageHead>

    <div>
      <BasicBox>
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
                  id="PF_P07_p001_agree001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText
                    >계좌운용규칙을 충분히 읽고 동의합니다.</CheckBoxLabelText
                  >
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

      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">알림사항</h3>
          <p class="text-body-1 color-gray-secondary font-weight-light">
            본 대출은 고객님의 담보율이 종가기준 최저담보유지비율 미만이면
            해당계좌 잔고 중 대출금 상환에 필요수량만큼 익일 오전 동시호가(오전
            08:45)에 반대매매하오니 계좌운용규칙을 반드시 확인하시길 바랍니다.
          </p>
        </div>

        <section class="row-margin-contents-small">
          <h4 class="text-body-1 row-margin-item-group">
            계좌동결 시 해제제도(2011년 01월 03일 기준 시행)
          </h4>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보유지비율 120~130% 미달 시 계좌동결/매수제한
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보유지비율 종가기준 120 ~ 130% 미달 시 담보물 충당을 위해 익일
                오전동시호가<br />
                (오전 08:45)/반대매매 전까지 본인계좌로 현금입금 및 대출금 일부
                상환하여 담보비율 이상으로 조정하면 계좌동결해지 및 매수가능
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                단, 위 담보물 충당은 주식입고는 불가능하며 현금입금만 가능<br />
                (주식입고가능여부는 각 해당증권사마다 상이하오니 홈페이지 FAQ를
                참고하시기 바랍니다.)
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-small">
          <h4 class="text-body-1 row-margin-item-group">
            대출금 상환 유예 안내(2009년 12월 21일 기준시행)
          </h4>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                반대매매 실행 후 D+2일(오전 8:30~오후 16:00)까지(영업일기준)
                해당계좌에 추가입금 또는 대출금 일부 상환을 통하여
                최저담보유지비율 + 3%이상 유지 시 자동으로 재거래 가능합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                재거래 기준이 충족되지 않을 경우 반대매매 실행 후
                D+3일(영업일기준) 오전 8:00에 대출금 전액 상환됩니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-small">
          <h4 class="text-body-1 row-margin-item-group">
            RMS이용료 수취상품 폐지 (2018년 7월 2일 기준 시행)
          </h4>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융감독원의 RMS이용료 미수취 권고에 따라 2018.07.02.부터 기존
                운영중이던 RMS이용료 수취상품을 폐지합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                기존 이용손님 대상으로 운영 중이던 추가대출도 RMS수수료
                수취금지로 인하여 부득이 폐지하오니 양해바랍니다.
              </div>
            </li>
          </ul>
        </section>
      </section>

      <!-- Case : 동의 후 다음 버튼 선택 시 노출 -->
      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          대출신청 진행할 증권사 선택
        </h3>

        <BoxCheckList :wrap="true">
          <BoxCheckListItem v-for="i in 9" :key="i">
            <BoxCheck
              :contents="true"
              name="PF_P07_p001_bankSelect"
              :id="`PF_P07_p001_bankSelect${i}`"
            >
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo code="081" background="true" />
                </div>

                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <div
                    class="text-body-3 color-gray font-weight-light row-margin-mini"
                  >
                    하나증권
                  </div>
                  <BoxCheckLabel :classNames="{ label: 'ellipsis' }"
                    >하나 & 스탁론 Ⅰ</BoxCheckLabel
                  >
                  <div
                    class="text-body-2 color-gray-secondary row-margin-mini ellipsis"
                  >
                    토마토파트너
                  </div>
                </div>
              </div>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>
      <!-- //Case : 동의 후 다음 버튼 선택 시 노출 -->
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p001.scss';
</style>
