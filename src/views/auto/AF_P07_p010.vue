<script>
// AF_P07_p010
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CarThumb,
    BasicHr,
  },
};
</script>

<template>
  <PageContents>
    <div>
      <IllustInfo>
        <IllustObject type="complete" />
        <IllustInfoTitle> 승계 신청이 완료되었습니다 </IllustInfoTitle>
        <IllustInfoText>
          심사결과는 등록하신 휴대폰 번호로 문자(SMS)안내 드리겠습니다.
        </IllustInfoText>
      </IllustInfo>
      <ul class="reset-list row-margin-block-small">
        <li class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">차량정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <p class="text-body-4 font-weight-light row-margin-mini">
                  2020년식
                </p>
                <h3 class="text-title-2 font-weight-medium">
                  운용리스 11가1111
                </h3>
                <p
                  class="text-body-3 color-gray-tertiary row-margin-item-small"
                >
                  쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-1',
                }"
              >
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KMHEL00CPYA000001</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>

        <li class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">리스 조건</h3>

          <!-- Case : 양수인 신청완료_리스_  신청인=양수인인 경우,전액선납 승계 시 노출 -->
          <ul :class="$style['logs']">
            <li :class="$style['logs__item']">
              <div :class="$style['logs__block']">
                <div :class="$style['logs__row']">
                  <div :class="$style['logs__contents']">
                    <h4 class="text-body-1 font-weight-medium">운용리스</h4>
                  </div>
                  <div :class="$style['logs__right']">
                    <button type="button" :class="$style['logs__link']">
                      <span :class="$style['logs__link-text']">상세보기</span>
                    </button>
                  </div>
                </div>

                <BasicHr
                  type="contents"
                  theme="quaternary"
                  className="row-margin-contents-small"
                />

                <KeyValue :wrap="true">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle>월 리스료</KeyValueTitle>
                    <KeyValueText>500,000 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle>잔여기간</KeyValueTitle>
                    <KeyValueText>00개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle
                      >승계 수수료<br />
                      (인지대 포함)</KeyValueTitle
                    >
                    <KeyValueText>5,000,000 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </li>
          </ul>
          <!-- // Case : 양수인 신청완료_리스_  신청인=양수인인 경우,전액선납 승계 시 노출 -->
          <!-- Case : 양수인 신청완료_렌트 노출-->
          <ul :class="$style['logs']">
            <li :class="$style['logs__item']">
              <div :class="$style['logs__block']">
                <div :class="$style['logs__row']">
                  <div :class="$style['logs__contents']">
                    <h4 class="text-body-1 font-weight-medium">렌터카</h4>
                  </div>
                  <div :class="$style['logs__right']">
                    <button type="button" :class="$style['logs__link']">
                      <span :class="$style['logs__link-text']">상세보기</span>
                    </button>
                  </div>
                </div>

                <BasicHr
                  type="contents"
                  theme="quaternary"
                  className="row-margin-contents-small"
                />

                <KeyValue :wrap="true">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle>월 렌트료</KeyValueTitle>
                    <KeyValueText>500,000 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle>잔여기간</KeyValueTitle>
                    <KeyValueText>00개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-1',
                    }"
                  >
                    <KeyValueTitle
                      >승계 수수료<br />(인지대 포함)</KeyValueTitle
                    >
                    <KeyValueText>5,000,000 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </li>
          </ul>
          <!-- // Case : 양수인 신청완료_렌트 노출 -->
        </li>

        <li class="row-margin-block-small">
          <h3 class="text-title-1 row-margin-contents">승계 조건</h3>
          <!-- Case : 신청인=양수인인 경우 -->
          <BasicBox>
            <h4 class="text-body-1 font-weight-regular row-margin-item-medium">
              동일한 조건으로 승계 희망
            </h4>
            <p class="text-body-3 color-gray-tertiary">
              현재 계약자의 이용 조건을 동일하게 승계합니다.
            </p>
          </BasicBox>
          <h3
            :class="[
              $style['notice-section__title'],
              'row-margin-contents-small',
              'row-margin-bottom-none',
            ]"
          >
            보험가입 안내
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
              'row-margin-item-medium',
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                양수인명의로 자동차 보험을 가입합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                자차손해 가입은 필수이며, 질권설정금액 부족/불가 시
                보증금/선납금을 추가 납입할 수 있습니다.
              </div>
            </li>
          </ul>
          <!-- //Case : 신청인=양수인인 경우 -->
          <!-- Case : 전액선납 승계 선택 시 -->
          <BasicBox>
            <h4 class="text-body-1 font-weight-regular row-margin-item-medium">
              전액선납 승계 희망
            </h4>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-3',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  심사서류가 간소화됩니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-3',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  전액선납 정산비용이 발생합니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-3',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  정산서는 심사 승인 이후 발송됩니다.
                </div>
              </li>
            </ul>
          </BasicBox>
          <h3
            :class="[
              $style['notice-section__title'],
              'row-margin-contents-small',
              'row-margin-bottom-none',
            ]"
          >
            보험가입 안내
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
              'row-margin-item-medium',
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                양수인명의로 자동차 보험을 가입합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                책임보험 가입 가능합니다.
              </div>
            </li>
          </ul>
          <!-- //Case : 전액선납 승계 선택 시 -->
          <!-- Case : 신청완료_렌트 -->
          <BasicBox>
            <h4 class="text-body-1 font-weight-regular row-margin-item-medium">
              동일한 조건으로 승계 희망
            </h4>
            <p class="text-body-3 color-gray-tertiary">
              현재 계약자의 이용 조건을 동일하게 승계합니다.
            </p>
          </BasicBox>
          <!-- Case : 신청완료_렌트 -->
        </li>
      </ul>
    </div>
    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P07_p010.scss';
</style>
