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
import TextButton from '@/components/ui/button/TextButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
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
    TextButton,
    InputBlock,
    InputBlockCell,
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

    <div class="flex-box">
      <div class="flex-box__cell flex-1">
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
              각 계약별로 조회를 원하실 경우 [계약 정보 > 계약 현황]의 각 계약을
              클릭하세요.
            </div>
          </li>
        </ul>
      </div>
      <div class="flex-box__cell flex-box__cell--medium">
        <TextButton
          textSize="regular"
          theme="secondary"
          :underline="true"
          :block="true"
        >
          바로가기
        </TextButton>
      </div>
    </div>

    <section>
      <FormList>
        <FormListItem
          titleText="조회기간"
          target="#MI_P00_p013_date"
          :selectOnly="true"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                //datepicker 대기
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
    </section>

    <BasicHr theme="tertiary" className="row-margin-block" />

    <!-- Case : 범칙금 조회 시 노출 -->
    <section>
      <h3 class="text-title-1 row-margin-contents">범칙금 조회 결과</h3>

      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents">
          <BasicBox>
            // contnets
            <BasicBox theme="tertiary"> // keyvalue 대기 </BasicBox>
          </BasicBox>
        </li>
      </ul>
    </section>
    <!-- // Case : 범칙금 조회 시 노출 -->

    <!-- Case : 자동차세 조회 시 노출 -->
    <section>
      <h3 class="text-title-1 row-margin-contents">자동차세 조회 결과</h3>

      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-contents">
          <BasicBox>
            // contnets
            <BasicBox theme="tertiary"> // keyvalue 대기 </BasicBox>
          </BasicBox>
        </li>
      </ul>
    </section>
    <!-- // Case : 자동차세 조회 시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p013.scss';
</style>
