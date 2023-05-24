<script>
// MI_P00_p007
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
      smsError: false,
      phoneError: false,
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
        <PageTitle align="left">SMS안내 수신/변경</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        SMS안내 수신 변경을 진행해 주세요
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
                SMS안내 수신 여부와 안내를 받을 연락처를 설정할 수 있습니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                SMS안내 수신을 받을 전화번호 수정을 원하실 경우 [온라인지점 >
                내정보관리] 메뉴를 이용하세요.
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
                  titleText="SMS 수신"
                  target="#MI_P00_p007_sms"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.smsError">
                    <InputBlock :error="state.smsError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '수신',
                            },
                            {
                              value: '2',
                              label: '미수신',
                            },
                          ]"
                          title="SMS 수신"
                          inputId="MI_P00_p007_sms"
                          defaultValue="1"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <!-- Case : 수신 선택 시 노출  -->
                <FormListItem
                  titleText="연락처"
                  target="#MI_P00_p007_phone"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.phoneError">
                    <InputBlock :error="state.phoneError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :options="[
                            {
                              value: '1',
                              label: '휴대전화1 (010-1234-5678)',
                            },
                            {
                              value: '2',
                              label: '휴대전화2 (010-1234-5678)',
                            },
                            {
                              value: '3',
                              label: '휴대전화3 (010-1234-5678)',
                            },
                          ]"
                          title="연락처"
                          inputId="MI_P00_p007_phone"
                          defaultValue="1"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : 수신 선택 시 노출  -->
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
@import '@/assets/scss/views/onlineBranch/MI_P00_p007.scss';
</style>
