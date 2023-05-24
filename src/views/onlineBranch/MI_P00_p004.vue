<script>
// MI_P00_p004
import { reactive } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
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
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
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
    BasicSelect,
  },

  setup() {
    const state = reactive({
      billingMethodError: false,
      addressError: false,
      emailError: false,
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
      <PageHeadRow>
        <PageTitle align="left">청구 방법/청구지 변경</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        청구 방법/청구지를 변경해 주세요
      </PageMainText>
    </PageHead>

    <section>
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
                청구 방법 및 청구지를 변경할 수 있습니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                청구지에 대한 주소 변경을 원하실 경우, [온라인지점 > 내정보관리]
                메뉴를 이용하세요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                스탁론은 변경이 불가하며 고객센터(1800-1110)로 연락 바랍니다.
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

      <ul class="reset-list row-margin-block-small">
        <li v-for="i in 5" :key="i" class="row-margin-contents">
          <BasicBox>
            // contnets
            <BasicBox theme="tertiary">
              <FormList>
                <FormListItem
                  titleText="청구방법"
                  target="#MI_P00_p004_billingMethod"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.billingMethodError">
                    <InputBlock :error="state.billingMethodError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '미발송',
                            },
                            {
                              value: '2',
                              label: '온라인(SMS)',
                            },
                            {
                              value: '3',
                              label: '우편',
                            },
                            {
                              value: '4',
                              label: '이메일',
                            },
                            {
                              value: '5',
                              label: '우편+이메일',
                            },
                            {
                              value: '6',
                              label: '우편(지속)',
                            },
                            {
                              value: '7',
                              label: '우편(지속)+이메일',
                            },
                          ]"
                          title="청구방법"
                          inputId="MI_P00_p004_billingMethod"
                          defaultValue="1"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <!-- Case : 우편 + 이메일, 우편(지속), 우편(지속)+이메일 선택 시 노출  -->
                <!-- Case : 청구방법 우편 선택 시 노출  -->
                <FormListItem
                  titleText="청구지주소"
                  target="#MI_P00_p004_address"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.addressError">
                    <InputBlock :error="state.addressError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label:
                                '사업장1 (01000 인천 서구 에코로 181 하나금융 로비)',
                            },
                            {
                              value: '2',
                              label:
                                '사업장2 (01000 인천 서구 에코로 181 하나금융 로비)',
                            },
                            {
                              value: '3',
                              label:
                                '사업장3 (01000 인천 서구 에코로 181 하나금융 로비)',
                            },
                          ]"
                          title="청구지주소"
                          inputId="MI_P00_p004_address"
                          defaultValue="1"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : 청구방법 우편 선택 시 노출  -->

                <!-- Case : 청구방법 이메일 선택 시 노출  -->
                <FormListItem
                  titleText="이메일주소"
                  target="#MI_P00_p004_email"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.emailError">
                    <InputBlock :error="state.emailError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: 'test1@test.com',
                            },
                            {
                              value: '2',
                              label: 'test2@test.com',
                            },
                            {
                              value: '3',
                              label: 'test3@test.com',
                            },
                          ]"
                          title="이메일주소"
                          inputId="MI_P00_p004_email"
                          defaultValue="1"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : 청구방법 이메일 선택 시 노출  -->
                <!-- // Case : 우편 + 이메일, 우편(지속), 우편(지속)+이메일 선택 시 노출  -->
              </FormList>
            </BasicBox>
          </BasicBox>
        </li>
      </ul>
    </section>

    <ButtonList align="full">
      <ButtonListItem>
        <BasicButton>변경 신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onlineBranch/MI_P00_p004.scss';
</style>
