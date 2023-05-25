<script>
// MI_P00_p013
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicHr,
  },

  setup() {
    const state = reactive({
      dateError: false,
      dateMinDate: '2022.02.17',
      dateMaxDate: '2022.03.17',
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
      <PageTitle>범칙금/자동차세 조회</PageTitle>
    </PageHead>

    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              각 계약별로 조회를 원하실 경우 [계약 정보 > 계약 현황]의 각 계약을
              클릭하세요.
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                :classNames="{ wrap: $style['right-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="row-margin-block-small row-margin-bottom-none">
      <FormList>
        <FormListItem
          titleText="조회기간"
          target="#MI_P00_p013_dateStartButton"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="MI_P00_p013_dateStart"
                  buttonId="MI_P00_p013_dateStartButton"
                  :max="state.dateMaxDate"
                  v-model="state.dateMinDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">~</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="MI_P00_p013_dateEnd"
                  buttonId="MI_P00_p013_dateEndButton"
                  :min="state.dateMinDate"
                  v-model="state.dateMaxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>조회기간은 최대 1년까지 가능합니다.</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true">범칙금 조회</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :line="true">자동차세 조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <!-- DD : 조회 버튼 클릭 시 노출 -->
    <BasicHr theme="tertiary" className="row-margin-block" />

    <!-- Case : 범칙금 조회 시 노출 -->
    <section>
      <h3 class="text-title-1 row-margin-contents">범칙금 조회 결과</h3>

      <!-- Case : 조회 결과 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
      </div>
      <!-- // Case : 조회 결과 없을 경우 -->

      <!-- Case : 조회 결과 있을 경우 -->
      <ul class="reset-list">
        <li v-for="i in 2" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토리스 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        BMW 435d
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>위반내용</KeyValueTitle>
                <KeyValueText>속도위반 (40km/h 초과)</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>위반일자</KeyValueTitle>
                <KeyValueText>2022.10.21 16:49:00</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>관할기관</KeyValueTitle>
                <KeyValueText>모니토오아리</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>과세금액</KeyValueTitle>
                <KeyValueText>60,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>발생장소</KeyValueTitle>
                <KeyValueText>인제군 남면 관대리 인제1동 41</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 조회 결과 있을 경우 -->
    </section>
    <!-- // Case : 범칙금 조회 시 노출 -->

    <!-- Case : 자동차세 조회 시 노출 -->
    <section>
      <h3 class="text-title-1 row-margin-contents">자동차세 조회 결과</h3>

      <!-- Case : 조회 결과 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
      </div>
      <!-- // Case : 조회 결과 없을 경우 -->

      <!-- Case : 조회 결과 있을 경우 -->
      <ul class="reset-list">
        <li v-for="i in 2" :key="i" class="row-margin-contents">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-title-2 font-weight-medium">
                  오토리스 20고5678
                </h3>
                <div
                  :class="[$style['division-info'], 'row-margin-item-small']"
                >
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        BMW 435d
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="text-body-3 color-gray-tertiary">
                        L99999999999999
                      </div>
                    </li>
                  </ul>
                </div>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>납부기일</KeyValueTitle>
                <KeyValueText>2022.10.21</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>과세금액</KeyValueTitle>
                <KeyValueText>360,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>발급관청</KeyValueTitle>
                <KeyValueText>모니토오아리</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 조회 결과 있을 경우 -->
    </section>
    <!-- // Case : 자동차세 조회 시 노출 -->
    <!-- // DD : 조회 버튼 클릭 시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p013.scss';
</style>
